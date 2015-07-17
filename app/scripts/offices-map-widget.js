var officesMapWidget = (function () {

  function prepareWidgetDOM(initSettings) {
    var template = '<div class="panel panel-default">'
                    //search element start
                    + '<div class="panel-heading input-group">'
                      + '<input type="text" class="form-control" placeholder="Адрес, номер дома или станция метро">'
                      + '<span class="input-group-btn">'
                        + '<button class="btn btn-default" type="button">Найти!</button>'
                      + '</span>'
                    + '</div>'
                    //search element end

                    + '<div class="panel-body" id="map-container">'
                      + '<button id="offices-map-widget-filters-button" class="btn btn-default">Фильтры</button>'
                      + '<div id="map"></div>'
                      + '<div id="offices-map-widget-filters" class="col-md-4">'
                        + '<div class="checkbox"><label><input type="checkbox">Name</label></div>'
                      + '</div>'
                    + '</div>'
                  + '</div>';

    var hostElement = document.getElementById(initSettings.hostElementId);
    hostElement.innerHTML = template;

    var widget = hostElement.firstChild;
    widget.id = widgetSettings.widgetId;

    var mapContainer = document.getElementById(widgetSettings.mapContainerId);
    var map = document.getElementById(widgetSettings.mapId);
    var search = widget.firstChild;

    mapContainer.style.height = widget.offsetHeight - search.offsetHeight + "px";
    map.style.height = widget.offsetHeight - search.offsetHeight - 2 + "px";// -2 because of borders
  }

  function Filter(parameters) {
    var template = '<div class="checkbox" data="' + parameters.name + '"><label><input type="checkbox">' + parameters.description + '</label></div>';
    this.el = getElementFromHTHML(template);
  }

  function FiltersPanel(parameters) {
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

    this.el = document.getElementById(parameters.id);
    this.enabled = false;
    this.toggle = function() {
      //this.enabled ? this.el.style.opacity = 0 : this.el.style.opacity = 0.5;
      this.enabled ? hide() : show();
      this.enabled = !this.enabled;
    }
  }

  function bind() {
    var filtersButton = document.getElementById(widgetSettings.buttonId);
    var filtersPanel = new FiltersPanel(widgetSettings.filtersPanel);

    filtersButton.addEventListener('click', function() {
      filtersPanel.toggle();
    })
  }

  function init(initSettings) {
    prepareWidgetDOM(initSettings);
    bind();

    map.init(initSettings);
  }

  return {
    init: init
  }
})();
