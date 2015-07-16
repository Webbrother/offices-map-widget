var officesMapWidget = (function () {

  function prepareWidgetDOM(initSettings) {
    var widget = document.createElement('div');
    var hostElement = document.querySelector(initSettings.hostElement);

    widget.id = 'offices-map-widget';
    widget.innerHTML =  '<div>' +
                          '<input type="text" placeholder="Адрес, номер дома или станция метро" />' +
                          '<span>' +
                            '<button type="button">Найти</button>' +
                          '</span>' +
                        '</div>' +
                        '<div id="map" class="panel"></div>';

    hostElement.appendChild(widget);

    var map = document.querySelector('#map');
    var search = widget.firstChild;

    map.style.height = widget.offsetHeight - search.offsetHeight + "px";
  }

  function init(initSettings) {
    prepareWidgetDOM(initSettings);

    map.init();
  }

  return {
    init: init
  }
})();
