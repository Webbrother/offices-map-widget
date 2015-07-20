//

function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

function createDOMFromString(string) {
  var tempDiv = document.createElement('div');
  tempDiv.innerHTML = string;
  return tempDiv.firstChild;
}

//
//var loading = (function (el, isLoading) {
//
//  var loadingEl  = createDOMFromString("<div class='box-loading'></div>");
//
//  if (isLoading) {
//    el.appendChild(loadingEl);
//    el.style.position = "relative";
//  } else {
//    el.style.position = "";
//    loadingEl.remove();
//  }
//
//  return function() {
//
//  };
//})();

function LoadingAnimationBox(el) {

  var loadingEl  = createDOMFromString("<div class='offices-map-widget-box-loading'></div>");
  var isLoading = false;

  function on() {
    if (!isLoading) {
      el.appendChild(loadingEl);
      el.style.position = "relative";
      isLoading = true;
    }
  }

  function off() {
    if (isLoading) {
      el.style.position = "";
      loadingEl.remove();
      isLoading = false;
    }
  }

  return {
    on: on,
    off: off
  }
}
var loadingAnimationBox;
