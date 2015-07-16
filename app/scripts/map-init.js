var map = (function () {
  var map,
    myPlacemark;

  function init() {
    map = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 7,
      controls: [
        'fullscreenControl'
        //, 'geolocationControl'
        , 'typeSelector'
        //, 'zoomControl'
      ]
    });

    myPlacemark = new ymaps.Placemark(
      [55.76, 37.64],
      {
        content: "Москва!",
        balloonContent: "Столица России"
      }
    );

    map.geoObjects.add(myPlacemark);

    //map.controls.add('zoomControl', {float: 'right'});

    var geolocationControl = new ymaps.control.GeolocationControl({
      options: {
        //size: 'small',
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

    map.controls.add(geolocationControl);
    map.controls.add(zoomControl);

    var myButton = new ymaps.control.Button("Моя кнопка");

    map.controls.add(myButton, {float: 'left'});

  }

  return {
    init: function() {
      ymaps.ready(init);
    }
  }
})();
