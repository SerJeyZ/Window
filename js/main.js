/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/burger/burger.js":
/*!************************************************!*\
  !*** ./src/blocks/components/burger/burger.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {\n  $('.burger').click(function (event) {\n    $('.mobail-menu').addClass('mobail-menu__active');\n    $('body').addClass('lock');\n  });\n  $('.mobail-menu__close').click(function (event) {\n    $('.mobail-menu').removeClass('mobail-menu__active');\n    $('body').removeClass('lock');\n  });\n  $('.mobail-menu').click(function (event) {\n    $('.mobail-menu').removeClass('mobail-menu__active');\n    $('body').removeClass('lock');\n  });\n  $(window).resize(function (event) {\n    if (event.target.innerWidth > 1280) {\n      $('.mobail-menu').removeClass('mobail-menu__active');\n      $('body').removeClass('lock');\n    }\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2NvbXBvbmVudHMvYnVyZ2VyL2J1cmdlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29tcG9uZW50cy9idXJnZXIvYnVyZ2VyLmpzPzhmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcuYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgJCgnLm1vYmFpbC1tZW51JykuYWRkQ2xhc3MoJ21vYmFpbC1tZW51X19hY3RpdmUnKTtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xvY2snKTtcbiAgfSk7XG4gICQoJy5tb2JhaWwtbWVudV9fY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAkKCcubW9iYWlsLW1lbnUnKS5yZW1vdmVDbGFzcygnbW9iYWlsLW1lbnVfX2FjdGl2ZScpO1xuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9jaycpO1xuICB9KTtcbiAgJCgnLm1vYmFpbC1tZW51JykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgJCgnLm1vYmFpbC1tZW51JykucmVtb3ZlQ2xhc3MoJ21vYmFpbC1tZW51X19hY3RpdmUnKTtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvY2snKTtcbiAgfSk7XG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoID4gMTI4MCkge1xuICAgICAgJCgnLm1vYmFpbC1tZW51JykucmVtb3ZlQ2xhc3MoJ21vYmFpbC1tZW51X19hY3RpdmUnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9jaycpO1xuICAgIH1cbiAgfSk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/components/burger/burger.js\n");

/***/ }),

