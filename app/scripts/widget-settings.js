var widgetSettings = (function() {

  function get(initSettings) {
    //var _ = 'offices-map';
    var widgetId = 'offices-map-widget',
        mapContainerId = 'offices-map-widget-map-container',
        mapId = 'offices-map-widget-map';

    return {
      //widgetId: 'offices-map-widget',
      //
      //filtersButtonId: 'offices-map-widget-filters-button',
      //searchButtonId: 'offices-map-widget-search-btn',

      widget: {
        containerId: initSettings.hostElementId,
        id: widgetId,
        template: '<div class="panel panel-default">'
                  //search panel here
                  //+ '<div class="panel-body" id="' + mapContainerId + '">'
                    //+ '<div id="' + mapId + '"></div>'
                    //+ '<button id="offices-map-widget-filters-button" class="btn btn-default">Фильтры</button>'
                    //+ '<div id="offices-map-widget-filters" class="col-md-4">'
                    //+ '<div class="checkbox"><label><input type="checkbox">Name</label></div>'
                  //+ '</div>'
                  //+ '</div>'
                + '</div>'
      },


      searchPanel: {
        containerId: widgetId,
        id: 'offices-map-widget-search-panel',
        template: '<div class="panel-heading input-group">'
                + '<input type="text" class="form-control" placeholder="Адрес, номер дома или станция метро">'
                + '<span class="input-group-btn">'
                + '<button id="offices-map-widget-search-btn" class="btn btn-default" type="button">Найти!</button>'
                + '</span>'
                + '</div>'
      },

      mapContainer:{
        containerId: widgetId,
        id: mapContainerId,
        template: '<div class="panel-body" id="' + mapContainerId + '"></div>'
      },

      map: {
        containerId: mapContainerId,
        id: mapId,
        template: '<div id="' + mapId + '"></div>'
      },

      filtersPanel: {
        containerId: mapContainerId,
        id: 'offices-map-widget-filters-panel',
        template: '<div id="offices-map-widget-filters" class="col-md-4">',
        button: {
          id: 'offices-map-widget-filters-button',
          template: '<button id="offices-map-widget-filters-button" class="btn btn-default">Фильтры</button>',
        },
        filters: [{
          // list of filters here:

          //criteria.IsClientCenter = false;
          //criteria.IsDealer = false;
          //criteria.IsPartner = false;
          //criteria.IsOnlineShop = true;


          name: 'ClientCenter',
          description: 'Офисы и центры обслуживания'
        },{
          name: 'Dealer',
          description: 'Дилеры'
        },{
          name: 'Partner',
          description: 'Партнёры'
        },{
          name: 'OnlineShop',
          description: 'Интернет-магазин'
        }]
      }
    }
  }

  return {
    get: get
  }

})();
//
//var widgetSettings = {
//  widgetId: 'offices-map-widget',
//  mapId: 'map',
//  filtersButtonId: 'offices-map-widget-filters-button',
//  searchButtonId: 'offices-map-widget-search-btn',
//  mapContainerId: 'map-container',
//
//  widget: {
//    containerId: settings.hostElementId,
//    id: 'offices-map-widget',
//    template: '<div class="panel panel-default">'
//                //search panel here
//                + '<div class="panel-body" id="map-container">'
//                  + '<button id="offices-map-widget-filters-button" class="btn btn-default">Фильтры</button>'
//                  + '<div id="map"></div>'
//                  + '<div id="offices-map-widget-filters" class="col-md-4">'
//                    //+ '<div class="checkbox"><label><input type="checkbox">Name</label></div>'
//                  + '</div>'
//                + '</div>'
//              + '</div>'
//  },
//
//
//  filtersPanel: {
//    id: 'offices-map-widget-filters',
//    filters: [{
//      // list of filters here:
//      name: 'offices',
//      description: 'Офисы и центры обслуживания'
//    },{
//      name: 'dealers',
//      description: 'Дилеры и партнеры'
//    },{
//      name: 'webmarkets',
//      description: 'Интернет-магазин'
//    }]
//  },
//
//  searchPanel: {
//    template: '<div class="panel-heading input-group">'
//              + '<input type="text" class="form-control" placeholder="Адрес, номер дома или станция метро">'
//              + '<span class="input-group-btn">'
//                + '<button id="offices-map-widget-search-btn" class="btn btn-default" type="button">Найти!</button>'
//              + '</span>'
//            + '</div>'
//  }
//};


// Main template:

//var template = '<div class="panel panel-default">'
//    //search panel start
//  + '<div class="panel-heading input-group">'
//  + '<input type="text" class="form-control" placeholder="Адрес, номер дома или станция метро">'
//  + '<span class="input-group-btn">'
//  + '<button id="offices-map-widget-search-btn" class="btn btn-default" type="button">Найти!</button>'
//  + '</span>'
//  + '</div>'
//    //search panel end
//
//  + '<div class="panel-body" id="map-container">'
//  + '<button id="offices-map-widget-filters-button" class="btn btn-default">Фильтры</button>'
//  + '<div id="map"></div>'
//  + '<div id="offices-map-widget-filters" class="col-md-4">'
//    //+ '<div class="checkbox"><label><input type="checkbox">Name</label></div>'
//  + '</div>'
//  + '</div>'
//  + '</div>';
