var officesMapWidget = (function () {

  function prepareWidgetDOM(initSettings) {
    var hostElement = document.getElementById(initSettings.hostElementId);
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
                      + '<div id="map"></div>'
                        + '<div class="col-md-4 offices-map-widget-filters">'
                          + '<button id="offices-map-widget-filters-button" class="btn btn-default">Фильтры</button>'
                          + '<div id="offices-map-widget-filters-panel">'
                            + '<form><div class="checkbox"><label><input type="checkbox">Name</label></div></form>'
                          + '</div>'
                        + '</div>'
                    + '</div>'
                  + '</div>';

    hostElement.innerHTML = template;
    var widget = hostElement.firstChild;
    widget.id = widgetSettings.widgetId;

    var mapContainer = document.getElementById('map-container');
    var search = widget.firstChild;

    mapContainer.style.height = widget.offsetHeight - search.offsetHeight + "px";
  }

  function FiltersPanel(id) {
    this.el = document.getElementById(id);
    this.enabled = false;
    this.toggle = function() {
      this.enabled ? this.el.style.opacity = 0 : this.el.style.opacity = 0.5;
      this.enabled = !this.enabled;
    }
  }

  function bind() {
    var filtersButton = document.getElementById('offices-map-widget-filters-button');
    var filtersPanel = new FiltersPanel('offices-map-widget-filters-panel');

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
