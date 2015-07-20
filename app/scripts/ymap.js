var ymap = (function () {
  var map,
    myPlacemark;

  function init(initSettings, wSettings) {
    map = new ymaps.Map(wSettings.map.id, {
      center: initSettings.center,
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
    //map.geoObjects.add(myPlacemark);
    // Загружаем данные
    //$.getJSON('http://bee2map.azurewebsites.net/api/map/all', function (json) {
    //
    //  var geoObjects = ymaps.geoQuery(json)
    //    .addToMap(map)
    //    .applyBoundsToMap(map, { checkZoomRange: true });
    //});

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

    /* Пример вызова поиска */
    var criteria = new Object();
      //criteria.Metro = 'метро Охотный ряд';
      //criteria.IsClientCenter = false;
      //criteria.IsDealer = false;
      //criteria.IsPartner = false;
      //criteria.IsOnlineShop = true;

    makeSearch(criteria);
  }

  function makeSearch(criteria) {
    $.ajax({
      url: initSettings.dataSourceURL,
      data: criteria,
      type: "POST",
      success: function (json) {
        map.geoObjects.removeAll();
        ymaps.geoQuery(json)
          .addToMap(map)
          .applyBoundsToMap(map, { checkZoomRange: true });
      },
      error: function (data) {
        console.error('Не удалось получить данные с сервера.', data);
      }
    });
  }

  return {
    init: function (initSettings, wSettings) {
      ymaps.ready(function() {
        init(initSettings, wSettings);
      });
    },
    makeSearch: makeSearch
  }
})();
