var w = (function () {

  function prepareDOM() {
    var div = document.createElement('div');
  }

  function init(settings) {
    console.clear();
    console.log('Offices widget works!');

    prepareDOM();
  }

  return {
    init: init
  }
})();

