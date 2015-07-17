var map = (function () {
  var map,
    myPlacemark;

  function init(parametets) {
    map = new ymaps.Map("map", {
      center: parametets.center,
      zoom: 7,
      controls: ['fullscreenControl']
    });

    //myPlacemark = new ymaps.Placemark(
    //  //[55.76, 37.64],
    //  parametets.center,
    //  {
    //    content: "Москва!",
    //    balloonContent: "Столица России"
    //  }
    //);

    // Загружаем данные

    $.getJSON('http://bee2map.azurewebsites.net/api/map/all', function (json) {

      var geoObjects = ymaps.geoQuery(json)
        .addToMap(map)
        .applyBoundsToMap(map, { checkZoomRange: true });
    });

    map.geoObjects.add(myPlacemark);

    var geolocationControl = new ymaps.control.GeolocationControl({
      options: {
        size: 'small',
        position: {
          right: 10,
          top: 50
        }
      }
    });
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: 'small',
        position: {
          right: 10,
          top: 90
        }
      }
    });

    map.controls
      .add(geolocationControl)
      .add(zoomControl);
  }

  return {
    init: function (parameters) {
      ymaps.ready(function() {
        init(parameters);
      });
    }
  }
})();