/***/ "./src/blocks/components/discounts/discounts.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/discounts/discounts.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);\n\n$(document).ready(function () {\n  $('#discounts').slick({\n    infinite: true,\n    slidesToShow: 5,\n    slidesToScroll: 1,\n    padding: 10,\n    arrows: true,\n    dots: false,\n    speed: 700,\n    centerMode: true,\n    centerPadding: 0,\n    initialSlide: 3,\n    prevArrow: $('.discounts-arrow__right'),\n    nextArrow: $('.discounts-arrow__left'),\n    responsive: [{\n      breakpoint: 1380,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        centerPadding: '100px'\n      }\n    }, {\n      breakpoint: 900,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        centerPadding: '70px'\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        centerPadding: '200px'\n      }\n    }, {\n      breakpoint: 650,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        centerPadding: '150px'\n      }\n    }, {\n      breakpoint: 550,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        centerPadding: '100px'\n      }\n    }, {\n      breakpoint: 400,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        centerPadding: '50px'\n      }\n    }]\n  });\n  $('#discounts').on('afterChange', function (event, slick, currentSlide) {\n    $(\".slider-count__current\").text(currentSlide + 1);\n  });\n  var sliderLenght = document.querySelectorAll('.discount');\n  var sliderCloned = document.querySelectorAll('.slick-cloned');\n  $(\".slider-count__lenght\").text(sliderLenght.length - sliderCloned.length);\n  sliderLenght.forEach(function (el) {\n    return console.log(el.clientHeight);\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2NvbXBvbmVudHMvZGlzY291bnRzL2Rpc2NvdW50cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29tcG9uZW50cy9kaXNjb3VudHMvZGlzY291bnRzLmpzPzMyODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoJyNkaXNjb3VudHMnKS5zbGljayh7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc2xpZGVzVG9TaG93OiA1LFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIGFycm93czogdHJ1ZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBzcGVlZDogNzAwLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgY2VudGVyUGFkZGluZzogMCxcbiAgICBpbml0aWFsU2xpZGU6IDMsXG4gICAgcHJldkFycm93OiAkKCcuZGlzY291bnRzLWFycm93X19yaWdodCcpLFxuICAgIG5leHRBcnJvdzogJCgnLmRpc2NvdW50cy1hcnJvd19fbGVmdCcpLFxuICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICBicmVha3BvaW50OiAxMzgwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzEwMHB4J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDkwMCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc3MHB4J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICcyMDBweCdcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBicmVha3BvaW50OiA2NTAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMTUwcHgnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzEwMHB4J1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4J1xuICAgICAgfVxuICAgIH1dXG4gIH0pO1xuICAkKCcjZGlzY291bnRzJykub24oJ2FmdGVyQ2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlKSB7XG4gICAgJChcIi5zbGlkZXItY291bnRfX2N1cnJlbnRcIikudGV4dChjdXJyZW50U2xpZGUgKyAxKTtcbiAgfSk7XG4gIHZhciBzbGlkZXJMZW5naHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlzY291bnQnKTtcbiAgdmFyIHNsaWRlckNsb25lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGljay1jbG9uZWQnKTtcbiAgJChcIi5zbGlkZXItY291bnRfX2xlbmdodFwiKS50ZXh0KHNsaWRlckxlbmdodC5sZW5ndGggLSBzbGlkZXJDbG9uZWQubGVuZ3RoKTtcbiAgc2xpZGVyTGVuZ2h0LmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGVsLmNsaWVudEhlaWdodCk7XG4gIH0pO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/components/discounts/discounts.js\n");

/***/ }),

