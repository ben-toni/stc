/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/rubick.js":
/*!********************************!*\
  !*** ./resources/js/rubick.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var searchVisible = 0;
var transparent = true;
var transparentDemo = true;
var fixedTop = false;
var navbar_initialized = false;
var big_image;
var scroll;
var project_content;
var $project;
scroll = (2500 - $(window).width()) / $(window).width();
var $ScrollTop;
var $ScrollBot;
var pixels;
var modal;
var $project_content;
var test = true;
var timerStart = Date.now();
var delay;
var no_of_elements = 0;
var window_height;
var window_width;
var content_opacity = 0;
var content_transition = 0;
var no_touch_screen = false;
var burger_menu;
$(document).ready(function () {
  BrowserDetect.init();

  if (BrowserDetect.browser == 'Explorer' && BrowserDetect.version <= 9) {
    $('body').html(better_browser);
  }

  window_width = $(window).width();
  window_height = $(window).height();
  burger_menu = $('nav[role="navigation"]').hasClass('navbar-burger') ? true : false;

  if (!Modernizr.touch) {
    $('body').addClass('no-touch');
    no_touch_screen = true;
  }

  rubik.initAnimationsCheck(); // Init navigation toggle for small screens

  if (window_width < 992 || burger_menu) {
    rubik.initRightMenu();
  }

  if (window_width < 992) {
    $('.over-area').each(function () {
      var click = $(this).attr("onClick");

      if (click == '') {
        src = "rubik.showModal(this)";
        $(this).attr("onClick", src);
      }
    });
  }

  setTimeout(function () {
    $('.loading').css('opacity', '0');
    setTimeout(function () {
      $('.loading').addClass('hide');
    }, 500);
  }, 3000);

  if ($('#contactUsMap').length != 0) {}

  if ($('.content-with-opacity').length != 0) {
    content_opacity = 1;
  }
});
$(window).load(function () {
  rubik.initAnimationsCheck();
});
$(window).resize(function () {
  if ($(window).width() < 992) {
    rubik.initRightMenu();
  }

  if ($(window).width() > 992 && !burger_menu) {
    $('nav[role="navigation"]').removeClass('navbar-burger');
    rubik.misc.navbar_menu_visible = 1;
    navbar_initialized = false;
  }
});
$(window).on('scroll', function () {
  rubik.checkScrollForTransparentNavbar();

  if (window_width > 992) {
    rubik.checkScrollForParallax();
  }

  if (content_opacity == 1) {
    rubik.checkScrollForContentTransitions();
  }
});
$('a[data-scroll="true"]').click(function (e) {
  var scroll_target = $(this).data('id');
  var scroll_trigger = $(this).data('scroll');

  if (scroll_trigger == true && scroll_target !== undefined) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(scroll_target).offset().top - 50
    }, 1000);
  }
});
$('.section-we-made-2 .scroller').mousemove(function (event) {
  if (!Modernizr.touch) {
    if (event.clientX < 200) {
      $(this).css("transform", "translateX(0)");
    }

    if (event.clientX > 200 && event.clientX < $(window).width() - 200 && event.clientX % 2 == 0) {
      pixels = -event.clientX * scroll;
      $(this).css("transform", "translateX(" + pixels + "px)");
    }

    if (event.clientX > $(window).width() - 200) {
      pixels = -(2500 - $(window).width());
      $(this).css("transform", "translateX(" + pixels + "px)");
    }

    $('.projects').css('overflow', 'hidden');
  }
});
rubik = {
  misc: {
    navbar_menu_visible: 0
  },
  initAnimationsCheck: function initAnimationsCheck() {
    $('[class*="add-animation"]').each(function () {
      offset_diff = 30;

      if ($(this).hasClass('title')) {
        offset_diff = 110;
      }

      var waypoints = $(this).waypoint(function (direction) {
        if (direction == 'down') {
          $(this.element).addClass('animate');
        } else {
          $(this.element).removeClass('animate');
        }
      }, {
        offset: window_height - offset_diff
      });
    });
  },
  initRightMenu: function initRightMenu() {
    if (!navbar_initialized) {
      $nav = $('nav[role="navigation"]');
      $nav.addClass('navbar-burger');
      $navbar = $nav.find('.navbar-collapse').first().clone(true);
      ul_content = '';
      $navbar.children('ul').each(function () {
        content_buff = $(this).html();
        ul_content = ul_content + content_buff;
      });
      ul_content = '<ul class="nav navbar-nav">' + ul_content + '</ul>';
      $navbar.html(ul_content);
      $('body').append($navbar);
      background_image = $navbar.data('nav-image');

      if (background_image != undefined) {
        $navbar.css('background', "url('" + background_image + "')").removeAttr('data-nav-image').css('background-size', "cover").addClass('has-image');
      }

      $toggle = $('.navbar-toggle');
      $navbar.find('a').removeClass('btn btn-round btn-default');
      $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
      $navbar.find('button').addClass('btn-simple btn-block');
      $link = $navbar.find('a');
      $link.click(function (e) {
        var scroll_target = $(this).data('id');
        var scroll_trigger = $(this).data('scroll');

        if (scroll_trigger == true && scroll_target !== undefined) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: $(scroll_target).offset().top - 50
          }, 1000);
        }
      });
      $toggle.click(function () {
        if (rubik.misc.navbar_menu_visible == 1) {
          $('html').removeClass('nav-open');
          rubik.misc.navbar_menu_visible = 0;
          $('#bodyClick').remove();
          setTimeout(function () {
            $toggle.removeClass('toggled');
          }, 550);
        } else {
          setTimeout(function () {
            $toggle.addClass('toggled');
          }, 580);
          div = '<div id="bodyClick"></div>';
          $(div).appendTo("body").click(function () {
            $('html').removeClass('nav-open');
            rubik.misc.navbar_menu_visible = 0;
            $('#bodyClick').remove();
            setTimeout(function () {
              $toggle.removeClass('toggled');
            }, 550);
          });
          $('html').addClass('nav-open');
          rubik.misc.navbar_menu_visible = 1;
        }
      });
      navbar_initialized = true;
    }
  },
  checkScrollForTransparentNavbar: debounce(function () {
    if ($(document).scrollTop() > 100) {
      if (transparent) {
        transparent = false;
        $('nav[role="navigation"]').removeClass('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('nav[role="navigation"]').addClass('navbar-transparent');
      }
    }
  }, 17),
  checkScrollForParallax: debounce(function () {
    no_of_elements = 0;
    $('.parallax').each(function () {
      var $elem = $(this);

      if (isElementInViewport($elem)) {
        var parent_top = $elem.offset().top;
        var window_bottom = $(window).scrollTop();
        var $image = $elem.children('img');
        oVal = (window_bottom - parent_top) / 3;
        $image.css('transform', 'translate3d(0px, ' + oVal + 'px, 0px)');
      }
    });
  }, 6),
  checkScrollForContentTransitions: debounce(function () {
    $('.content-with-opacity').each(function () {
      var $content = $(this);

      if (isElementInViewport($content)) {
        var window_top = $(window).scrollTop();
        opacityVal = 1 - window_top / 230;

        if (opacityVal < 0) {
          opacityVal = 0;
          return;
        } else {
          $content.css('opacity', opacityVal);
        }
      }
    });
  }, 6),
  showModal: function showModal(button) {
    var id = $(button).data('target');
    var $project = $(button).closest('.project');
    var scrollTop = $(window).scrollTop();
    var distanceTop = $project.offset().top;
    var projectTop = distanceTop - scrollTop;
    var projectLeft = $project.offset().left;
    var projectHeight = $project.innerHeight();
    var projectWidth = $project.innerWidth();
    modal = $('#' + id);
    $(modal).css({
      'top': projectTop,
      'left': projectLeft,
      'width': projectWidth,
      'height': projectHeight,
      'z-index': '1032'
    });
    $(modal).addClass('has-background');
    setTimeout(function () {
      $(modal).addClass('open');
    }, 30);
    setTimeout(function () {
      $('body').addClass('noscroll');
      $(modal).addClass('scroll');
    }, 1000);
    $('.icon-close').click(function () {
      $project_content = $(this).closest('.project-content');
      $project_content.removeClass('open scroll');
      $('body').removeClass("noscroll"); //$('a').removeClass('no-opacity');

      setTimeout(function () {
        $project_content.removeClass('has-background');
        setTimeout(function () {
          $project_content.removeAttr('style');
        }, 450);
      }, 500);
    });
  },
  initGoogleMaps: function initGoogleMaps() {
    var myLatlng = new google.maps.LatLng(44.433530, 26.093928);
    var mapOptions = {
      zoom: 16,
      center: myLatlng,
      scrollwheel: false,
      //we disable de scroll over the map, it is a really annoing when you scroll through page
      disableDefaultUI: true,
      styles: [{
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [{
          "visibility": "on"
        }, {
          "gamma": "1.82"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
          "visibility": "on"
        }, {
          "gamma": "1.96"
        }, {
          "lightness": "-9"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "visibility": "on"
        }, {
          "lightness": "25"
        }, {
          "gamma": "1.00"
        }, {
          "saturation": "-100"
        }]
      }, {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "hue": "#ffaa00"
        }, {
          "saturation": "-43"
        }, {
          "visibility": "on"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [{
          "visibility": "simplified"
        }, {
          "hue": "#ffaa00"
        }, {
          "saturation": "-70"
        }]
      }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [{
          "visibility": "on"
        }, {
          "saturation": "-100"
        }, {
          "lightness": "30"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [{
          "saturation": "-100"
        }, {
          "lightness": "40"
        }, {
          "visibility": "off"
        }]
      }, {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [{
          "visibility": "on"
        }, {
          "gamma": "0.80"
        }]
      }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }]
    };
    var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });
    marker.setMap(map);
  }
};

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

;

function isElementInViewport(elem) {
  var $elem = $(elem);
  var scrollElem = navigator.userAgent.toLowerCase().indexOf('webkit') != -1 ? 'body' : 'html';
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  var elemTop = Math.round($elem.offset().top);
  var elemBottom = elemTop + $elem.height();
  return elemTop < viewportBottom && elemBottom > viewportTop;
}

var BrowserDetect = {
  init: function init() {
    this.browser = this.searchString(this.dataBrowser) || "Other";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
  },
  searchString: function searchString(data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      this.versionSearchString = data[i].subString;

      if (dataString.indexOf(data[i].subString) !== -1) {
        return data[i].identity;
      }
    }
  },
  searchVersion: function searchVersion(dataString) {
    var index = dataString.indexOf(this.versionSearchString);

    if (index === -1) {
      return;
    }

    var rv = dataString.indexOf("rv:");

    if (this.versionSearchString === "Trident" && rv !== -1) {
      return parseFloat(dataString.substring(rv + 3));
    } else {
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
  },
  dataBrowser: [{
    string: navigator.userAgent,
    subString: "Chrome",
    identity: "Chrome"
  }, {
    string: navigator.userAgent,
    subString: "MSIE",
    identity: "Explorer"
  }, {
    string: navigator.userAgent,
    subString: "Trident",
    identity: "Explorer"
  }, {
    string: navigator.userAgent,
    subString: "Firefox",
    identity: "Firefox"
  }, {
    string: navigator.userAgent,
    subString: "Safari",
    identity: "Safari"
  }, {
    string: navigator.userAgent,
    subString: "Opera",
    identity: "Opera"
  }]
};
var better_browser = '<div class="container"><div class="better-browser row"><div class="col-md-2"></div><div class="col-md-8"><h3>We are sorry but it looks like your Browser doesn\'t support our website Features. In order to get the full experience please download a new version of your favourite browser.</h3></div><div class="col-md-2"></div><br><div class="col-md-4"><a href="https://www.mozilla.org/ro/firefox/new/" class="btn btn-warning">Mozilla</a><br></div><div class="col-md-4"><a href="https://www.google.com/chrome/browser/desktop/index.html" class="btn ">Chrome</a><br></div><div class="col-md-4"><a href="http://windows.microsoft.com/en-us/internet-explorer/ie-11-worldwide-languages" class="btn">Internet Explorer</a><br></div><br><br><h4>Thank you!</h4></div></div>';

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./resources/js/rubick.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/stc/resources/js/rubick.js */"./resources/js/rubick.js");


/***/ })

/******/ });