//var officesMapWidget = (function () {
//
//  function prepareWidgetDOM(initSettings) {
//    var template = '<div class="panel panel-default">'
//                    //search panel start
//                    + '<div class="panel-heading input-group">'
//                      + '<input type="text" class="form-control" placeholder="Адрес, номер дома или станция метро">'
//                      + '<span class="input-group-btn">'
//                        + '<button id="offices-map-widget-search-btn" class="btn btn-default" type="button">Найти!</button>'
//                      + '</span>'
//                    + '</div>'
//                    //search panel end
//
//                    + '<div class="panel-body" id="map-container">'
//                      + '<button id="offices-map-widget-filters-button" class="btn btn-default">Фильтры</button>'
//                      + '<div id="map"></div>'
//                      + '<div id="offices-map-widget-filters" class="col-md-4">'
//                        //+ '<div class="checkbox"><label><input type="checkbox">Name</label></div>'
//                      + '</div>'
//                    + '</div>'
//                  + '</div>';
//
//    var hostElement = document.getElementById(initSettings.hostElementId);
//    hostElement.innerHTML = template;
//
//    var widget = hostElement.firstChild;
//    widget.id = widgetSettings.widgetId;
//
//    var mapContainer = document.getElementById(widgetSettings.mapContainerId);
//    var map = document.getElementById(widgetSettings.mapId);
//    var search = widget.firstChild;
//
//    mapContainer.style.height = widget.offsetHeight - search.offsetHeight + "px";
//    map.style.height = widget.offsetHeight - search.offsetHeight - 2 + "px";// -2 because of borders
//  }
//
//  function Filter(parameters) {
//    var template = '<div class="checkbox" data="' + parameters.name + '"><label><input type="checkbox">' + parameters.description + '</label></div>';
//    this.el = createDOMFromString(template);
//    this.checkbox = this.el.getElementsByTagName('input')[0];
//    this.checkbox.addEventListener('click', this.clickEventListener );
//  }
//
//  Filter.prototype.clickEventListener = function(e) {
//    console.log('filter clicked');
//
//    $.post('http://bee2map.azurewebsites.net/api/map/find'
//      ,{Metro:'Охотный ряд'}
//      ,function(data) {
//      console.log(data);
//    });
//
//  };
//
//  function Widget(initSettings) {
//    var self = this;
//    var hostElement = document.getElementById(initSettings.hostElementId);
//
//    this.el = createDOMFromString(widgetSettings.widget.template);
//    this.el.id = widgetSettings.widgetId;
//
//
//
//    hostElement.appendChild(self.el);
//
//    debugger;
//  }
//
//  function FiltersPanel(parameters) {
//    var self = this;
//
//    function show() {
//      self.el.style.display = 'block';
//      self.el.style.opacity = 0.8;
//    }
//
//    function hide() {
//      self.el.style.opacity = 0;
//      setTimeout(function() {
//        self.el.style.display = 'none';
//      }, 200);
//    }
//
//    function addFilters(filters) {
//      var fragment = document.createDocumentFragment();
//      var filter;
//      filters.forEach(function(filterParameters, i, list) {
//        filter = new Filter(filterParameters);
//        self.filters.push(filter);
//        fragment.appendChild(filter.el);
//      });
//
//      self.el.appendChild(fragment);
//    }
//
//    this.el = document.getElementById(parameters.id);
//    this.enabled = false;
//    this.filters = [];
//    this.toggle = function() {
//      this.enabled ? hide() : show();
//      this.enabled = !this.enabled;
//    };
//
//    addFilters(parameters.filters);
//  }
//
//  function SearchPanel() {
//    var self = this;
//    this.el = document.createDocumentFragment();
//    this.el.innerHTML = widgetSettings.searchPanel.template;
//
//    console.log(self.el);
//  }
//
//  function bind() {
//
//    var filtersButton = document.getElementById(widgetSettings.filtersButtonId);
//    var filtersPanel = new FiltersPanel(widgetSettings.filtersPanel);
//    var searchButton = document.getElementById(widgetSettings.searchButtonId);
//
//    filtersButton.addEventListener('click', function() {
//      filtersPanel.toggle();
//    });
//
//    searchButton.addEventListener('click', function(e) {
//      debugger;
//      console.log('search clicked');
//      map.makeSearch()
//    });
//
//    //var test = new SearchPanel();
//  }
//
//  function init(initSettings) {
//
//    //initSettings = {
//    //  hostElementId: "offices-map"
//    //  , center: [55.76, 37.64]
//    //};
//
//    //prepareWidgetDOM(initSettings);
//    var test = new Widget(initSettings);
//    bind();
//
//    map.init(initSettings);
//  }
//
//  return {
//    init: init
//  }
//})();