/***/ "./src/blocks/components/responses/responses.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/responses/responses.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);\n\n$(document).ready(function () {\n  $('#responses').slick({\n    infinite: false,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    padding: 10,\n    arrows: true,\n    dots: false,\n    prevArrow: $('.responses-arrow__left'),\n    nextArrow: $('.responses-arrow__right'),\n    responsive: [{\n      breakpoint: 1023,\n      settings: {\n        slidesToShow: 2,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        speed: 400,\n        fade: true\n      }\n    }]\n  }).on('setPosition', function (event, slick) {\n    slick.$slides.css('height', slick.$slideTrack.height() + 'px');\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2NvbXBvbmVudHMvcmVzcG9uc2VzL3Jlc3BvbnNlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29tcG9uZW50cy9yZXNwb25zZXMvcmVzcG9uc2VzLmpzPzI3NTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoJyNyZXNwb25zZXMnKS5zbGljayh7XG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgZG90czogZmFsc2UsXG4gICAgcHJldkFycm93OiAkKCcucmVzcG9uc2VzLWFycm93X19sZWZ0JyksXG4gICAgbmV4dEFycm93OiAkKCcucmVzcG9uc2VzLWFycm93X19yaWdodCcpLFxuICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICBicmVha3BvaW50OiAxMDIzLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBzcGVlZDogNDAwLFxuICAgICAgICBmYWRlOiB0cnVlXG4gICAgICB9XG4gICAgfV1cbiAgfSkub24oJ3NldFBvc2l0aW9uJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaykge1xuICAgIHNsaWNrLiRzbGlkZXMuY3NzKCdoZWlnaHQnLCBzbGljay4kc2xpZGVUcmFjay5oZWlnaHQoKSArICdweCcpO1xuICB9KTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/components/responses/responses.js\n");

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {\n  ymaps.ready(init);\n\n  function init() {\n    var myMap = new ymaps.Map(\"map\", {\n      center: [60.043032, 30.380470],\n      zoom: 15,\n      controls: []\n    }, {\n      suppressMapOpenBlock: true\n    });\n    myMap.behaviors.disable('scrollZoom');\n    var ctrlKey = false;\n    $(document).keydown(function (e) {\n      if (e.which === 17 && !ctrlKey) {\n        ctrlKey = true;\n        myMap.behaviors.enable('scrollZoom');\n      }\n    });\n    $(document).keyup(function (e) {\n      if (e.which === 17) {\n        ctrlKey = false;\n        myMap.behaviors.disable('scrollZoom');\n      }\n    });\n\n    var setMarkerPos = function setMarkerPos(center) {\n      var geoCenter = myMap.options.get('projection').fromGlobalPixels(center, myMap.getZoom());\n      myMap.setCenter(geoCenter);\n    };\n\n    var pixelCenter = myMap.getGlobalPixelCenter([60.043032, 30.380470]);\n\n    var markerPos = function markerPos(center) {\n      if (document.body.clientWidth > 767) {\n        pixelCenter[0] -= 200;\n        setMarkerPos(center);\n      } else {\n        pixelCenter[1] -= 300;\n        setMarkerPos(center);\n      }\n    };\n\n    var iconSize = [58, 82];\n\n    if (document.body.clientWidth > 767) {\n      iconSize = [58, 82];\n    } else {\n      iconSize = [40, 57];\n    }\n\n    markerPos(pixelCenter);\n    var myPlacemark = new ymaps.Placemark([60.043032, 30.380470], {}, {\n      iconLayout: 'default#image',\n      iconImageHref: \"../img/contacts/location-icon.png\",\n      iconImageSize: iconSize\n    });\n    myMap.geoObjects.add(myPlacemark);\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbW9kdWxlcy9mb290ZXIvZm9vdGVyLmpzPzIyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICB5bWFwcy5yZWFkeShpbml0KTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xuICAgICAgY2VudGVyOiBbNjAuMDQzMDMyLCAzMC4zODA0NzBdLFxuICAgICAgem9vbTogMTUsXG4gICAgICBjb250cm9sczogW11cbiAgICB9LCB7XG4gICAgICBzdXBwcmVzc01hcE9wZW5CbG9jazogdHJ1ZVxuICAgIH0pO1xuICAgIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XG4gICAgdmFyIGN0cmxLZXkgPSBmYWxzZTtcbiAgICAkKGRvY3VtZW50KS5rZXlkb3duKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS53aGljaCA9PT0gMTcgJiYgIWN0cmxLZXkpIHtcbiAgICAgICAgY3RybEtleSA9IHRydWU7XG4gICAgICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUud2hpY2ggPT09IDE3KSB7XG4gICAgICAgIGN0cmxLZXkgPSBmYWxzZTtcbiAgICAgICAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBzZXRNYXJrZXJQb3MgPSBmdW5jdGlvbiBzZXRNYXJrZXJQb3MoY2VudGVyKSB7XG4gICAgICB2YXIgZ2VvQ2VudGVyID0gbXlNYXAub3B0aW9ucy5nZXQoJ3Byb2plY3Rpb24nKS5mcm9tR2xvYmFsUGl4ZWxzKGNlbnRlciwgbXlNYXAuZ2V0Wm9vbSgpKTtcbiAgICAgIG15TWFwLnNldENlbnRlcihnZW9DZW50ZXIpO1xuICAgIH07XG5cbiAgICB2YXIgcGl4ZWxDZW50ZXIgPSBteU1hcC5nZXRHbG9iYWxQaXhlbENlbnRlcihbNjAuMDQzMDMyLCAzMC4zODA0NzBdKTtcblxuICAgIHZhciBtYXJrZXJQb3MgPSBmdW5jdGlvbiBtYXJrZXJQb3MoY2VudGVyKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+IDc2Nykge1xuICAgICAgICBwaXhlbENlbnRlclswXSAtPSAyMDA7XG4gICAgICAgIHNldE1hcmtlclBvcyhjZW50ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGl4ZWxDZW50ZXJbMV0gLT0gMzAwO1xuICAgICAgICBzZXRNYXJrZXJQb3MoY2VudGVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGljb25TaXplID0gWzU4LCA4Ml07XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+IDc2Nykge1xuICAgICAgaWNvblNpemUgPSBbNTgsIDgyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWNvblNpemUgPSBbNDAsIDU3XTtcbiAgICB9XG5cbiAgICBtYXJrZXJQb3MocGl4ZWxDZW50ZXIpO1xuICAgIHZhciBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzYwLjA0MzAzMiwgMzAuMzgwNDcwXSwge30sIHtcbiAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICAgIGljb25JbWFnZUhyZWY6IFwiLi4vaW1nL2NvbnRhY3RzL2xvY2F0aW9uLWljb24ucG5nXCIsXG4gICAgICBpY29uSW1hZ2VTaXplOiBpY29uU2l6ZVxuICAgIH0pO1xuICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgfVxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/modules/footer/footer.js\n");

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvaGVhZGVyL2hlYWRlci5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/modules/header/header.js\n");

/***/ }),

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import $ from 'jquery';\n// import 'slick-carousel';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvbWFpbi9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tb2R1bGVzL21haW4vbWFpbi5qcz8yZmFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBpbXBvcnQgJ3NsaWNrLWNhcm91c2VsJzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/modules/main/main.js\n");

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_components_burger_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/components/burger/burger.js */ \"./src/blocks/components/burger/burger.js\");\n/* harmony import */ var _blocks_components_burger_burger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_burger_burger_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_components_responses_responses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/components/responses/responses.js */ \"./src/blocks/components/responses/responses.js\");\n/* harmony import */ var _blocks_components_discounts_discounts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/components/discounts/discounts.js */ \"./src/blocks/components/discounts/discounts.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW1wb3J0L2NvbXBvbmVudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW1wb3J0L2NvbXBvbmVudHMuanM/OGI0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi8uLi9ibG9ja3MvY29tcG9uZW50cy9idXJnZXIvYnVyZ2VyLmpzXCI7XG5pbXBvcnQgXCIuLi8uLi9ibG9ja3MvY29tcG9uZW50cy9yZXNwb25zZXMvcmVzcG9uc2VzLmpzXCI7XG5pbXBvcnQgXCIuLi8uLi9ibG9ja3MvY29tcG9uZW50cy9kaXNjb3VudHMvZGlzY291bnRzLmpzXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/import/components.js\n");

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header.js */ \"./src/blocks/modules/header/header.js\");\n/* harmony import */ var _modules_header_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_footer_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer.js */ \"./src/blocks/modules/footer/footer.js\");\n/* harmony import */ var _modules_footer_footer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_main_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main/main.js */ \"./src/blocks/modules/main/main.js\");\n/* harmony import */ var _modules_main_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_main_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW1wb3J0L21vZHVsZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW1wb3J0L21vZHVsZXMuanM/MmVhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIlbW9kdWxlcyUvaGVhZGVyL2hlYWRlci5qc1wiO1xuaW1wb3J0IFwiJW1vZHVsZXMlL2Zvb3Rlci9mb290ZXIuanNcIjtcbmltcG9ydCBcIiVtb2R1bGVzJS9tYWluL21haW4uanNcIjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/import/modules.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _import_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules.js */ \"./src/js/import/modules.js\");\n/* harmony import */ var _import_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components.js */ \"./src/js/import/components.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg4everybody */ \"./node_modules/svg4everybody/dist/svg4everybody.js\");\n/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function () {\n  svg4everybody__WEBPACK_IMPORTED_MODULE_3___default()();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/Mzg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2ltcG9ydC9tb2R1bGVzLmpzXCI7XG5pbXBvcnQgXCIuL2ltcG9ydC9jb21wb25lbnRzLmpzXCI7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHN2ZzRldmVyeWJvZHkoKTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });