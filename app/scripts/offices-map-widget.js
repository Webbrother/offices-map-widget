var officesMapWidget = (function () {

  function Element() {
  }

  Element.prototype.init = function(settings) {
    this.el = createDOMFromString(settings.template);
    this.el.id = settings.id;
    this.container = document.getElementById(settings.containerId);
    this.container.appendChild(this.el);
  };

  function Widget(settings) {
    var self = this;
    this.init(settings);
  }

  Widget.prototype = new Element();

  function SearchPanel(settings) {
    var self = this;
    this.init(settings);
    this.button = this.el.querySelector('button');
    this.input = this.el.querySelector('input');

    this.search = function() {
      var criteria = {Metro: self.input.value};
      ymap.makeSearch(criteria);
    };

    this.button.addEventListener('click', function(e) {
      self.search();
    });

    this.input.addEventListener("keypress", function() {
      if (event.keyCode == 13) self.search();
    });
  }

  SearchPanel.prototype = new Element();

  function Filter(parameters) {
    var self = this;
    var template = '<div class="checkbox" data="' + parameters.name + '"><label><input type="checkbox">' + parameters.description + '</label></div>';
    this.name = parameters.name;
    this.el = createDOMFromString(template);
    this.checkbox = this.el.getElementsByTagName('input')[0];
    this.checkbox.addEventListener('click', self.clickEventListener.bind(self) );
  }

  Filter.prototype.clickEventListener = function(e) {
    this.parent.criteria['Is' + this.name] = this.checkbox.checked;
    ymap.makeSearch(this.parent.criteria);
  };

  function FiltersPanel(settings) {
    this.init(settings);
    var self = this;

    function show() {
      self.el.style.display = 'block';
      self.el.style.opacity = 0.8;
    }
    function hide() {
      self.el.style.opacity = 0;
      setTimeout(function() {
        self.el.style.display = 'none';
      }, 200);
    }
    function addFilters(filters) {
      var fragment = document.createDocumentFragment();
      var filter;
      filters.forEach(function(filterParameters, i, list) {
        filter = new Filter(filterParameters);
        filter.parent = self;
        self.filters.push(filter);
        fragment.appendChild(filter.el);
      });

      self.el.appendChild(fragment);
    }

    //this.el = document.getElementById(parameters.id);
    this.enabled = false;
    this.filters = [];
    this.criteria = {
      Metro: '',
      IsClientCenter: false,
      IsDealer: false,
      IsPartner: false,
      IsOnlineShop: false
    };

    this.toggle = function() {
      this.enabled ? hide() : show();
      this.enabled = !this.enabled;
    };

    addFilters(settings.filters);
    var filtersButton = document.getElementById(settings.button.id);

    filtersButton.addEventListener('click', function() {
      self.toggle();
    });

  }

  FiltersPanel.prototype = new Element();

  FiltersPanel.prototype.init = function(settings) {
    this.el = createDOMFromString(settings.template);
    this.el.id = settings.id;
    this.button = createDOMFromString(settings.button.template);

    this.container = document.getElementById(settings.containerId);
    this.container.appendChild(this.button);
    this.container.appendChild(this.el);
  };

  function MapContainer(settings, searchPanel) {
    this.init(settings);
    this.el.style.height = this.container.offsetHeight - searchPanel.el.offsetHeight + 'px';
  }

  MapContainer.prototype = new Element();

  function Map(settings, widget, searchPanel) {
    this.init(settings);
    this.el.style.height = widget.el.offsetHeight - searchPanel.el.offsetHeight - 2 + "px";
  }

  Map.prototype = new Element();


  function init(initSettings) {
    wSettings = widgetSettings.get(initSettings);

    var widget = new Widget(wSettings.widget);
    var searchPanel = new SearchPanel(wSettings.searchPanel);
    var mapContainer = new MapContainer(wSettings.mapContainer, searchPanel);
    var map = new Map(wSettings.map, widget, searchPanel);
    var filtersPanel = new FiltersPanel(wSettings.filtersPanel);

    ymap.init(initSettings, wSettings);

  }

  return {
    init: init
  }
})();
