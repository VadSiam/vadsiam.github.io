var audienzz = typeof audienzz === "object" ? audienzz : {}; audienzz["antiblocker"] =
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

/***/ "../../node_modules/babel-runtime/core-js/object/assign.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/core-js/object/assign.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "../../node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/create.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/core-js/object/create.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "../../node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/define-property.js":
/*!******************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/core-js/object/define-property.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "../../node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!*******************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "../../node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/promise.js":
/*!***************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/core-js/promise.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "../../node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/symbol.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/core-js/symbol.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "../../node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "../../node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(/*! ../core-js/promise */ "../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/createClass.js":
/*!*******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/helpers/createClass.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/extends.js":
/*!***************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/helpers/extends.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "../../node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/inherits.js":
/*!****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/helpers/inherits.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "../../node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*********************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "../../node_modules/babel-runtime/helpers/typeof.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/helpers/typeof.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "../../node_modules/babel-runtime/regenerator/index.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/babel-runtime/regenerator/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../../node_modules/classnames/index.js":
/*!**************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/classnames/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../../node_modules/core-js/fn/array/find.js":
/*!*******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/fn/array/find.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.find */ "../../node_modules/core-js/modules/es6.array.find.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/core-js/modules/_core.js").Array.find;


/***/ }),

/***/ "../../node_modules/core-js/fn/promise.js":
/*!****************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/fn/promise.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "../../node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "../../node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "../../node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "../../node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "../../node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "../../node_modules/core-js/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../../node_modules/core-js/modules/_core.js").Promise;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/assign.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/fn/object/assign.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "../../node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/create.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/fn/object/create.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "../../node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/define-property.js":
/*!***************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/fn/object/define-property.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "../../node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "../../node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!****************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "../../node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/promise.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/fn/promise.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "../../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "../../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "../../node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "../../node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "../../node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "../../node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../../node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/symbol/index.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/fn/symbol/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "../../node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "../../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "../../node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "../../node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../../node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "../../node_modules/core-js/library/fn/symbol/iterator.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "../../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "../../node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "../../node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_a-function.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_a-function.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*****************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_an-instance.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_an-instance.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_an-object.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_an-object.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_array-includes.js":
/*!*************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_array-includes.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_classof.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_classof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_cof.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_cof.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_core.js":
/*!***************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_core.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_ctx.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_ctx.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_defined.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_defined.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_descriptors.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_descriptors.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_dom-create.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_dom-create.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_enum-keys.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_enum-keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_export.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_export.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_fails.js":
/*!****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_fails.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_for-of.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_for-of.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../../node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../../node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../../node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_global.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_global.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_has.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_has.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_hide.js":
/*!***************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_hide.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_html.js":
/*!***************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_html.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_invoke.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_invoke.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iobject.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_iobject.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-array-iter.js":
/*!************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-array.js":
/*!*******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_is-array.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-object.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_is-object.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-call.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_iter-call.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-create.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_iter-create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-define.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_iter-define.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../../node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-detect.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_iter-detect.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-step.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_iter-step.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iterators.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_iterators.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_library.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_library.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_meta.js":
/*!***************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_meta.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_microtask.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_microtask.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "../../node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*********************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-assign.js":
/*!************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-assign.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../../node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../../node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-create.js":
/*!************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-create.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../../node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../../node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-dp.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-dp.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-dps.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-dps.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gopd.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-gopd.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "../../node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!**************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../../node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gopn.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-gopn.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gops.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-gops.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gpo.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-keys-internal.js":
/*!*******************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../../node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-keys.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-keys.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-pie.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_object-pie.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_perform.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_perform.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_promise-resolve.js":
/*!**************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_promise-resolve.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_property-desc.js":
/*!************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_property-desc.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_redefine-all.js":
/*!***********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_redefine-all.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_redefine.js":
/*!*******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_redefine.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-proto.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_set-proto.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "../../node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-species.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_set-species.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!****************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_shared-key.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_shared-key.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_shared.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_shared.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../../node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_species-constructor.js":
/*!******************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_species-constructor.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_string-at.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_string-at.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_task.js":
/*!***************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_task.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../../node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "../../node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "../../node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-absolute-index.js":
/*!****************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-integer.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_to-integer.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-iobject.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-length.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_to-length.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-object.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_to-object.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-primitive.js":
/*!***********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_uid.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_uid.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_user-agent.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_user-agent.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_wks-define.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_wks-define.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../../node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_wks-ext.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_wks-ext.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_wks.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/_wks.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**********************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.array.iterator.js":
/*!****************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../../node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "../../node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "../../node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.assign.js":
/*!***************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "../../node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.create.js":
/*!***************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es6.object.create.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.define-property.js":
/*!************************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*************************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "../../node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.to-string.js":
/*!******************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.promise.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es6.promise.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "../../node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "../../node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../../node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../../node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../../node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "../../node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "../../node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "../../node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*****************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "../../node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "../../node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.symbol.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es6.symbol.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "../../node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "../../node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../../node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "../../node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "../../node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../../node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "../../node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "../../node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "../../node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "../../node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "../../node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "../../node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*****************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../../node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.promise.try.js":
/*!*************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../../node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***********************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../../node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!*******************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../../node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/web.dom.iterable.js":
/*!**************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "../../node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "../../node_modules/core-js/modules/_a-function.js":
/*!*************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_a-function.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_add-to-unscopables.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_an-instance.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_an-instance.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_an-object.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_an-object.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-includes.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_array-includes.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-methods.js":
/*!****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_array-methods.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "../../node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-species-constructor.js":
/*!****************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_array-species-constructor.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../../node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_array-species-create.js":
/*!***********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_array-species-create.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "../../node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_classof.js":
/*!**********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_classof.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_cof.js":
/*!******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_cof.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_core.js":
/*!*******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_core.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/modules/_ctx.js":
/*!******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_ctx.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_defined.js":
/*!**********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_defined.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_descriptors.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_descriptors.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_dom-create.js":
/*!*************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_dom-create.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_enum-bug-keys.js":
/*!****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_enum-bug-keys.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../../node_modules/core-js/modules/_export.js":
/*!*********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../../node_modules/core-js/modules/_fails.js":
/*!********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_fails.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_for-of.js":
/*!*********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_for-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../../node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../../node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../../node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../../node_modules/core-js/modules/_global.js":
/*!*********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_global.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/modules/_has.js":
/*!******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_has.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_hide.js":
/*!*******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_hide.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_html.js":
/*!*******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_html.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../../node_modules/core-js/modules/_ie8-dom-define.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_invoke.js":
/*!*********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_invoke.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iobject.js":
/*!**********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_iobject.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-array-iter.js":
/*!****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_is-array-iter.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-array.js":
/*!***********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_is-array.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-object.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_is-object.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-call.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_iter-call.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-create.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_iter-create.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-define.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_iter-define.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../../node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-detect.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_iter-detect.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iter-step.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_iter-step.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_iterators.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_iterators.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../node_modules/core-js/modules/_library.js":
/*!**********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_library.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../node_modules/core-js/modules/_microtask.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_microtask.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "../../node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_new-promise-capability.js":
/*!*************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_new-promise-capability.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-create.js":
/*!****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_object-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../../node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../../node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dp.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_object-dp.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dps.js":
/*!*************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_object-dps.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-gpo.js":
/*!*************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_object-gpo.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-keys-internal.js":
/*!***********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_object-keys-internal.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../../node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-keys.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_object-keys.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_perform.js":
/*!**********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_perform.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_promise-resolve.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_promise-resolve.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_property-desc.js":
/*!****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_property-desc.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_redefine-all.js":
/*!***************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_redefine-all.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_redefine.js":
/*!***********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_redefine.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_set-species.js":
/*!**************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_set-species.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_set-to-string-tag.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_shared-key.js":
/*!*************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_shared-key.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_shared.js":
/*!*********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_shared.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_species-constructor.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_species-constructor.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_string-at.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_string-at.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_task.js":
/*!*******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_task.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../../node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "../../node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "../../node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-absolute-index.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_to-absolute-index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-integer.js":
/*!*************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_to-integer.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-iobject.js":
/*!*************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_to-iobject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-length.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_to-length.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-object.js":
/*!************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_to-object.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-primitive.js":
/*!***************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_to-primitive.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_uid.js":
/*!******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_uid.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_user-agent.js":
/*!*************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_user-agent.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../../node_modules/core-js/modules/_wks.js":
/*!******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/_wks.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../../node_modules/core-js/modules/core.get-iterator-method.js":
/*!**************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.find.js":
/*!****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/es6.array.find.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "../../node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "../../node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.array.iterator.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/es6.array.iterator.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../../node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "../../node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "../../node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.object.to-string.js":
/*!**********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/es6.object.to-string.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.promise.js":
/*!*************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/es6.promise.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "../../node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "../../node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../../node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../../node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../../node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "../../node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "../../node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "../../node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es6.string.iterator.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/es6.string.iterator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "../../node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "../../node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.promise.finally.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/es7.promise.finally.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../../node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.promise.try.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/es7.promise.try.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../../node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "../../node_modules/core-js/modules/web.dom.iterable.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/core-js/modules/web.dom.iterable.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "../../node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js!./src/components/Notice/style.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/css-loader!/Users/vadsiam/Documents/Audienzz/node_modules/postcss-loader/src??ref--5-3!/Users/vadsiam/Documents/Audienzz/node_modules/sass-loader/lib/loader.js!./src/components/Notice/style.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  margin: 0;\n  padding: 0; }\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n@media screen and (min-width: 768px) {\n  .mobile-visible {\n    display: none !important; } }\n\n@media screen and (max-width: 767px) {\n  .mobile-hidden {\n    display: none !important; } }\n\n.notice-overlay {\n  width: 1020px;\n  margin: 0 auto;\n  max-width: 100vw; }\n\n.notice__body {\n  padding: 32px;\n  background-color: #fff77e; }\n  @media screen and (max-width: 767px) {\n    .notice__body {\n      padding: 24px; } }\n  .notice__body-was-found {\n    padding: 10px 24px;\n    min-height: 60px;\n    background: #46d38e;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    @media screen and (max-width: 767px) {\n      .notice__body-was-found {\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: flex-start; } }\n    .notice__body-was-found .notice__description {\n      font-size: 15px;\n      line-height: 20px; }\n      @media (min-width: 768px) {\n        .notice__body-was-found .notice__description {\n          margin-left: 24px; } }\n      .notice__body-was-found .notice__description a {\n        text-decoration: underline !important;\n        margin-left: 3px;\n        display: inline-block;\n        color: #05032d !important; }\n    .notice__body-was-found .notice__remove {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      width: 25px;\n      height: 25px;\n      cursor: pointer;\n      outline: none !important;\n      position: relative;\n      margin-right: -6px; }\n      .notice__body-was-found .notice__remove:before {\n        content: '';\n        width: 16px;\n        height: 1px;\n        background: #05032d;\n        border-radius: 5px;\n        position: absolute;\n        left: 7px;\n        top: 6px;\n        -webkit-transform: rotate(45deg);\n            -ms-transform: rotate(45deg);\n                transform: rotate(45deg);\n        -webkit-transform-origin: 0 0;\n            -ms-transform-origin: 0 0;\n                transform-origin: 0 0; }\n      .notice__body-was-found .notice__remove:after {\n        content: '';\n        width: 16px;\n        height: 1px;\n        background: #05032d;\n        border-radius: 5px;\n        position: absolute;\n        right: 3px;\n        bottom: 7px;\n        -webkit-transform: rotate(-45deg);\n        -ms-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n        -webkit-transform-origin: 0 0;\n        -ms-transform-origin: 0 0;\n        transform-origin: 0 0; }\n\n.notice__title {\n  font-size: 33px;\n  line-height: 37px;\n  margin: 0 0 8px;\n  color: #05032d; }\n\n.notice__description {\n  font-size: 18px;\n  line-height: 26px;\n  margin: 0;\n  width: 600px;\n  max-width: 100%;\n  color: #05032d; }\n\n.notice__footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 24px 0; }\n  @media screen and (max-width: 767px) {\n    .notice__footer {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .notice__footer-description {\n    font-size: 18px;\n    line-height: 26px;\n    margin-bottom: 0; }\n  .notice__footer > * {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n  .notice__footer a {\n    padding: 15px 24px;\n    font-size: 13px;\n    line-height: 18px;\n    text-decoration: none !important;\n    outline: none !important;\n    border: 1px solid #05032d;\n    border-radius: 3px; }\n    .notice__footer a.notice__footer--deactivate {\n      color: #fff77e !important;\n      background: #05032d; }\n    .notice__footer a.notice__footer--create {\n      color: #05032d !important; }\n  .notice__footer span {\n    margin: 0 16px;\n    font-size: 18px;\n    line-height: 26px; }\n    @media screen and (max-width: 767px) {\n      .notice__footer span {\n        margin: 16px 0; } }\n\n.notice.default.notice-default {\n  width: 1020px;\n  margin: 0 auto;\n  max-width: 100vw; }\n\n.notice.default.notice-thanks {\n  width: 1020px;\n  margin: 0 auto;\n  max-width: 100vw; }\n\n.notice.default .notice__title {\n  font-family: nzz-serif,Georgia,'sans-serif';\n  font-weight: 500; }\n\n.notice.default .notice__description {\n  font-family: nzz-serif,Georgia,'sans-serif';\n  font-weight: 300; }\n\n.notice.default .notice__footer-description {\n  font-family: nzz-serif,Georgia,'sans-serif';\n  font-weight: 300; }\n\n.notice.default .notice__footer span {\n  font-family: nzz-serif,Georgia,'sans-serif';\n  font-weight: 300; }\n\n.notice.default .notice__footer a {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: 500; }\n\n.notice.nzz.notice-default {\n  margin: 0 auto;\n  width: 600px;\n  max-width: 100vw;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n  @media (min-width: 768px) {\n    .notice.nzz.notice-default {\n      max-width: none;\n      width: 1000px;\n      margin: 0 auto 0 0;\n      padding: 0 320px 0 30px; } }\n  @media (min-width: 1350px) {\n    .notice.nzz.notice-default {\n      margin: 0 0 0 auto; } }\n  @media (min-width: 1640px) {\n    .notice.nzz.notice-default {\n      margin: 0 auto;\n      padding: 0 10px; } }\n  .notice.nzz.notice-default .notice__body {\n    margin: 16px 0 0; }\n\n.notice.nzz.notice-thanks {\n  background: #46d38e; }\n  .notice.nzz.notice-thanks .notice__body-was-found {\n    margin: 0 auto;\n    width: 600px;\n    max-width: 100vw; }\n    @media (min-width: 768px) {\n      .notice.nzz.notice-thanks .notice__body-was-found {\n        max-width: none;\n        width: 1000px;\n        margin: 0 auto 0 0;\n        padding: 0 320px 0 30px;\n        -webkit-box-sizing: content-box;\n                box-sizing: content-box; } }\n    @media (min-width: 1350px) {\n      .notice.nzz.notice-thanks .notice__body-was-found {\n        margin: 0 0 0 auto; } }\n    @media (min-width: 1640px) {\n      .notice.nzz.notice-thanks .notice__body-was-found {\n        margin: 0 auto;\n        padding: 0 10px; } }\n\n.notice.nzz .notice__title {\n  font-family: nzz-serif,Georgia,'sans-serif';\n  font-weight: 500; }\n\n.notice.nzz .notice__description {\n  font-family: nzz-serif,Georgia,'sans-serif';\n  font-weight: 300; }\n\n.notice.nzz .notice__footer-description {\n  font-family: nzz-serif,Georgia,'sans-serif';\n  font-weight: 300; }\n\n.notice.nzz .notice__footer span {\n  font-family: nzz-serif,Georgia,'sans-serif';\n  font-weight: 300; }\n\n.notice.nzz .notice__footer a {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: 500; }\n\n.notice.luzernerzeitung.notice-default {\n  margin: 0 auto;\n  width: 600px;\n  max-width: 100vw;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n  @media (min-width: 768px) {\n    .notice.luzernerzeitung.notice-default {\n      max-width: none;\n      width: 980px;\n      margin: 0 auto 0 0;\n      padding: 0 320px 0 30px; } }\n  @media (min-width: 1351px) {\n    .notice.luzernerzeitung.notice-default {\n      margin: 0 0 0 auto; } }\n  @media (min-width: 1640px) {\n    .notice.luzernerzeitung.notice-default {\n      margin: 0 auto;\n      padding: 0 10px; } }\n  .notice.luzernerzeitung.notice-default .notice__body {\n    margin: 16px 0 0; }\n\n.notice.luzernerzeitung.notice-thanks {\n  background: #46d38e; }\n  .notice.luzernerzeitung.notice-thanks .notice__body-was-found {\n    margin: 0 auto;\n    width: 600px;\n    max-width: 100vw; }\n    @media (min-width: 768px) {\n      .notice.luzernerzeitung.notice-thanks .notice__body-was-found {\n        max-width: none;\n        width: 980px;\n        margin: 0 auto 0 0;\n        padding: 0 320px 0 30px;\n        -webkit-box-sizing: content-box;\n                box-sizing: content-box; } }\n    @media (min-width: 1351px) {\n      .notice.luzernerzeitung.notice-thanks .notice__body-was-found {\n        margin: 0 0 0 auto; } }\n    @media (min-width: 1640px) {\n      .notice.luzernerzeitung.notice-thanks .notice__body-was-found {\n        margin: 0 auto;\n        padding: 0 10px; } }\n  .notice.luzernerzeitung.notice-thanks .notice__remove {\n    margin-right: -7px; }\n    @media (min-width: 768px) {\n      .notice.luzernerzeitung.notice-thanks .notice__remove {\n        margin-right: 13px; } }\n\n.notice.luzernerzeitung .notice__title {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: bold; }\n\n.notice.luzernerzeitung .notice__description {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: 300; }\n\n.notice.luzernerzeitung .notice__footer-description {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: 300; }\n\n.notice.luzernerzeitung .notice__footer span {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: 300; }\n\n.notice.luzernerzeitung .notice__footer a {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: bold; }\n\n.notice.tagblatt.notice-default {\n  margin: 0 auto;\n  width: 600px;\n  max-width: 100vw;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n  @media (min-width: 768px) {\n    .notice.tagblatt.notice-default {\n      max-width: none;\n      width: 980px;\n      margin: 0 auto 0 0;\n      padding: 0 320px 0 30px; } }\n  @media (min-width: 1351px) {\n    .notice.tagblatt.notice-default {\n      margin: 0 0 0 auto; } }\n  @media (min-width: 1640px) {\n    .notice.tagblatt.notice-default {\n      margin: 0 auto;\n      padding: 0 10px; } }\n  .notice.tagblatt.notice-default .notice__body {\n    margin: 16px 0 0; }\n\n.notice.tagblatt.notice-thanks {\n  background: #46d38e; }\n  .notice.tagblatt.notice-thanks .notice__body-was-found {\n    margin: 0 auto;\n    width: 600px;\n    max-width: 100vw; }\n    @media (min-width: 768px) {\n      .notice.tagblatt.notice-thanks .notice__body-was-found {\n        max-width: none;\n        width: 980px;\n        margin: 0 auto 0 0;\n        padding: 0 320px 0 30px;\n        -webkit-box-sizing: content-box;\n                box-sizing: content-box; } }\n    @media (min-width: 1351px) {\n      .notice.tagblatt.notice-thanks .notice__body-was-found {\n        margin: 0 0 0 auto; } }\n    @media (min-width: 1640px) {\n      .notice.tagblatt.notice-thanks .notice__body-was-found {\n        margin: 0 auto;\n        padding: 0 10px; } }\n  .notice.tagblatt.notice-thanks .notice__remove {\n    margin-right: -7px; }\n    @media (min-width: 768px) {\n      .notice.tagblatt.notice-thanks .notice__remove {\n        margin-right: 13px; } }\n\n.notice.tagblatt .notice__title {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: bold; }\n\n.notice.tagblatt .notice__description {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: 300; }\n\n.notice.tagblatt .notice__footer-description {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: 300; }\n\n.notice.tagblatt .notice__footer span {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: 300; }\n\n.notice.tagblatt .notice__footer a {\n  font-family: nzz-sans-serif,Helvetica,Arial,'sans-serif';\n  font-weight: bold; }\n\n.notice.bellevue.notice-default {\n  width: 1020px;\n  margin: 0 auto;\n  max-width: 100vw; }\n\n.notice.bellevue.notice-thanks {\n  width: 1020px;\n  margin: 0 auto;\n  max-width: 100vw; }\n\n.notice.bellevue .notice__title {\n  font-family: BeausiteSlick-Bold,Helvetica,'sans-serif';\n  font-weight: 500; }\n\n.notice.bellevue .notice__description {\n  font-family: Damien-Regular,Georgia,'sans-serif';\n  font-weight: 300; }\n\n.notice.bellevue .notice__footer-description {\n  font-family: Damien-Regular,Georgia,'sans-serif';\n  font-weight: 300; }\n\n.notice.bellevue .notice__footer span {\n  font-family: Damien-Regular,Georgia,'sans-serif';\n  font-weight: 300; }\n\n.notice.bellevue .notice__footer a {\n  font-family: BeausiteSlick-Bold,Helvetica,'sans-serif';\n  font-weight: 500; }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js!./src/components/Overlay/style.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/css-loader!/Users/vadsiam/Documents/Audienzz/node_modules/postcss-loader/src??ref--5-3!/Users/vadsiam/Documents/Audienzz/node_modules/sass-loader/lib/loader.js!./src/components/Overlay/style.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  background: rgba(5, 3, 45, 0.6); }\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/lib/css-base.js":
/*!*********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/css-loader/lib/css-base.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../node_modules/js-cookie/src/js.cookie.js":
/*!*********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/js-cookie/src/js.cookie.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!*****************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/object-assign/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../node_modules/preact-compat/dist/preact-compat.es.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/preact-compat/dist/preact-compat.es.js ***!
  \*********************************************************************************************/
/*! exports provided: PropTypes, default, version, DOM, Children, render, createClass, createPortal, createFactory, createElement, cloneElement, isValidElement, findDOMNode, unmountComponentAtNode, Component, PureComponent, unstable_renderSubtreeIntoContainer, unstable_batchedUpdates, __spread */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return unstable_batchedUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return prop_types__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.mjs");




var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

var COMPONENT_WRAPPER_KEY = (typeof Symbol!=='undefined' && Symbol.for) ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};


var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;


var BYPASS_HOOK = {};

/*global process*/
var DEV = false;
try {
	DEV = "development"!=='production';
}
catch (e) {}

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() { return null; }



// make react think we're react.
var VNode = Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function() { return this.nodeName; },
	set: function(v) { this.nodeName = v; },
	configurable:true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function() { return this.attributes; },
	set: function(v) { this.attributes = v; },
	configurable:true
});



var oldEventHook = preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;
preact__WEBPACK_IMPORTED_MODULE_1__["options"].event = function (e) {
	if (oldEventHook) { e = oldEventHook(e); }
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};


var oldVnodeHook = preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;
preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
			attrs = vnode.attributes = vnode.attributes==null ? {} : extend({}, vnode.attributes);

		if (typeof tag==='function') {
			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
				if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		}
		else {
			if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
			if (vnode.children) { attrs.children = vnode.children; }

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value!==0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) { oldVnodeHook(vnode); }
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
		a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
	if (a) { extend(vnode.attributes, a); }
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
				}
			}
		}
	}
}



// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode!==parent) { prev = null; }

	// default to first Element child
	if (!prev && parent) { prev = parent.firstElementChild; }

	// remove unaffected siblings
	for (var i=parent.childNodes.length; i--; ) {
		if (parent.childNodes[i]!==prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(vnode, parent, prev);
	if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
	if (typeof callback==='function') { callback(); }
	return out && out._component || out;
}


var ContextProvider = function () {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) { callback.call(component, renderContainer); }
	return component;
}

function Portal(props) {
	renderSubtreeIntoContainer(this, props.vnode, props.container);
}

function createPortal(vnode, container) {
	return Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(Portal, { vnode: vnode, container: container });
}


function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode===container) {
		Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		return children.map(fn);
	},
	forEach: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		children.forEach(fn);
	},
	count: function(children) {
		return children && children.length || 0;
	},
	only: function(children) {
		children = Children.toArray(children);
		if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
		return children[0];
	},
	toArray: function(children) {
		if (children == null) { return []; }
		return ARR.concat(children);
	}
};


/** Track current render() component for ref assignment */
var currentComponent;


function createFactory(type) {
	return createElement.bind(null, type);
}


var DOM = {};
for (var i=ELEMENTS.length; i--; ) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i=offset || 0; i<arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		}
		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c==='function' && !(c.prototype && c.prototype.render);
}


// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function() {
			return WrappedComponent(this.props, this.context);
		}
	});
}


function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

	return Wrapped;
}


function createElement() {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	upgradeToVNodes(args, 2);
	return normalizeVNode(preact__WEBPACK_IMPORTED_MODULE_1__["h"].apply(void 0, args));
}


function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
		type = ref && typeof ref;
	if (currentComponent && (type==='string' || type==='number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}


function cloneElement$1(element, props) {
	var children = [], len = arguments.length - 2;
	while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

	if (!isValidElement(element)) { return element; }
	var elementProps = element.attributes || element.props;
	var node = Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(
		element.nodeName || element.type,
		extend({}, elementProps),
		element.children || elementProps && elementProps.children
	);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	}
	else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(void 0, cloneArgs));
}


function isValidElement(element) {
	return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
}


function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved===null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}


function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName!=='string') { return; }
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}


function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) { a.class = a.className; }
	Object.defineProperty(a, 'className', classNameDescriptor);
}


var classNameDescriptor = {
	configurable: true,
	get: function() { return this.class; },
	set: function(v) { this.class = v; }
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i=1, obj = (void 0); i<arguments.length; i++) {
		if ((obj = arguments$1[i])) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}


function shallowDiffers(a, b) {
	for (var i in a) { if (!(i in b)) { return true; } }
	for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
	return false;
}


function findDOMNode(component) {
	return component && (component.base || component.nodeType === 1 && component) || null;
}


function F(){}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}


// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i=0; i<mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
			}
		}
	}
	return keyed;
}


// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
		proto[key] = multihook(
			mixins[key].concat(proto[key] || ARR),
			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
		);
	} }
}


function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i=0; i<hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r!=null) {
				if (!ret) { ret = {}; }
				for (var key in r) { if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				} }
			}
			else if (typeof r!=='undefined') { ret = r; }
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	if (!props) { return; }

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length===1 && (typeof c[0]==='string' || typeof c[0]==='function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}



function Component$1(props, context, opts) {
	preact__WEBPACK_IMPORTED_MODULE_1__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function() {
		return this.base;
	},

	isMounted: function() {
		return !!this.base;
	}
});



function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

function unstable_batchedUpdates(callback) {
	callback();
}

var index = {
	version: version,
	DOM: DOM,
	PropTypes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createPortal: createPortal,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	unstable_batchedUpdates: unstable_batchedUpdates,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=preact-compat.es.js.map


/***/ }),

/***/ "../../node_modules/preact-context/dist/context.min.js":
/*!*****************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/preact-context/dist/context.min.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,t){ true?t(exports,__webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.mjs")):undefined}(this,function(n,t){"use strict";var i={register:function(n){console.warn("Consumer used without a Provider")},unregister:function(n){},val:function(n){}};function r(n){var t=n.children;return{child:1===t.length?t[0]:null,children:t}}var e,u=window&&window.__extends||(e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])})(n,t)},function(n,t){function i(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});function o(n){return r(n).child||n.render}var c=1073741823,f=function(){return c},s=0;function a(n,e){var a="_preactContextProvider-"+s++;return{Provider:function(n){function i(t){var i=n.call(this,t)||this;return i.t=function(n,t){var i=[],r=n,e=function(n){return 0|t(r,n)};return{register:function(n){i.push(n),n(r,e(r))},unregister:function(n){i=i.filter(function(t){return t!==n})},val:function(n){if(void 0===n||n==r)return r;var t=e(n);return r=n,i.forEach(function(i){return i(n,t)}),r}}}(t.value,e||f),i}return u(i,n),i.prototype.getChildContext=function(){var n;return(n={})[a]=this.t,n},i.prototype.componentDidUpdate=function(){this.t.val(this.props.value)},i.prototype.render=function(){var n=r(this.props),i=n.child,e=n.children;return i||t.h("span",null,e)},i}(t.Component),Consumer:function(t){function r(i,r){var e=t.call(this,i,r)||this;return e.i=function(n,t){var i=e.props.unstable_observedBits,r=void 0===i||null===i?c:i;0!=((r|=0)&t)&&e.setState({value:n})},e.state={value:e.u().val()||n},e}return u(r,t),r.prototype.componentDidMount=function(){this.u().register(this.i)},r.prototype.shouldComponentUpdate=function(n,t){return this.state.value!==t.value||o(this.props)!==o(n)},r.prototype.componentWillUnmount=function(){this.u().unregister(this.i)},r.prototype.componentDidUpdate=function(n,t,r){var e=r[a];e!==this.context[a]&&((e||i).unregister(this.i),this.componentDidMount())},r.prototype.render=function(){var n=this.props.render,t=o(this.props);if(n&&n!==t&&console.warn("Both children and a render function are defined. Children will be used"),"function"==typeof t)return t(this.state.value);console.warn("Consumer is expecting a function as one and only child but didn't find any")},r.prototype.u=function(){return this.context[a]||i},r}(t.Component)}}var h=a;n.default=a,n.createContext=h,Object.defineProperty(n,"__esModule",{value:!0})});

/***/ }),

/***/ "../../node_modules/preact-portal/dist/preact-portal.js":
/*!******************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/preact-portal/dist/preact-portal.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.mjs")) :
  undefined;
}(this, (function (preact) { 'use strict';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Portal = function (_Component) {
	inherits(Portal, _Component);

	function Portal() {
		classCallCheck(this, Portal);
		return possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Portal.prototype.componentDidUpdate = function componentDidUpdate(props) {
		for (var i in props) {
			if (props[i] !== this.props[i]) {
				return setTimeout(this.renderLayer);
			}
		}
	};

	Portal.prototype.componentDidMount = function componentDidMount() {
		this.isMounted = true;
		this.renderLayer = this.renderLayer.bind(this);
		this.renderLayer();
	};

	Portal.prototype.componentWillUnmount = function componentWillUnmount() {
		this.renderLayer(false);
		this.isMounted = false;
		if (this.remote) this.remote.parentNode.removeChild(this.remote);
	};

	Portal.prototype.findNode = function findNode(node) {
		return typeof node === 'string' ? document.querySelector(node) : node;
	};

	Portal.prototype.renderLayer = function renderLayer() {
		var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		if (!this.isMounted) return;

		if (this.props.into !== this.intoPointer) {
			this.intoPointer = this.props.into;
			if (this.into && this.remote) {
				this.remote = preact.render(preact.h(PortalProxy, null), this.into, this.remote);
			}
			this.into = this.findNode(this.props.into);
		}

		this.remote = preact.render(preact.h(
			PortalProxy,
			{ context: this.context },
			show && this.props.children || null
		), this.into, this.remote);
	};

	Portal.prototype.render = function render() {
		return null;
	};

	return Portal;
}(preact.Component);

var PortalProxy = function (_Component2) {
	inherits(PortalProxy, _Component2);

	function PortalProxy() {
		classCallCheck(this, PortalProxy);
		return possibleConstructorReturn(this, _Component2.apply(this, arguments));
	}

	PortalProxy.prototype.getChildContext = function getChildContext() {
		return this.props.context;
	};

	PortalProxy.prototype.render = function render(_ref) {
		var children = _ref.children;

		return children && children[0] || null;
	};

	return PortalProxy;
}(preact.Component);

return Portal;

})));
//# sourceMappingURL=preact-portal.js.map


/***/ }),

/***/ "../../node_modules/preact/dist/preact.mjs":
/*!*****************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/preact/dist/preact.mjs ***!
  \*****************************************************************************/
/*! exports provided: default, h, createElement, cloneElement, Component, render, rerender, options */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),

/***/ "../../node_modules/prop-types/checkPropTypes.js":
/*!***********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/prop-types/checkPropTypes.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../node_modules/prop-types/index.js":
/*!**************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/prop-types/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../../node_modules/prop-types/node_modules/react-is/index.js":
/*!************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/prop-types/node_modules/react-is/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../node_modules/querystring-es3/decode.js":
/*!********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/querystring-es3/decode.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "../../node_modules/querystring-es3/encode.js":
/*!********************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/querystring-es3/encode.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "../../node_modules/querystring-es3/index.js":
/*!*******************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/querystring-es3/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "../../node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "../../node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/iframeResizer.contentWindow.min.js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/raw-loader!./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/iframeResizer.contentWindow.min.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*! iFrame Resizer (iframeSizer.contentWindow.min.js) - v3.6.3 - 2018-10-28\n *  Desc: Include this file in any page being loaded into an iframe\n *        to force the iframe to resize to the content size.\n *  Requires: iframeResizer.min.js on host page.\n *  Copyright: (c) 2018 David J. Bradshaw - dave@bradshaw.net\n *  License: MIT\n */\n\n!function(a){\"use strict\";function b(){}function c(a,b,c,d){\"addEventListener\"in window?a.addEventListener(b,c,!!Ia&&(d||{})):\"attachEvent\"in window&&a.attachEvent(\"on\"+b,c)}function d(a,b,c){\"removeEventListener\"in window?a.removeEventListener(b,c,!1):\"detachEvent\"in window&&a.detachEvent(\"on\"+b,c)}function e(a){return a.charAt(0).toUpperCase()+a.slice(1)}function f(a){var b,c,d,e=null,f=0,g=function(){f=La(),e=null,d=a.apply(b,c),e||(b=c=null)};return function(){var h=La();f||(f=h);var i=ya-(h-f);return b=this,c=arguments,i<=0||i>ya?(e&&(clearTimeout(e),e=null),f=h,d=a.apply(b,c),e||(b=c=null)):e||(e=setTimeout(g,i)),d}}function g(a){return na+\"[\"+pa+\"] \"+a}function h(a){ma&&\"object\"==typeof window.console&&console.log(g(a))}function i(a){\"object\"==typeof window.console&&console.warn(g(a))}function j(){k(),h(\"Initialising iFrame (\"+location.href+\")\"),l(),o(),n(\"background\",X),n(\"padding\",_),B(),t(),u(),p(),D(),v(),ja=C(),O(\"init\",\"Init message from host page\"),Ea()}function k(){function b(a){return\"true\"===a}var c=ia.substr(oa).split(\":\");pa=c[0],Y=a!==c[1]?Number(c[1]):Y,aa=a!==c[2]?b(c[2]):aa,ma=a!==c[3]?b(c[3]):ma,ka=a!==c[4]?Number(c[4]):ka,V=a!==c[6]?b(c[6]):V,Z=c[7],ga=a!==c[8]?c[8]:ga,X=c[9],_=c[10],va=a!==c[11]?Number(c[11]):va,ja.enable=a!==c[12]&&b(c[12]),ra=a!==c[13]?c[13]:ra,Ba=a!==c[14]?c[14]:Ba}function l(){function a(){var a=window.iFrameResizer;h(\"Reading data from page: \"+JSON.stringify(a)),Da=\"messageCallback\"in a?a.messageCallback:Da,Ea=\"readyCallback\"in a?a.readyCallback:Ea,ua=\"targetOrigin\"in a?a.targetOrigin:ua,ga=\"heightCalculationMethod\"in a?a.heightCalculationMethod:ga,Ba=\"widthCalculationMethod\"in a?a.widthCalculationMethod:Ba}function b(a,b){return\"function\"==typeof a&&(h(\"Setup custom \"+b+\"CalcMethod\"),Ga[b]=a,a=\"custom\"),a}\"iFrameResizer\"in window&&Object===window.iFrameResizer.constructor&&(a(),ga=b(ga,\"height\"),Ba=b(Ba,\"width\")),h(\"TargetOrigin for parent set to: \"+ua)}function m(a,b){return-1!==b.indexOf(\"-\")&&(i(\"Negative CSS value ignored for \"+a),b=\"\"),b}function n(b,c){a!==c&&\"\"!==c&&\"null\"!==c&&(document.body.style[b]=c,h(\"Body \"+b+' set to \"'+c+'\"'))}function o(){a===Z&&(Z=Y+\"px\"),n(\"margin\",m(\"margin\",Z))}function p(){document.documentElement.style.height=\"\",document.body.style.height=\"\",h('HTML & body height set to \"auto\"')}function q(a){var b={add:function(b){function d(){O(a.eventName,a.eventType)}Ha[b]=d,c(window,b,d,{passive:!0})},remove:function(a){var b=Ha[a];delete Ha[a],d(window,a,b)}};a.eventNames&&Array.prototype.map?(a.eventName=a.eventNames[0],a.eventNames.map(b[a.method])):b[a.method](a.eventName),h(e(a.method)+\" event listener: \"+a.eventType)}function r(a){q({method:a,eventType:\"Animation Start\",eventNames:[\"animationstart\",\"webkitAnimationStart\"]}),q({method:a,eventType:\"Animation Iteration\",eventNames:[\"animationiteration\",\"webkitAnimationIteration\"]}),q({method:a,eventType:\"Animation End\",eventNames:[\"animationend\",\"webkitAnimationEnd\"]}),q({method:a,eventType:\"Input\",eventName:\"input\"}),q({method:a,eventType:\"Mouse Up\",eventName:\"mouseup\"}),q({method:a,eventType:\"Mouse Down\",eventName:\"mousedown\"}),q({method:a,eventType:\"Orientation Change\",eventName:\"orientationchange\"}),q({method:a,eventType:\"Print\",eventName:[\"afterprint\",\"beforeprint\"]}),q({method:a,eventType:\"Ready State Change\",eventName:\"readystatechange\"}),q({method:a,eventType:\"Touch Start\",eventName:\"touchstart\"}),q({method:a,eventType:\"Touch End\",eventName:\"touchend\"}),q({method:a,eventType:\"Touch Cancel\",eventName:\"touchcancel\"}),q({method:a,eventType:\"Transition Start\",eventNames:[\"transitionstart\",\"webkitTransitionStart\",\"MSTransitionStart\",\"oTransitionStart\",\"otransitionstart\"]}),q({method:a,eventType:\"Transition Iteration\",eventNames:[\"transitioniteration\",\"webkitTransitionIteration\",\"MSTransitionIteration\",\"oTransitionIteration\",\"otransitioniteration\"]}),q({method:a,eventType:\"Transition End\",eventNames:[\"transitionend\",\"webkitTransitionEnd\",\"MSTransitionEnd\",\"oTransitionEnd\",\"otransitionend\"]}),\"child\"===ra&&q({method:a,eventType:\"IFrame Resized\",eventName:\"resize\"})}function s(a,b,c,d){return b!==a&&(a in c||(i(a+\" is not a valid option for \"+d+\"CalculationMethod.\"),a=b),h(d+' calculation method set to \"'+a+'\"')),a}function t(){ga=s(ga,fa,Ma,\"height\")}function u(){Ba=s(Ba,Aa,Na,\"width\")}function v(){!0===V?(r(\"add\"),G()):h(\"Auto Resize disabled\")}function w(){h(\"Disable outgoing messages\"),sa=!1}function x(){h(\"Remove event listener: Message\"),d(window,\"message\",T)}function y(){null!==$&&$.disconnect()}function z(){r(\"remove\"),y(),clearInterval(la)}function A(){w(),x(),!0===V&&z()}function B(){var a=document.createElement(\"div\");a.style.clear=\"both\",a.style.display=\"block\",document.body.appendChild(a)}function C(){function b(){return{x:window.pageXOffset!==a?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==a?window.pageYOffset:document.documentElement.scrollTop}}function d(a){var c=a.getBoundingClientRect(),d=b();return{x:parseInt(c.left,10)+parseInt(d.x,10),y:parseInt(c.top,10)+parseInt(d.y,10)}}function e(b){function c(a){var b=d(a);h(\"Moving to in page link (#\"+e+\") at x: \"+b.x+\" y: \"+b.y),S(b.y,b.x,\"scrollToOffset\")}var e=b.split(\"#\")[1]||b,f=decodeURIComponent(e),g=document.getElementById(f)||document.getElementsByName(f)[0];a!==g?c(g):(h(\"In page link (#\"+e+\") not found in iFrame, so sending to parent\"),S(0,0,\"inPageLink\",\"#\"+e))}function f(){\"\"!==location.hash&&\"#\"!==location.hash&&e(location.href)}function g(){function a(a){function b(a){a.preventDefault(),e(this.getAttribute(\"href\"))}\"#\"!==a.getAttribute(\"href\")&&c(a,\"click\",b)}Array.prototype.forEach.call(document.querySelectorAll('a[href^=\"#\"]'),a)}function j(){c(window,\"hashchange\",f)}function k(){setTimeout(f,ca)}function l(){Array.prototype.forEach&&document.querySelectorAll?(h(\"Setting up location.hash handlers\"),g(),j(),k()):i(\"In page linking not fully supported in this browser! (See README.md for IE8 workaround)\")}return ja.enable?l():h(\"In page linking not enabled\"),{findTarget:e}}function D(){h(\"Enable public methods\"),Ca.parentIFrame={autoResize:function(a){return!0===a&&!1===V?(V=!0,v()):!1===a&&!0===V&&(V=!1,z()),V},close:function(){S(0,0,\"close\"),A()},getId:function(){return pa},getPageInfo:function(a){\"function\"==typeof a?(Fa=a,S(0,0,\"pageInfo\")):(Fa=function(){},S(0,0,\"pageInfoStop\"))},moveToAnchor:function(a){ja.findTarget(a)},reset:function(){R(\"parentIFrame.reset\")},scrollTo:function(a,b){S(b,a,\"scrollTo\")},scrollToOffset:function(a,b){S(b,a,\"scrollToOffset\")},sendMessage:function(a,b){S(0,0,\"message\",JSON.stringify(a),b)},setHeightCalculationMethod:function(a){ga=a,t()},setWidthCalculationMethod:function(a){Ba=a,u()},setTargetOrigin:function(a){h(\"Set targetOrigin: \"+a),ua=a},size:function(a,b){O(\"size\",\"parentIFrame.size(\"+(a||\"\")+(b?\",\"+b:\"\")+\")\",a,b)}}}function E(){0!==ka&&(h(\"setInterval: \"+ka+\"ms\"),la=setInterval(function(){O(\"interval\",\"setInterval: \"+ka)},Math.abs(ka)))}function F(){function b(a){function b(a){!1===a.complete&&(h(\"Attach listeners to \"+a.src),a.addEventListener(\"load\",f,!1),a.addEventListener(\"error\",g,!1),k.push(a))}\"attributes\"===a.type&&\"src\"===a.attributeName?b(a.target):\"childList\"===a.type&&Array.prototype.forEach.call(a.target.querySelectorAll(\"img\"),b)}function c(a){k.splice(k.indexOf(a),1)}function d(a){h(\"Remove listeners from \"+a.src),a.removeEventListener(\"load\",f,!1),a.removeEventListener(\"error\",g,!1),c(a)}function e(b,c,e){d(b.target),O(c,e+\": \"+b.target.src,a,a)}function f(a){e(a,\"imageLoad\",\"Image loaded\")}function g(a){e(a,\"imageLoadFailed\",\"Image load failed\")}function i(a){O(\"mutationObserver\",\"mutationObserver: \"+a[0].target+\" \"+a[0].type),a.forEach(b)}function j(){var a=document.querySelector(\"body\"),b={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return m=new l(i),h(\"Create body MutationObserver\"),m.observe(a,b),m}var k=[],l=window.MutationObserver||window.WebKitMutationObserver,m=j();return{disconnect:function(){\"disconnect\"in m&&(h(\"Disconnect body MutationObserver\"),m.disconnect(),k.forEach(d))}}}function G(){var a=0>ka;window.MutationObserver||window.WebKitMutationObserver?a?E():$=F():(h(\"MutationObserver not supported in this browser!\"),E())}function H(a,b){function c(a){if(/^\\d+(px)?$/i.test(a))return parseInt(a,W);var c=b.style.left,d=b.runtimeStyle.left;return b.runtimeStyle.left=b.currentStyle.left,b.style.left=a||0,a=b.style.pixelLeft,b.style.left=c,b.runtimeStyle.left=d,a}var d=0;return b=b||document.body,\"defaultView\"in document&&\"getComputedStyle\"in document.defaultView?(d=document.defaultView.getComputedStyle(b,null),d=null!==d?d[a]:0):d=c(b.currentStyle[a]),parseInt(d,W)}function I(a){a>ya/2&&(ya=2*a,h(\"Event throttle increased to \"+ya+\"ms\"))}function J(a,b){for(var c=b.length,d=0,f=0,g=e(a),i=La(),j=0;j<c;j++)(d=b[j].getBoundingClientRect()[a]+H(\"margin\"+g,b[j]))>f&&(f=d);return i=La()-i,h(\"Parsed \"+c+\" HTML elements\"),h(\"Element position calculated in \"+i+\"ms\"),I(i),f}function K(a){return[a.bodyOffset(),a.bodyScroll(),a.documentElementOffset(),a.documentElementScroll()]}function L(a,b){function c(){return i(\"No tagged elements (\"+b+\") found on page\"),document.querySelectorAll(\"body *\")}var d=document.querySelectorAll(\"[\"+b+\"]\");return 0===d.length&&c(),J(a,d)}function M(){return document.querySelectorAll(\"body *\")}function N(b,c,d,e){function f(){ea=m,za=n,S(ea,za,b)}function g(){function b(a,b){return!(Math.abs(a-b)<=va)}return m=a!==d?d:Ma[ga](),n=a!==e?e:Na[Ba](),b(ea,m)||aa&&b(za,n)}function i(){return!(b in{init:1,interval:1,size:1})}function j(){return ga in qa||aa&&Ba in qa}function k(){h(\"No change in size detected\")}function l(){i()&&j()?R(c):b in{interval:1}||k()}var m,n;g()||\"init\"===b?(P(),f()):l()}function O(a,b,c,d){function e(){a in{reset:1,resetPage:1,init:1}||h(\"Trigger event: \"+b)}function f(){return wa&&a in ba}f()?h(\"Trigger event cancelled: \"+a):(e(),\"init\"===a?N(a,b,c,d):Oa(a,b,c,d))}function P(){wa||(wa=!0,h(\"Trigger event lock on\")),clearTimeout(xa),xa=setTimeout(function(){wa=!1,h(\"Trigger event lock off\"),h(\"--\")},ca)}function Q(a){ea=Ma[ga](),za=Na[Ba](),S(ea,za,a)}function R(a){var b=ga;ga=fa,h(\"Reset trigger event: \"+a),P(),Q(\"reset\"),ga=b}function S(b,c,d,e,f){function g(){a===f?f=ua:h(\"Message targetOrigin: \"+f)}function i(){var g=b+\":\"+c,i=pa+\":\"+g+\":\"+d+(a!==e?\":\"+e:\"\");h(\"Sending message to host page (\"+i+\")\"),ta.postMessage(na+i,f)}!0===sa&&(g(),i())}function T(a){function b(){return na===(\"\"+a.data).substr(0,oa)}function c(){return a.data.split(\"]\")[1].split(\":\")[0]}function d(){return a.data.substr(a.data.indexOf(\":\")+1)}function e(){return!(\"undefined\"!=typeof module&&module.exports)&&\"iFrameResize\"in window||\"jQuery\"in window&&\"iFrameResize\"in window.jQuery.prototype}function f(){return a.data.split(\":\")[2]in{true:1,false:1}}function g(){var b=c();b in l?l[b]():e()||f()||i(\"Unexpected message (\"+a.data+\")\")}function k(){!1===da?g():f()?l.init():h('Ignored message of type \"'+c()+'\". Received before initialization.')}var l={init:function(){ia=a.data,ta=a.source,j(),da=!1,setTimeout(function(){ha=!1},ca)},reset:function(){ha?h(\"Page reset ignored by init\"):(h(\"Page size reset by host page\"),Q(\"resetPage\"))},resize:function(){O(\"resizeParent\",\"Parent window requested size check\")},moveToAnchor:function(){ja.findTarget(d())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var a=d();h(\"PageInfoFromParent called from parent: \"+a),Fa(JSON.parse(a)),h(\" --\")},message:function(){var a=d();h(\"MessageCallback called from parent: \"+a),Da(JSON.parse(a)),h(\" --\")}};b()&&k()}function U(){\"loading\"!==document.readyState&&window.parent.postMessage(\"[iFrameResizerChild]Ready\",\"*\")}if(\"undefined\"!=typeof window){var V=!0,W=10,X=\"\",Y=0,Z=\"\",$=null,_=\"\",aa=!1,ba={resize:1,click:1},ca=128,da=!0,ea=1,fa=\"bodyOffset\",ga=fa,ha=!0,ia=\"\",ja={},ka=32,la=null,ma=!1,na=\"[iFrameSizer]\",oa=na.length,pa=\"\",qa={max:1,min:1,bodyScroll:1,documentElementScroll:1},ra=\"child\",sa=!0,ta=window.parent,ua=\"*\",va=0,wa=!1,xa=null,ya=16,za=1,Aa=\"scroll\",Ba=Aa,Ca=window,Da=function(){i(\"MessageCallback function not defined\")},Ea=function(){},Fa=function(){},Ga={height:function(){return i(\"Custom height calculation function not defined\"),document.documentElement.offsetHeight},width:function(){return i(\"Custom width calculation function not defined\"),document.body.scrollWidth}},Ha={},Ia=!1,Ja=!1;try{var Ka=Object.create({},{passive:{get:function(){Ia=!0}},once:{get:function(){Ja=!0}}});window.addEventListener(\"test\",b,Ka),window.removeEventListener(\"test\",b,Ka)}catch(Pa){}var La=Date.now||function(){return(new Date).getTime()},Ma={bodyOffset:function(){return document.body.offsetHeight+H(\"marginTop\")+H(\"marginBottom\")},offset:function(){return Ma.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Ga.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,K(Ma))},min:function(){return Math.min.apply(null,K(Ma))},grow:function(){return Ma.max()},lowestElement:function(){return Math.max(Ma.bodyOffset()||Ma.documentElementOffset(),J(\"bottom\",M()))},taggedElement:function(){return L(\"bottom\",\"data-iframe-height\")}},Na={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Ga.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Na.bodyScroll(),Na.documentElementScroll())},max:function(){return Math.max.apply(null,K(Na))},min:function(){return Math.min.apply(null,K(Na))},rightMostElement:function(){return J(\"right\",M())},taggedElement:function(){return L(\"right\",\"data-iframe-width\")}},Oa=f(N);c(window,\"message\",T),c(window,\"readystatechange\",U),U()}}();\n//# sourceMappingURL=iframeResizer.contentWindow.map"

/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime-module.js":
/*!********************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/regenerator-runtime/runtime-module.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../../node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!*************************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/regenerator-runtime/runtime.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "../../node_modules/whatwg-fetch/fetch.js":
/*!****************************************************************************!*\
  !*** /Users/vadsiam/Documents/Audienzz/node_modules/whatwg-fetch/fetch.js ***!
  \****************************************************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./node_modules/@audienzz/check/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@audienzz/check/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Try to get positive result from `fetch` for a `timeout` ms
 *
 * @param fetch - function to execute
 * @param timeout - time in ms to wait until rejection
 * @param step - time in ms for one step (frequency)
 * @returns {Promise<any>}
 */
exports.default = function () {
  for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {
    var check = function check(fetch, timeout, step) {
      var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (time <= timeout) {
        var value = void 0;
        try {
          value = fetch();
        } catch (err) {
          reject(err);
        }
        if (typeof value !== 'undefined' && value !== null) {
          resolve(value);
        } else {
          setTimeout(function () {
            return check(fetch, timeout, step, time + step);
          }, step);
        }
      } else {
        reject(new Error('timeout of ' + timeout + 'ms'));
      }
    };
    check.apply(undefined, props.concat([0]));
  });
};

'filehash ou+xbMC4E7Y2P+NKAsNATAIJ2XI=';

/***/ }),

/***/ "./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



module.exports = __webpack_require__(/*! ./js */ "./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/index.js");
'filehash J8iA55oeUvEIxkkKUUXnJ+6Kfq4=';

/***/ }),

/***/ "./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/iframeResizer.contentWindow.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/iframeResizer.contentWindow.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * File: iframeResizer.contentWindow.js
 * Desc: Include this file in any page being loaded into an iframe
 *       to force the iframe to resize to the content size.
 * Requires: iframeResizer.js on host page.
 * Doc: https://github.com/davidjbradshaw/iframe-resizer
 * Author: David J. Bradshaw - dave@bradshaw.net
 * Contributor: Jure Mav - jure.mav@gmail.com
 * Contributor: Ian Caunce - ian@hallnet.co.uk
 */

;(function (undefined) {
  'use strict';

  if (typeof window === 'undefined') return; // don't run for server side render

  var autoResize = true,
      base = 10,
      bodyBackground = '',
      bodyMargin = 0,
      bodyMarginStr = '',
      bodyObserver = null,
      bodyPadding = '',
      calculateWidth = false,
      doubleEventList = { 'resize': 1, 'click': 1 },
      eventCancelTimer = 128,
      firstRun = true,
      height = 1,
      heightCalcModeDefault = 'bodyOffset',
      heightCalcMode = heightCalcModeDefault,
      initLock = true,
      initMsg = '',
      inPageLinks = {},
      interval = 32,
      intervalTimer = null,
      logging = false,
      msgID = '[iFrameSizer]',
      //Must match host page msg ID
  msgIdLen = msgID.length,
      myID = '',
      observer = null,
      resetRequiredMethods = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 },
      resizeFrom = 'child',
      sendPermit = true,
      targetOriginDefault = '*',
      tolerance = 0,
      triggerLocked = false,
      triggerLockedTimer = null,
      throttledTimer = 16,
      width = 1,
      widthCalcModeDefault = 'scroll',
      widthCalcMode = widthCalcModeDefault,
      win = window,
      target = window.parent,
      messageCallback = function messageCallback() {
    warn('MessageCallback function not defined');
  },
      readyCallback = function readyCallback() {},
      pageInfoCallback = function pageInfoCallback() {},
      customCalcMethods = {
    height: function height() {
      warn('Custom height calculation function not defined');
      return document.documentElement.offsetHeight;
    },
    width: function width() {
      warn('Custom width calculation function not defined');
      return document.body.scrollWidth;
    }
  },
      eventHandlersByName = {},
      passiveSupported = false,
      onceSupported = false;

  function noop() {}

  try {
    var options = Object.create({}, {
      passive: { get: function get() {
          passiveSupported = true;
        } },
      once: { get: function get() {
          onceSupported = true;
        } }
    });
    window.addEventListener('test', noop, options);
    window.removeEventListener('test', noop, options);
  } catch (e) {/* */}

  function addEventListener(el, evt, func, options) {
    /* istanbul ignore else */ // Not testable in phantomJS
    if ('addEventListener' in window) {
      el.addEventListener(evt, func, passiveSupported ? options || {} : false);
    } else if ('attachEvent' in window) {
      //IE
      el.attachEvent('on' + evt, func);
    }
  }

  function removeEventListener(el, evt, func) {
    /* istanbul ignore else */ // Not testable in phantomJS
    if ('removeEventListener' in window) {
      el.removeEventListener(evt, func, false);
    } else if ('detachEvent' in window) {
      //IE
      el.detachEvent('on' + evt, func);
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //Based on underscore.js
  function throttle(func) {
    var context,
        args,
        result,
        timeout = null,
        previous = 0,
        later = function later() {
      previous = getNow();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    };

    return function () {
      var now = getNow();

      if (!previous) {
        previous = now;
      }

      var remaining = throttledTimer - (now - previous);

      context = this;
      args = arguments;

      if (remaining <= 0 || remaining > throttledTimer) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }

        previous = now;
        result = func.apply(context, args);

        if (!timeout) {
          context = args = null;
        }
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }

      return result;
    };
  }

  var getNow = Date.now || function () {
    /* istanbul ignore next */ // Not testable in PhantonJS
    return new Date().getTime();
  };

  function formatLogMsg(msg) {
    return msgID + '[' + myID + ']' + ' ' + msg;
  }

  function log(msg) {
    if (logging && 'object' === _typeof(window.console)) {
      console.log(formatLogMsg(msg));
    }
  }

  function warn(msg) {
    if ('object' === _typeof(window.console)) {
      console.warn(formatLogMsg(msg));
    }
  }

  function init() {
    readDataFromParent();
    log('Initialising iFrame (' + location.href + ')');
    readDataFromPage();
    setMargin();
    setBodyStyle('background', bodyBackground);
    setBodyStyle('padding', bodyPadding);
    injectClearFixIntoBodyElement();
    checkHeightMode();
    checkWidthMode();
    stopInfiniteResizingOfIFrame();
    setupPublicMethods();
    startEventListeners();
    inPageLinks = setupInPageLinks();
    sendSize('init', 'Init message from host page');
    readyCallback();
  }

  function readDataFromParent() {

    function strBool(str) {
      return 'true' === str ? true : false;
    }

    var data = initMsg.substr(msgIdLen).split(':');

    myID = data[0];
    bodyMargin = undefined !== data[1] ? Number(data[1]) : bodyMargin; //For V1 compatibility
    calculateWidth = undefined !== data[2] ? strBool(data[2]) : calculateWidth;
    logging = undefined !== data[3] ? strBool(data[3]) : logging;
    interval = undefined !== data[4] ? Number(data[4]) : interval;
    autoResize = undefined !== data[6] ? strBool(data[6]) : autoResize;
    bodyMarginStr = data[7];
    heightCalcMode = undefined !== data[8] ? data[8] : heightCalcMode;
    bodyBackground = data[9];
    bodyPadding = data[10];
    tolerance = undefined !== data[11] ? Number(data[11]) : tolerance;
    inPageLinks.enable = undefined !== data[12] ? strBool(data[12]) : false;
    resizeFrom = undefined !== data[13] ? data[13] : resizeFrom;
    widthCalcMode = undefined !== data[14] ? data[14] : widthCalcMode;
  }

  function readDataFromPage() {
    function readData() {
      var data = window.iFrameResizer;

      log('Reading data from page: ' + JSON.stringify(data));

      messageCallback = 'messageCallback' in data ? data.messageCallback : messageCallback;
      readyCallback = 'readyCallback' in data ? data.readyCallback : readyCallback;
      targetOriginDefault = 'targetOrigin' in data ? data.targetOrigin : targetOriginDefault;
      heightCalcMode = 'heightCalculationMethod' in data ? data.heightCalculationMethod : heightCalcMode;
      widthCalcMode = 'widthCalculationMethod' in data ? data.widthCalculationMethod : widthCalcMode;
    }

    function setupCustomCalcMethods(calcMode, calcFunc) {
      if ('function' === typeof calcMode) {
        log('Setup custom ' + calcFunc + 'CalcMethod');
        customCalcMethods[calcFunc] = calcMode;
        calcMode = 'custom';
      }

      return calcMode;
    }

    if ('iFrameResizer' in window && Object === window.iFrameResizer.constructor) {
      readData();
      heightCalcMode = setupCustomCalcMethods(heightCalcMode, 'height');
      widthCalcMode = setupCustomCalcMethods(widthCalcMode, 'width');
    }

    log('TargetOrigin for parent set to: ' + targetOriginDefault);
  }

  function chkCSS(attr, value) {
    if (-1 !== value.indexOf('-')) {
      warn('Negative CSS value ignored for ' + attr);
      value = '';
    }
    return value;
  }

  function setBodyStyle(attr, value) {
    if (undefined !== value && '' !== value && 'null' !== value) {
      document.body.style[attr] = value;
      log('Body ' + attr + ' set to "' + value + '"');
    }
  }

  function setMargin() {
    //If called via V1 script, convert bodyMargin from int to str
    if (undefined === bodyMarginStr) {
      bodyMarginStr = bodyMargin + 'px';
    }

    setBodyStyle('margin', chkCSS('margin', bodyMarginStr));
  }

  function stopInfiniteResizingOfIFrame() {
    document.documentElement.style.height = '';
    document.body.style.height = '';
    log('HTML & body height set to "auto"');
  }

  function manageTriggerEvent(options) {

    var listener = {
      add: function add(eventName) {
        function handleEvent() {
          sendSize(options.eventName, options.eventType);
        }

        eventHandlersByName[eventName] = handleEvent;

        addEventListener(window, eventName, handleEvent, { passive: true });
      },
      remove: function remove(eventName) {
        var handleEvent = eventHandlersByName[eventName];
        delete eventHandlersByName[eventName];

        removeEventListener(window, eventName, handleEvent);
      }
    };

    if (options.eventNames && Array.prototype.map) {
      options.eventName = options.eventNames[0];
      options.eventNames.map(listener[options.method]);
    } else {
      listener[options.method](options.eventName);
    }

    log(capitalizeFirstLetter(options.method) + ' event listener: ' + options.eventType);
  }

  function manageEventListeners(method) {
    manageTriggerEvent({ method: method, eventType: 'Animation Start', eventNames: ['animationstart', 'webkitAnimationStart'] });
    manageTriggerEvent({ method: method, eventType: 'Animation Iteration', eventNames: ['animationiteration', 'webkitAnimationIteration'] });
    manageTriggerEvent({ method: method, eventType: 'Animation End', eventNames: ['animationend', 'webkitAnimationEnd'] });
    manageTriggerEvent({ method: method, eventType: 'Input', eventName: 'input' });
    manageTriggerEvent({ method: method, eventType: 'Mouse Up', eventName: 'mouseup' });
    manageTriggerEvent({ method: method, eventType: 'Mouse Down', eventName: 'mousedown' });
    manageTriggerEvent({ method: method, eventType: 'Orientation Change', eventName: 'orientationchange' });
    manageTriggerEvent({ method: method, eventType: 'Print', eventName: ['afterprint', 'beforeprint'] });
    manageTriggerEvent({ method: method, eventType: 'Ready State Change', eventName: 'readystatechange' });
    manageTriggerEvent({ method: method, eventType: 'Touch Start', eventName: 'touchstart' });
    manageTriggerEvent({ method: method, eventType: 'Touch End', eventName: 'touchend' });
    manageTriggerEvent({ method: method, eventType: 'Touch Cancel', eventName: 'touchcancel' });
    manageTriggerEvent({ method: method, eventType: 'Transition Start', eventNames: ['transitionstart', 'webkitTransitionStart', 'MSTransitionStart', 'oTransitionStart', 'otransitionstart'] });
    manageTriggerEvent({ method: method, eventType: 'Transition Iteration', eventNames: ['transitioniteration', 'webkitTransitionIteration', 'MSTransitionIteration', 'oTransitionIteration', 'otransitioniteration'] });
    manageTriggerEvent({ method: method, eventType: 'Transition End', eventNames: ['transitionend', 'webkitTransitionEnd', 'MSTransitionEnd', 'oTransitionEnd', 'otransitionend'] });
    if ('child' === resizeFrom) {
      manageTriggerEvent({ method: method, eventType: 'IFrame Resized', eventName: 'resize' });
    }
  }

  function checkCalcMode(calcMode, calcModeDefault, modes, type) {
    if (calcModeDefault !== calcMode) {
      if (!(calcMode in modes)) {
        warn(calcMode + ' is not a valid option for ' + type + 'CalculationMethod.');
        calcMode = calcModeDefault;
      }
      log(type + ' calculation method set to "' + calcMode + '"');
    }

    return calcMode;
  }

  function checkHeightMode() {
    heightCalcMode = checkCalcMode(heightCalcMode, heightCalcModeDefault, getHeight, 'height');
  }

  function checkWidthMode() {
    widthCalcMode = checkCalcMode(widthCalcMode, widthCalcModeDefault, getWidth, 'width');
  }

  function startEventListeners() {
    if (true === autoResize) {
      manageEventListeners('add');
      setupMutationObserver();
    } else {
      log('Auto Resize disabled');
    }
  }

  function stopMsgsToParent() {
    log('Disable outgoing messages');
    sendPermit = false;
  }

  function removeMsgListener() {
    log('Remove event listener: Message');
    removeEventListener(window, 'message', receiver);
  }

  function disconnectMutationObserver() {
    if (null !== bodyObserver) {
      /* istanbul ignore next */ // Not testable in PhantonJS
      bodyObserver.disconnect();
    }
  }

  function stopEventListeners() {
    manageEventListeners('remove');
    disconnectMutationObserver();
    clearInterval(intervalTimer);
  }

  function teardown() {
    stopMsgsToParent();
    removeMsgListener();
    if (true === autoResize) stopEventListeners();
  }

  function injectClearFixIntoBodyElement() {
    var clearFix = document.createElement('div');
    clearFix.style.clear = 'both';
    clearFix.style.display = 'block'; //Guard against this having been globally redefined in CSS.
    document.body.appendChild(clearFix);
  }

  function setupInPageLinks() {

    function getPagePosition() {
      return {
        x: window.pageXOffset !== undefined ? window.pageXOffset : document.documentElement.scrollLeft,
        y: window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop
      };
    }

    function getElementPosition(el) {
      var elPosition = el.getBoundingClientRect(),
          pagePosition = getPagePosition();

      return {
        x: parseInt(elPosition.left, 10) + parseInt(pagePosition.x, 10),
        y: parseInt(elPosition.top, 10) + parseInt(pagePosition.y, 10)
      };
    }

    function findTarget(location) {
      function jumpToTarget(target) {
        var jumpPosition = getElementPosition(target);

        log('Moving to in page link (#' + hash + ') at x: ' + jumpPosition.x + ' y: ' + jumpPosition.y);
        sendMsg(jumpPosition.y, jumpPosition.x, 'scrollToOffset'); // X&Y reversed at sendMsg uses height/width
      }

      var hash = location.split('#')[1] || location,
          //Remove # if present
      hashData = decodeURIComponent(hash),
          target = document.getElementById(hashData) || document.getElementsByName(hashData)[0];

      if (undefined !== target) {
        jumpToTarget(target);
      } else {
        log('In page link (#' + hash + ') not found in iFrame, so sending to parent');
        sendMsg(0, 0, 'inPageLink', '#' + hash);
      }
    }

    function checkLocationHash() {
      if ('' !== location.hash && '#' !== location.hash) {
        findTarget(location.href);
      }
    }

    function bindAnchors() {
      function setupLink(el) {
        function linkClicked(e) {
          e.preventDefault();

          /*jshint validthis:true */
          findTarget(this.getAttribute('href'));
        }

        if ('#' !== el.getAttribute('href')) {
          addEventListener(el, 'click', linkClicked);
        }
      }

      Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), setupLink);
    }

    function bindLocationHash() {
      addEventListener(window, 'hashchange', checkLocationHash);
    }

    function initCheck() {
      //check if page loaded with location hash after init resize
      setTimeout(checkLocationHash, eventCancelTimer);
    }

    function enableInPageLinks() {
      /* istanbul ignore else */ // Not testable in phantonJS
      if (Array.prototype.forEach && document.querySelectorAll) {
        log('Setting up location.hash handlers');
        bindAnchors();
        bindLocationHash();
        initCheck();
      } else {
        warn('In page linking not fully supported in this browser! (See README.md for IE8 workaround)');
      }
    }

    if (inPageLinks.enable) {
      enableInPageLinks();
    } else {
      log('In page linking not enabled');
    }

    return {
      findTarget: findTarget
    };
  }

  function setupPublicMethods() {
    log('Enable public methods');

    win.parentIFrame = {

      autoResize: function autoResizeF(resize) {
        if (true === resize && false === autoResize) {
          autoResize = true;
          startEventListeners();
          //sendSize('autoResize','Auto Resize enabled');
        } else if (false === resize && true === autoResize) {
          autoResize = false;
          stopEventListeners();
        }

        return autoResize;
      },

      close: function closeF() {
        sendMsg(0, 0, 'close');
        teardown();
      },

      getId: function getIdF() {
        return myID;
      },

      getPageInfo: function getPageInfoF(callback) {
        if ('function' === typeof callback) {
          pageInfoCallback = callback;
          sendMsg(0, 0, 'pageInfo');
        } else {
          pageInfoCallback = function pageInfoCallback() {};
          sendMsg(0, 0, 'pageInfoStop');
        }
      },

      moveToAnchor: function moveToAnchorF(hash) {
        inPageLinks.findTarget(hash);
      },

      reset: function resetF() {
        resetIFrame('parentIFrame.reset');
      },

      scrollTo: function scrollToF(x, y) {
        sendMsg(y, x, 'scrollTo'); // X&Y reversed at sendMsg uses height/width
      },

      scrollToOffset: function scrollToF(x, y) {
        sendMsg(y, x, 'scrollToOffset'); // X&Y reversed at sendMsg uses height/width
      },

      sendMessage: function sendMessageF(msg, targetOrigin) {
        sendMsg(0, 0, 'message', JSON.stringify(msg), targetOrigin);
      },

      setHeightCalculationMethod: function setHeightCalculationMethodF(heightCalculationMethod) {
        heightCalcMode = heightCalculationMethod;
        checkHeightMode();
      },

      setWidthCalculationMethod: function setWidthCalculationMethodF(widthCalculationMethod) {
        widthCalcMode = widthCalculationMethod;
        checkWidthMode();
      },

      setTargetOrigin: function setTargetOriginF(targetOrigin) {
        log('Set targetOrigin: ' + targetOrigin);
        targetOriginDefault = targetOrigin;
      },

      size: function sizeF(customHeight, customWidth) {
        var valString = '' + (customHeight ? customHeight : '') + (customWidth ? ',' + customWidth : '');
        //lockTrigger();
        sendSize('size', 'parentIFrame.size(' + valString + ')', customHeight, customWidth);
      }
    };
  }

  function initInterval() {
    if (0 !== interval) {
      log('setInterval: ' + interval + 'ms');
      intervalTimer = setInterval(function () {
        sendSize('interval', 'setInterval: ' + interval);
      }, Math.abs(interval));
    }
  }

  /* istanbul ignore next */ //Not testable in PhantomJS
  function setupBodyMutationObserver() {
    function addImageLoadListners(mutation) {
      function addImageLoadListener(element) {
        if (false === element.complete) {
          log('Attach listeners to ' + element.src);
          element.addEventListener('load', imageLoaded, false);
          element.addEventListener('error', imageError, false);
          elements.push(element);
        }
      }

      if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        addImageLoadListener(mutation.target);
      } else if (mutation.type === 'childList') {
        Array.prototype.forEach.call(mutation.target.querySelectorAll('img'), addImageLoadListener);
      }
    }

    function removeFromArray(element) {
      elements.splice(elements.indexOf(element), 1);
    }

    function removeImageLoadListener(element) {
      log('Remove listeners from ' + element.src);
      element.removeEventListener('load', imageLoaded, false);
      element.removeEventListener('error', imageError, false);
      removeFromArray(element);
    }

    function imageEventTriggered(event, type, typeDesc) {
      removeImageLoadListener(event.target);
      sendSize(type, typeDesc + ': ' + event.target.src, undefined, undefined);
    }

    function imageLoaded(event) {
      imageEventTriggered(event, 'imageLoad', 'Image loaded');
    }

    function imageError(event) {
      imageEventTriggered(event, 'imageLoadFailed', 'Image load failed');
    }

    function mutationObserved(mutations) {
      sendSize('mutationObserver', 'mutationObserver: ' + mutations[0].target + ' ' + mutations[0].type);

      //Deal with WebKit asyncing image loading when tags are injected into the page
      mutations.forEach(addImageLoadListners);
    }

    function createMutationObserver() {
      var target = document.querySelector('body'),
          config = {
        attributes: true,
        attributeOldValue: false,
        characterData: true,
        characterDataOldValue: false,
        childList: true,
        subtree: true
      };

      observer = new MutationObserver(mutationObserved);

      log('Create body MutationObserver');
      observer.observe(target, config);

      return observer;
    }

    var elements = [],
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        observer = createMutationObserver();

    return {
      disconnect: function disconnect() {
        if ('disconnect' in observer) {
          log('Disconnect body MutationObserver');
          observer.disconnect();
          elements.forEach(removeImageLoadListener);
        }
      }
    };
  }

  function setupMutationObserver() {
    var forceIntervalTimer = 0 > interval;

    /* istanbul ignore if */ // Not testable in PhantomJS
    if (window.MutationObserver || window.WebKitMutationObserver) {
      if (forceIntervalTimer) {
        initInterval();
      } else {
        bodyObserver = setupBodyMutationObserver();
      }
    } else {
      log('MutationObserver not supported in this browser!');
      initInterval();
    }
  }

  // document.documentElement.offsetHeight is not reliable, so
  // we have to jump through hoops to get a better value.
  function getComputedStyle(prop, el) {
    /* istanbul ignore next */ //Not testable in PhantomJS
    function convertUnitsToPxForIE8(value) {
      var PIXEL = /^\d+(px)?$/i;

      if (PIXEL.test(value)) {
        return parseInt(value, base);
      }

      var style = el.style.left,
          runtimeStyle = el.runtimeStyle.left;

      el.runtimeStyle.left = el.currentStyle.left;
      el.style.left = value || 0;
      value = el.style.pixelLeft;
      el.style.left = style;
      el.runtimeStyle.left = runtimeStyle;

      return value;
    }

    var retVal = 0;
    el = el || document.body;

    /* istanbul ignore else */ // Not testable in phantonJS
    if ('defaultView' in document && 'getComputedStyle' in document.defaultView) {
      retVal = document.defaultView.getComputedStyle(el, null);
      retVal = null !== retVal ? retVal[prop] : 0;
    } else {
      //IE8
      retVal = convertUnitsToPxForIE8(el.currentStyle[prop]);
    }

    return parseInt(retVal, base);
  }

  function chkEventThottle(timer) {
    if (timer > throttledTimer / 2) {
      throttledTimer = 2 * timer;
      log('Event throttle increased to ' + throttledTimer + 'ms');
    }
  }

  //Idea from https://github.com/guardian/iframe-messenger
  function getMaxElement(side, elements) {
    var elementsLength = elements.length,
        elVal = 0,
        maxVal = 0,
        Side = capitalizeFirstLetter(side),
        timer = getNow();

    for (var i = 0; i < elementsLength; i++) {
      elVal = elements[i].getBoundingClientRect()[side] + getComputedStyle('margin' + Side, elements[i]);
      if (elVal > maxVal) {
        maxVal = elVal;
      }
    }

    timer = getNow() - timer;

    log('Parsed ' + elementsLength + ' HTML elements');
    log('Element position calculated in ' + timer + 'ms');

    chkEventThottle(timer);

    return maxVal;
  }

  function getAllMeasurements(dimention) {
    return [dimention.bodyOffset(), dimention.bodyScroll(), dimention.documentElementOffset(), dimention.documentElementScroll()];
  }

  function getTaggedElements(side, tag) {
    function noTaggedElementsFound() {
      warn('No tagged elements (' + tag + ') found on page');
      return document.querySelectorAll('body *');
    }

    var elements = document.querySelectorAll('[' + tag + ']');

    if (0 === elements.length) noTaggedElementsFound();

    return getMaxElement(side, elements);
  }

  function getAllElements() {
    return document.querySelectorAll('body *');
  }

  var getHeight = {
    bodyOffset: function getBodyOffsetHeight() {
      return document.body.offsetHeight + getComputedStyle('marginTop') + getComputedStyle('marginBottom');
    },

    offset: function offset() {
      return getHeight.bodyOffset(); //Backwards compatability
    },

    bodyScroll: function getBodyScrollHeight() {
      return document.body.scrollHeight;
    },

    custom: function getCustomWidth() {
      return customCalcMethods.height();
    },

    documentElementOffset: function getDEOffsetHeight() {
      return document.documentElement.offsetHeight;
    },

    documentElementScroll: function getDEScrollHeight() {
      return document.documentElement.scrollHeight;
    },

    max: function getMaxHeight() {
      return Math.max.apply(null, getAllMeasurements(getHeight));
    },

    min: function getMinHeight() {
      return Math.min.apply(null, getAllMeasurements(getHeight));
    },

    grow: function growHeight() {
      return getHeight.max(); //Run max without the forced downsizing
    },

    lowestElement: function getBestHeight() {
      return Math.max(getHeight.bodyOffset() || getHeight.documentElementOffset(), getMaxElement('bottom', getAllElements()));
    },

    taggedElement: function getTaggedElementsHeight() {
      return getTaggedElements('bottom', 'data-iframe-height');
    }
  },
      getWidth = {
    bodyScroll: function getBodyScrollWidth() {
      return document.body.scrollWidth;
    },

    bodyOffset: function getBodyOffsetWidth() {
      return document.body.offsetWidth;
    },

    custom: function getCustomWidth() {
      return customCalcMethods.width();
    },

    documentElementScroll: function getDEScrollWidth() {
      return document.documentElement.scrollWidth;
    },

    documentElementOffset: function getDEOffsetWidth() {
      return document.documentElement.offsetWidth;
    },

    scroll: function getMaxWidth() {
      return Math.max(getWidth.bodyScroll(), getWidth.documentElementScroll());
    },

    max: function getMaxWidth() {
      return Math.max.apply(null, getAllMeasurements(getWidth));
    },

    min: function getMinWidth() {
      return Math.min.apply(null, getAllMeasurements(getWidth));
    },

    rightMostElement: function rightMostElement() {
      return getMaxElement('right', getAllElements());
    },

    taggedElement: function getTaggedElementsWidth() {
      return getTaggedElements('right', 'data-iframe-width');
    }
  };

  function sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth) {

    function resizeIFrame() {
      height = currentHeight;
      width = currentWidth;

      sendMsg(height, width, triggerEvent);
    }

    function isSizeChangeDetected() {
      function checkTolarance(a, b) {
        var retVal = Math.abs(a - b) <= tolerance;
        return !retVal;
      }

      currentHeight = undefined !== customHeight ? customHeight : getHeight[heightCalcMode]();
      currentWidth = undefined !== customWidth ? customWidth : getWidth[widthCalcMode]();

      return checkTolarance(height, currentHeight) || calculateWidth && checkTolarance(width, currentWidth);
    }

    function isForceResizableEvent() {
      return !(triggerEvent in { 'init': 1, 'interval': 1, 'size': 1 });
    }

    function isForceResizableCalcMode() {
      return heightCalcMode in resetRequiredMethods || calculateWidth && widthCalcMode in resetRequiredMethods;
    }

    function logIgnored() {
      log('No change in size detected');
    }

    function checkDownSizing() {
      if (isForceResizableEvent() && isForceResizableCalcMode()) {
        resetIFrame(triggerEventDesc);
      } else if (!(triggerEvent in { 'interval': 1 })) {
        logIgnored();
      }
    }

    var currentHeight, currentWidth;

    if (isSizeChangeDetected() || 'init' === triggerEvent) {
      lockTrigger();
      resizeIFrame();
    } else {
      checkDownSizing();
    }
  }

  var sizeIFrameThrottled = throttle(sizeIFrame);

  function sendSize(triggerEvent, triggerEventDesc, customHeight, customWidth) {
    function recordTrigger() {
      if (!(triggerEvent in { 'reset': 1, 'resetPage': 1, 'init': 1 })) {
        log('Trigger event: ' + triggerEventDesc);
      }
    }

    function isDoubleFiredEvent() {
      return triggerLocked && triggerEvent in doubleEventList;
    }

    if (!isDoubleFiredEvent()) {
      recordTrigger();
      if (triggerEvent === 'init') {
        sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth);
      } else {
        sizeIFrameThrottled(triggerEvent, triggerEventDesc, customHeight, customWidth);
      }
    } else {
      log('Trigger event cancelled: ' + triggerEvent);
    }
  }

  function lockTrigger() {
    if (!triggerLocked) {
      triggerLocked = true;
      log('Trigger event lock on');
    }
    clearTimeout(triggerLockedTimer);
    triggerLockedTimer = setTimeout(function () {
      triggerLocked = false;
      log('Trigger event lock off');
      log('--');
    }, eventCancelTimer);
  }

  function triggerReset(triggerEvent) {
    height = getHeight[heightCalcMode]();
    width = getWidth[widthCalcMode]();

    sendMsg(height, width, triggerEvent);
  }

  function resetIFrame(triggerEventDesc) {
    var hcm = heightCalcMode;
    heightCalcMode = heightCalcModeDefault;

    log('Reset trigger event: ' + triggerEventDesc);
    lockTrigger();
    triggerReset('reset');

    heightCalcMode = hcm;
  }

  function sendMsg(height, width, triggerEvent, msg, targetOrigin) {
    function setTargetOrigin() {
      if (undefined === targetOrigin) {
        targetOrigin = targetOriginDefault;
      } else {
        log('Message targetOrigin: ' + targetOrigin);
      }
    }

    function sendToParent() {
      var size = height + ':' + width,
          message = myID + ':' + size + ':' + triggerEvent + (undefined !== msg ? ':' + msg : '');

      log('Sending message to host page (' + message + ')');
      target.postMessage(msgID + message, targetOrigin);
    }

    if (true === sendPermit) {
      setTargetOrigin();
      sendToParent();
    }
  }

  function receiver(event) {
    var processRequestFromParent = {
      init: function initFromParent() {
        initMsg = event.data;

        init();
        firstRun = false;
        setTimeout(function () {
          initLock = false;
        }, eventCancelTimer);
      },

      reset: function resetFromParent() {
        if (!initLock) {
          log('Page size reset by host page');
          triggerReset('resetPage');
        } else {
          log('Page reset ignored by init');
        }
      },

      resize: function resizeFromParent() {
        sendSize('resizeParent', 'Parent window requested size check');
      },

      moveToAnchor: function moveToAnchorF() {
        inPageLinks.findTarget(getData());
      },
      inPageLink: function inPageLinkF() {
        this.moveToAnchor();
      }, //Backward compatability

      pageInfo: function pageInfoFromParent() {
        var msgBody = getData();
        log('PageInfoFromParent called from parent: ' + msgBody);
        pageInfoCallback(JSON.parse(msgBody));
        log(' --');
      },

      message: function messageFromParent() {
        var msgBody = getData();

        log('MessageCallback called from parent: ' + msgBody);
        messageCallback(JSON.parse(msgBody));
        log(' --');
      }
    };

    function isMessageForUs() {
      return msgID === ('' + event.data).substr(0, msgIdLen); //''+ Protects against non-string messages
    }

    function getMessageType() {
      return event.data.split(']')[1].split(':')[0];
    }

    function getData() {
      return event.data.substr(event.data.indexOf(':') + 1);
    }

    function isMiddleTier() {
      return !( true && module.exports) && 'iFrameResize' in window || 'jQuery' in window && 'iFrameResize' in window.jQuery.prototype;
    }

    function isInitMsg() {
      //Test if this message is from a child below us. This is an ugly test, however, updating
      //the message format would break backwards compatibity.
      return event.data.split(':')[2] in { 'true': 1, 'false': 1 };
    }

    function callFromParent() {
      var messageType = getMessageType();

      if (messageType in processRequestFromParent) {
        processRequestFromParent[messageType]();
      } else if (!isMiddleTier() && !isInitMsg()) {
        warn('Unexpected message (' + event.data + ')');
      }
    }

    function processMessage() {
      if (false === firstRun) {
        callFromParent();
      } else if (isInitMsg()) {
        processRequestFromParent.init();
      } else {
        log('Ignored message of type "' + getMessageType() + '". Received before initialization.');
      }
    }

    if (isMessageForUs()) {
      processMessage();
    }
  }

  //Normally the parent kicks things off when it detects the iFrame has loaded.
  //If this script is async-loaded, then tell parent page to retry init.
  function chkLateLoaded() {
    if ('loading' !== document.readyState) {
      window.parent.postMessage('[iFrameResizerChild]Ready', '*');
    }
  }

  addEventListener(window, 'message', receiver);
  addEventListener(window, 'readystatechange', chkLateLoaded);
  chkLateLoaded();
})();
'filehash xy9ipz+vWw5GCtPe4t9rYpBnBTw=';

/***/ }),

/***/ "./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/iframeResizer.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/iframeResizer.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * File: iframeResizer.js
 * Desc: Force iframes to size to content.
 * Requires: iframeResizer.contentWindow.js to be loaded into the target frame.
 * Doc: https://github.com/davidjbradshaw/iframe-resizer
 * Author: David J. Bradshaw - dave@bradshaw.net
 * Contributor: Jure Mav - jure.mav@gmail.com
 * Contributor: Reed Dadoune - reed@dadoune.com
 */

;(function (undefined) {
  'use strict';

  if (typeof window === 'undefined') return; // don't run for server side render

  var count = 0,
      logEnabled = false,
      hiddenCheckEnabled = false,
      msgHeader = 'message',
      msgHeaderLen = msgHeader.length,
      msgId = '[iFrameSizer]',
      //Must match iframe msg ID
  msgIdLen = msgId.length,
      pagePosition = null,
      win = null,
      requestAnimationFrame = null,
      resetRequiredMethods = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 },
      settings = {},
      timer = null,
      logId = 'Host Page',
      defaults = {
    autoResize: true,
    bodyBackground: null,
    bodyMargin: null,
    bodyMarginV1: 8,
    bodyPadding: null,
    checkOrigin: true,
    inPageLinks: false,
    enablePublicMethods: true,
    heightCalculationMethod: 'bodyOffset',
    id: 'iFrameResizer',
    interval: 32,
    log: false,
    maxHeight: Infinity,
    maxWidth: Infinity,
    minHeight: 0,
    minWidth: 0,
    resizeFrom: 'parent',
    scrolling: false,
    sizeHeight: true,
    sizeWidth: false,
    warningTimeout: 5000,
    tolerance: 0,
    widthCalculationMethod: 'scroll',
    closedCallback: function closedCallback() {},
    initCallback: function initCallback() {},
    messageCallback: function messageCallback() {
      warn('MessageCallback function not defined');
    },
    resizedCallback: function resizedCallback() {},
    scrollCallback: function scrollCallback() {
      return true;
    }
  };

  function addEventListener(obj, evt, func) {
    /* istanbul ignore else */ // Not testable in PhantonJS
    if ('addEventListener' in win) {
      obj.addEventListener(evt, func, false);
    } else if ('attachEvent' in win) {
      //IE
      obj.attachEvent('on' + evt, func);
    }
  }

  function removeEventListener(el, evt, func) {
    /* istanbul ignore else */ // Not testable in phantonJS
    if ('removeEventListener' in win) {
      el.removeEventListener(evt, func, false);
    } else if ('detachEvent' in win) {
      //IE
      el.detachEvent('on' + evt, func);
    }
  }

  function setupRequestAnimationFrame() {
    var vendors = ['moz', 'webkit', 'o', 'ms'],
        x;

    // Remove vendor prefixing if prefixed and break early if not
    for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
      requestAnimationFrame = win[vendors[x] + 'RequestAnimationFrame'];
    }
    if (!requestAnimationFrame) {
      log('setup', 'RequestAnimationFrame not supported');
    }
  }

  function getMyID(iframeId) {
    var retStr = 'Host page: ' + iframeId;

    if (win.top !== win.self) {
      if (win.parentIFrame && win.parentIFrame.getId) {
        retStr = win.parentIFrame.getId() + ': ' + iframeId;
      } else {
        retStr = 'Nested host page: ' + iframeId;
      }
    }

    return retStr;
  }

  function formatLogHeader(iframeId) {
    return msgId + '[' + getMyID(iframeId) + ']';
  }

  function isLogEnabled(iframeId) {
    return settings[iframeId] ? settings[iframeId].log : logEnabled;
  }

  function log(iframeId, msg) {
    output('log', iframeId, msg, isLogEnabled(iframeId));
  }

  function info(iframeId, msg) {
    output('info', iframeId, msg, isLogEnabled(iframeId));
  }

  function warn(iframeId, msg) {
    output('warn', iframeId, msg, true);
  }

  function output(type, iframeId, msg, enabled) {
    if (true === enabled && 'object' === _typeof(win.console)) {
      console[type](formatLogHeader(iframeId), msg);
    }
  }

  function iFrameListener(event) {
    function resizeIFrame() {
      function resize() {
        setSize(messageData);
        setPagePosition(iframeId);
        callback('resizedCallback', messageData);
      }

      ensureInRange('Height');
      ensureInRange('Width');

      syncResize(resize, messageData, 'init');
    }

    function processMsg() {
      var data = msg.substr(msgIdLen).split(':');

      return {
        iframe: settings[data[0]] && settings[data[0]].iframe,
        id: data[0],
        height: data[1],
        width: data[2],
        type: data[3]
      };
    }

    function ensureInRange(Dimension) {
      var max = Number(settings[iframeId]['max' + Dimension]),
          min = Number(settings[iframeId]['min' + Dimension]),
          dimension = Dimension.toLowerCase(),
          size = Number(messageData[dimension]);

      log(iframeId, 'Checking ' + dimension + ' is in range ' + min + '-' + max);

      if (size < min) {
        size = min;
        log(iframeId, 'Set ' + dimension + ' to min value');
      }

      if (size > max) {
        size = max;
        log(iframeId, 'Set ' + dimension + ' to max value');
      }

      messageData[dimension] = '' + size;
    }

    function isMessageFromIFrame() {
      function checkAllowedOrigin() {
        function checkList() {
          var i = 0,
              retCode = false;

          log(iframeId, 'Checking connection is from allowed list of origins: ' + checkOrigin);

          for (; i < checkOrigin.length; i++) {
            if (checkOrigin[i] === origin) {
              retCode = true;
              break;
            }
          }
          return retCode;
        }

        function checkSingle() {
          var remoteHost = settings[iframeId] && settings[iframeId].remoteHost;
          log(iframeId, 'Checking connection is from: ' + remoteHost);
          return origin === remoteHost;
        }

        return checkOrigin.constructor === Array ? checkList() : checkSingle();
      }

      var origin = event.origin,
          checkOrigin = settings[iframeId] && settings[iframeId].checkOrigin;

      if (checkOrigin && '' + origin !== 'null' && !checkAllowedOrigin()) {
        throw new Error('Unexpected message received from: ' + origin + ' for ' + messageData.iframe.id + '. Message was: ' + event.data + '. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.');
      }

      return true;
    }

    function isMessageForUs() {
      return msgId === ('' + msg).substr(0, msgIdLen) && msg.substr(msgIdLen).split(':')[0] in settings; //''+Protects against non-string msg
    }

    function isMessageFromMetaParent() {
      //Test if this message is from a parent above us. This is an ugly test, however, updating
      //the message format would break backwards compatibity.
      var retCode = messageData.type in { 'true': 1, 'false': 1, 'undefined': 1 };

      if (retCode) {
        log(iframeId, 'Ignoring init message from meta parent page');
      }

      return retCode;
    }

    function getMsgBody(offset) {
      return msg.substr(msg.indexOf(':') + msgHeaderLen + offset);
    }

    function forwardMsgFromIFrame(msgBody) {
      log(iframeId, 'MessageCallback passed: {iframe: ' + messageData.iframe.id + ', message: ' + msgBody + '}');
      callback('messageCallback', {
        iframe: messageData.iframe,
        message: JSON.parse(msgBody)
      });
      log(iframeId, '--');
    }

    function getPageInfo() {
      var bodyPosition = win.document.body.getBoundingClientRect(),
          iFramePosition = messageData.iframe.getBoundingClientRect();

      return JSON.stringify({
        iframeHeight: iFramePosition.height,
        iframeWidth: iFramePosition.width,
        clientHeight: Math.max(win.document.documentElement.clientHeight, win.innerHeight || 0),
        clientWidth: Math.max(win.document.documentElement.clientWidth, win.innerWidth || 0),
        offsetTop: parseInt(iFramePosition.top - bodyPosition.top, 10),
        offsetLeft: parseInt(iFramePosition.left - bodyPosition.left, 10),
        scrollTop: win.pageYOffset,
        scrollLeft: win.pageXOffset
      });
    }

    function sendPageInfoToIframe(iframe, iframeId) {
      function debouncedTrigger() {
        trigger('Send Page Info', 'pageInfo:' + getPageInfo(), iframe, iframeId);
      }
      debounceFrameEvents(debouncedTrigger, 32, iframeId);
    }

    function startPageInfoMonitor() {
      function setListener(type, func) {
        function sendPageInfo() {
          if (settings[id]) {
            sendPageInfoToIframe(settings[id].iframe, id);
          } else {
            stop();
          }
        }

        ['scroll', 'resize'].forEach(function (evt) {
          log(id, type + evt + ' listener for sendPageInfo');
          func(win, evt, sendPageInfo);
        });
      }

      function stop() {
        setListener('Remove ', removeEventListener);
      }

      function start() {
        setListener('Add ', addEventListener);
      }

      var id = iframeId; //Create locally scoped copy of iFrame ID

      start();

      if (settings[id]) {
        settings[id].stopPageInfo = stop;
      }
    }

    function stopPageInfoMonitor() {
      if (settings[iframeId] && settings[iframeId].stopPageInfo) {
        settings[iframeId].stopPageInfo();
        delete settings[iframeId].stopPageInfo;
      }
    }

    function checkIFrameExists() {
      var retBool = true;

      if (null === messageData.iframe) {
        warn(iframeId, 'IFrame (' + messageData.id + ') not found');
        retBool = false;
      }
      return retBool;
    }

    function getElementPosition(target) {
      var iFramePosition = target.getBoundingClientRect();

      getPagePosition(iframeId);

      return {
        x: Math.floor(Number(iFramePosition.left) + Number(pagePosition.x)),
        y: Math.floor(Number(iFramePosition.top) + Number(pagePosition.y))
      };
    }

    function scrollRequestFromChild(addOffset) {
      /* istanbul ignore next */ //Not testable in Karma
      function reposition() {
        pagePosition = newPosition;
        scrollTo();
        log(iframeId, '--');
      }

      function calcOffset() {
        return {
          x: Number(messageData.width) + offset.x,
          y: Number(messageData.height) + offset.y
        };
      }

      function scrollParent() {
        if (win.parentIFrame) {
          win.parentIFrame['scrollTo' + (addOffset ? 'Offset' : '')](newPosition.x, newPosition.y);
        } else {
          warn(iframeId, 'Unable to scroll to requested position, window.parentIFrame not found');
        }
      }

      var offset = addOffset ? getElementPosition(messageData.iframe) : { x: 0, y: 0 },
          newPosition = calcOffset();

      log(iframeId, 'Reposition requested from iFrame (offset x:' + offset.x + ' y:' + offset.y + ')');

      if (win.top !== win.self) {
        scrollParent();
      } else {
        reposition();
      }
    }

    function scrollTo() {
      if (false !== callback('scrollCallback', pagePosition)) {
        setPagePosition(iframeId);
      } else {
        unsetPagePosition();
      }
    }

    function findTarget(location) {
      function jumpToTarget() {
        var jumpPosition = getElementPosition(target);

        log(iframeId, 'Moving to in page link (#' + hash + ') at x: ' + jumpPosition.x + ' y: ' + jumpPosition.y);
        pagePosition = {
          x: jumpPosition.x,
          y: jumpPosition.y
        };

        scrollTo();
        log(iframeId, '--');
      }

      function jumpToParent() {
        if (win.parentIFrame) {
          win.parentIFrame.moveToAnchor(hash);
        } else {
          log(iframeId, 'In page link #' + hash + ' not found and window.parentIFrame not found');
        }
      }

      var hash = location.split('#')[1] || '',
          hashData = decodeURIComponent(hash),
          target = win.document.getElementById(hashData) || win.document.getElementsByName(hashData)[0];

      if (target) {
        jumpToTarget();
      } else if (win.top !== win.self) {
        jumpToParent();
      } else {
        log(iframeId, 'In page link #' + hash + ' not found');
      }
    }

    function callback(funcName, val) {
      return chkCallback(iframeId, funcName, val);
    }

    function actionMsg() {

      if (settings[iframeId] && settings[iframeId].firstRun) firstRun();

      switch (messageData.type) {
        case 'close':
          if (settings[iframeId].closeRequestCallback) chkCallback(iframeId, 'closeRequestCallback', settings[iframeId].iframe);else closeIFrame(messageData.iframe);
          break;
        case 'message':
          forwardMsgFromIFrame(getMsgBody(6));
          break;
        case 'scrollTo':
          scrollRequestFromChild(false);
          break;
        case 'scrollToOffset':
          scrollRequestFromChild(true);
          break;
        case 'pageInfo':
          sendPageInfoToIframe(settings[iframeId] && settings[iframeId].iframe, iframeId);
          startPageInfoMonitor();
          break;
        case 'pageInfoStop':
          stopPageInfoMonitor();
          break;
        case 'inPageLink':
          findTarget(getMsgBody(9));
          break;
        case 'reset':
          resetIFrame(messageData);
          break;
        case 'init':
          resizeIFrame();
          callback('initCallback', messageData.iframe);
          break;
        default:
          resizeIFrame();
      }
    }

    function hasSettings(iframeId) {
      var retBool = true;

      if (!settings[iframeId]) {
        retBool = false;
        warn(messageData.type + ' No settings for ' + iframeId + '. Message was: ' + msg);
      }

      return retBool;
    }

    function iFrameReadyMsgReceived() {
      for (var iframeId in settings) {
        trigger('iFrame requested init', createOutgoingMsg(iframeId), win.document.getElementById(iframeId), iframeId);
      }
    }

    function firstRun() {
      if (settings[iframeId]) {
        settings[iframeId].firstRun = false;
      }
    }

    function clearWarningTimeout() {
      if (settings[iframeId]) {
        clearTimeout(settings[iframeId].msgTimeout);
        settings[iframeId].warningTimeout = 0;
      }
    }

    var msg = event.data,
        messageData = {},
        iframeId = null;

    if ('[iFrameResizerChild]Ready' === msg) {
      iFrameReadyMsgReceived();
    } else if (isMessageForUs()) {
      messageData = processMsg();
      iframeId = logId = messageData.id;
      if (settings[iframeId]) {
        settings[iframeId].loaded = true;
      }

      if (!isMessageFromMetaParent() && hasSettings(iframeId)) {
        log(iframeId, 'Received: ' + msg);

        if (checkIFrameExists() && isMessageFromIFrame()) {
          actionMsg();
        }
      }
    } else {
      info(iframeId, 'Ignored: ' + msg);
    }
  }

  function chkCallback(iframeId, funcName, val) {
    var func = null,
        retVal = null;

    if (settings[iframeId]) {
      func = settings[iframeId][funcName];

      if ('function' === typeof func) {
        retVal = func(val);
      } else {
        throw new TypeError(funcName + ' on iFrame[' + iframeId + '] is not a function');
      }
    }

    return retVal;
  }

  function removeIframeListeners(iframe) {
    var iframeId = iframe.id;
    delete settings[iframeId];
  }

  function closeIFrame(iframe) {
    var iframeId = iframe.id;
    log(iframeId, 'Removing iFrame: ' + iframeId);

    try {
      // Catch race condition error with React
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    } catch (e) {}

    chkCallback(iframeId, 'closedCallback', iframeId);
    log(iframeId, '--');
    removeIframeListeners(iframe);
  }

  function getPagePosition(iframeId) {
    if (null === pagePosition) {
      pagePosition = {
        x: win.pageXOffset !== undefined ? win.pageXOffset : win.document.documentElement.scrollLeft,
        y: win.pageYOffset !== undefined ? win.pageYOffset : win.document.documentElement.scrollTop
      };
      log(iframeId, 'Get page position: ' + pagePosition.x + ',' + pagePosition.y);
    }
  }

  function setPagePosition(iframeId) {
    if (null !== pagePosition) {
      win.scrollTo(pagePosition.x, pagePosition.y);
      log(iframeId, 'Set page position: ' + pagePosition.x + ',' + pagePosition.y);
      unsetPagePosition();
    }
  }

  function unsetPagePosition() {
    pagePosition = null;
  }

  function resetIFrame(messageData) {
    function reset() {
      setSize(messageData);
      trigger('reset', 'reset', messageData.iframe, messageData.id);
    }

    log(messageData.id, 'Size reset requested by ' + ('init' === messageData.type ? 'host page' : 'iFrame'));
    getPagePosition(messageData.id);
    syncResize(reset, messageData, 'reset');
  }

  function setSize(messageData) {
    function setDimension(dimension) {
      if (!messageData.id) {
        log('undefined', 'messageData id not set');
        return;
      }
      messageData.iframe.style[dimension] = messageData[dimension] + 'px';
      log(messageData.id, 'IFrame (' + iframeId + ') ' + dimension + ' set to ' + messageData[dimension] + 'px');
    }

    function chkZero(dimension) {
      //FireFox sets dimension of hidden iFrames to zero.
      //So if we detect that set up an event to check for
      //when iFrame becomes visible.

      /* istanbul ignore next */ //Not testable in PhantomJS
      if (!hiddenCheckEnabled && '0' === messageData[dimension]) {
        hiddenCheckEnabled = true;
        log(iframeId, 'Hidden iFrame detected, creating visibility listener');
        fixHiddenIFrames();
      }
    }

    function processDimension(dimension) {
      setDimension(dimension);
      chkZero(dimension);
    }

    var iframeId = messageData.iframe.id;

    if (settings[iframeId]) {
      if (settings[iframeId].sizeHeight) {
        processDimension('height');
      }
      if (settings[iframeId].sizeWidth) {
        processDimension('width');
      }
    }
  }

  function syncResize(func, messageData, doNotSync) {
    /* istanbul ignore if */ //Not testable in PhantomJS
    // use simple function invocation in FF as it's requestAnimationFrame is not working when called from hidden iframe
    if (doNotSync !== messageData.type && requestAnimationFrame && navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
      log(messageData.id, 'Requesting animation frame');
      requestAnimationFrame(func);
    } else {
      func();
    }
  }

  function trigger(calleeMsg, msg, iframe, id, noResponseWarning) {
    function postMessageToIFrame() {
      var target = settings[id] && settings[id].targetOrigin;
      log(id, '[' + calleeMsg + '] Sending msg to iframe[' + id + '] (' + msg + ') targetOrigin: ' + target);
      iframe.contentWindow.postMessage(msgId + msg, target);
    }

    function iFrameNotFound() {
      warn(id, '[' + calleeMsg + '] IFrame(' + id + ') not found');
    }

    function chkAndSend() {
      if (iframe && 'contentWindow' in iframe && null !== iframe.contentWindow) {
        //Null test for PhantomJS
        postMessageToIFrame();
      } else {
        iFrameNotFound();
      }
    }

    function warnOnNoResponse() {
      function warning() {
        if (settings[id] && !settings[id].loaded && !errorShown) {
          errorShown = true;
          warn(id, 'IFrame has not responded within ' + settings[id].warningTimeout / 1000 + ' seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.');
        }
      }

      if (!!noResponseWarning && settings[id] && !!settings[id].warningTimeout) {
        settings[id].msgTimeout = setTimeout(warning, settings[id].warningTimeout);
      }
    }

    var errorShown = false;

    id = id || iframe.id;

    if (settings[id]) {
      chkAndSend();
      warnOnNoResponse();
    }
  }

  function createOutgoingMsg(iframeId) {
    return iframeId + ':' + settings[iframeId].bodyMarginV1 + ':' + settings[iframeId].sizeWidth + ':' + settings[iframeId].log + ':' + settings[iframeId].interval + ':' + settings[iframeId].enablePublicMethods + ':' + settings[iframeId].autoResize + ':' + settings[iframeId].bodyMargin + ':' + settings[iframeId].heightCalculationMethod + ':' + settings[iframeId].bodyBackground + ':' + settings[iframeId].bodyPadding + ':' + settings[iframeId].tolerance + ':' + settings[iframeId].inPageLinks + ':' + settings[iframeId].resizeFrom + ':' + settings[iframeId].widthCalculationMethod;
  }

  function setupIFrame(iframe, options) {
    function setLimits() {
      function addStyle(style) {
        if (Infinity !== settings[iframeId][style] && 0 !== settings[iframeId][style]) {
          iframe.style[style] = settings[iframeId][style] + 'px';
          log(iframeId, 'Set ' + style + ' = ' + settings[iframeId][style] + 'px');
        }
      }

      function chkMinMax(dimension) {
        if (settings[iframeId]['min' + dimension] > settings[iframeId]['max' + dimension]) {
          throw new Error('Value for min' + dimension + ' can not be greater than max' + dimension);
        }
      }

      chkMinMax('Height');
      chkMinMax('Width');

      addStyle('maxHeight');
      addStyle('minHeight');
      addStyle('maxWidth');
      addStyle('minWidth');
    }

    function newId() {
      var id = options && options.id || defaults.id + count++;
      if (null !== win.document.getElementById(id)) {
        id = id + count++;
      }
      return id;
    }

    function ensureHasId(iframeId) {
      logId = iframeId;
      if ('' === iframeId) {
        iframe.id = iframeId = newId();
        logEnabled = (options || {}).log;
        logId = iframeId;
        log(iframeId, 'Added missing iframe ID: ' + iframeId + ' (' + iframe.src + ')');
      }

      return iframeId;
    }

    function setScrolling() {
      log(iframeId, 'IFrame scrolling ' + (settings[iframeId] && settings[iframeId].scrolling ? 'enabled' : 'disabled') + ' for ' + iframeId);
      iframe.style.overflow = false === (settings[iframeId] && settings[iframeId].scrolling) ? 'hidden' : 'auto';
      switch (settings[iframeId] && settings[iframeId].scrolling) {
        case 'omit':
          break;
        case true:
          iframe.scrolling = 'yes';
          break;
        case false:
          iframe.scrolling = 'no';
          break;
        default:
          iframe.scrolling = settings[iframeId] ? settings[iframeId].scrolling : 'no';
      }
    }

    //The V1 iFrame script expects an int, where as in V2 expects a CSS
    //string value such as '1px 3em', so if we have an int for V2, set V1=V2
    //and then convert V2 to a string PX value.
    function setupBodyMarginValues() {
      if ('number' === typeof (settings[iframeId] && settings[iframeId].bodyMargin) || '0' === (settings[iframeId] && settings[iframeId].bodyMargin)) {
        settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin;
        settings[iframeId].bodyMargin = '' + settings[iframeId].bodyMargin + 'px';
      }
    }

    function checkReset() {
      // Reduce scope of firstRun to function, because IE8's JS execution
      // context stack is borked and this value gets externally
      // changed midway through running this function!!!
      var firstRun = settings[iframeId] && settings[iframeId].firstRun,
          resetRequertMethod = settings[iframeId] && settings[iframeId].heightCalculationMethod in resetRequiredMethods;

      if (!firstRun && resetRequertMethod) {
        resetIFrame({ iframe: iframe, height: 0, width: 0, type: 'init' });
      }
    }

    function setupIFrameObject() {
      if (Function.prototype.bind && settings[iframeId]) {
        //Ignore unpolyfilled IE8.
        settings[iframeId].iframe.iFrameResizer = {

          close: closeIFrame.bind(null, settings[iframeId].iframe),

          removeListeners: removeIframeListeners.bind(null, settings[iframeId].iframe),

          resize: trigger.bind(null, 'Window resize', 'resize', settings[iframeId].iframe),

          moveToAnchor: function moveToAnchor(anchor) {
            trigger('Move to anchor', 'moveToAnchor:' + anchor, settings[iframeId].iframe, iframeId);
          },

          sendMessage: function sendMessage(message) {
            message = JSON.stringify(message);
            trigger('Send Message', 'message:' + message, settings[iframeId].iframe, iframeId);
          }
        };
      }
    }

    //We have to call trigger twice, as we can not be sure if all
    //iframes have completed loading when this code runs. The
    //event listener also catches the page changing in the iFrame.
    function init(msg) {
      function iFrameLoaded() {
        trigger('iFrame.onload', msg, iframe, undefined, true);
        checkReset();
      }

      addEventListener(iframe, 'load', iFrameLoaded);
      trigger('init', msg, iframe, undefined, true);
    }

    function checkOptions(options) {
      if ('object' !== (typeof options === 'undefined' ? 'undefined' : _typeof(options))) {
        throw new TypeError('Options is not an object');
      }
    }

    function copyOptions(options) {
      for (var option in defaults) {
        if (defaults.hasOwnProperty(option)) {
          settings[iframeId][option] = options.hasOwnProperty(option) ? options[option] : defaults[option];
        }
      }
    }

    function getTargetOrigin(remoteHost) {
      return '' === remoteHost || 'file://' === remoteHost ? '*' : remoteHost;
    }

    function processOptions(options) {
      options = options || {};
      settings[iframeId] = {
        firstRun: true,
        iframe: iframe,
        remoteHost: iframe.src.split('/').slice(0, 3).join('/')
      };

      checkOptions(options);
      copyOptions(options);

      if (settings[iframeId]) {
        settings[iframeId].targetOrigin = true === settings[iframeId].checkOrigin ? getTargetOrigin(settings[iframeId].remoteHost) : '*';
      }
    }

    function beenHere() {
      return iframeId in settings && 'iFrameResizer' in iframe;
    }

    var iframeId = ensureHasId(iframe.id);

    if (!beenHere()) {
      processOptions(options);
      setScrolling();
      setLimits();
      setupBodyMarginValues();
      init(createOutgoingMsg(iframeId));
      setupIFrameObject();
    } else {
      warn(iframeId, 'Ignored iFrame, already setup.');
    }
  }

  function debouce(fn, time) {
    if (null === timer) {
      timer = setTimeout(function () {
        timer = null;
        fn();
      }, time);
    }
  }

  var frameTimer = {};
  function debounceFrameEvents(fn, time, frameId) {
    if (!frameTimer[frameId]) {
      frameTimer[frameId] = setTimeout(function () {
        frameTimer[frameId] = null;
        fn();
      }, time);
    }
  }

  /* istanbul ignore next */ //Not testable in PhantomJS
  function fixHiddenIFrames() {
    function checkIFrames() {
      function checkIFrame(settingId) {
        function chkDimension(dimension) {
          return '0px' === (settings[settingId] && settings[settingId].iframe.style[dimension]);
        }

        function isVisible(el) {
          return null !== el.offsetParent;
        }

        if (settings[settingId] && isVisible(settings[settingId].iframe) && (chkDimension('height') || chkDimension('width'))) {
          trigger('Visibility change', 'resize', settings[settingId].iframe, settingId);
        }
      }

      for (var settingId in settings) {
        checkIFrame(settingId);
      }
    }

    function mutationObserved(mutations) {
      log('window', 'Mutation observed: ' + mutations[0].target + ' ' + mutations[0].type);
      debouce(checkIFrames, 16);
    }

    function createMutationObserver() {
      var target = win.document.querySelector('body'),
          config = {
        attributes: true,
        attributeOldValue: false,
        characterData: true,
        characterDataOldValue: false,
        childList: true,
        subtree: true
      },
          observer = new MutationObserver(mutationObserved);

      observer.observe(target, config);
    }

    var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;

    if (MutationObserver) createMutationObserver();
  }

  function resizeIFrames(event) {
    function resize() {
      sendTriggerMsg('Window ' + event, 'resize');
    }

    log('window', 'Trigger event: ' + event);
    debouce(resize, 16);
  }

  /* istanbul ignore next */ //Not testable in PhantomJS
  function tabVisible() {
    function resize() {
      sendTriggerMsg('Tab Visable', 'resize');
    }

    if ('hidden' !== win.document.visibilityState) {
      log('document', 'Trigger event: Visiblity change');
      debouce(resize, 16);
    }
  }

  function sendTriggerMsg(eventName, event) {
    function isIFrameResizeEnabled(iframeId) {
      return settings[iframeId] && 'parent' === settings[iframeId].resizeFrom && settings[iframeId].autoResize && !settings[iframeId].firstRun;
    }

    for (var iframeId in settings) {
      if (isIFrameResizeEnabled(iframeId)) {
        trigger(eventName, event, win.document.getElementById(iframeId), iframeId);
      }
    }
  }

  function setupEventListeners() {
    addEventListener(win, 'message', iFrameListener);

    addEventListener(win, 'resize', function () {
      resizeIFrames('resize');
    });

    addEventListener(win.document, 'visibilitychange', tabVisible);
    addEventListener(win.document, '-webkit-visibilitychange', tabVisible); //Andriod 4.4
    addEventListener(win, 'focusin', function () {
      resizeIFrames('focus');
    }); //IE8-9
    addEventListener(win, 'focus', function () {
      resizeIFrames('focus');
    });
  }

  function factory() {
    function init(options, element) {
      function chkType() {
        if (!element.tagName) {
          throw new TypeError('Object is not a valid DOM element');
        } else if ('IFRAME' !== element.tagName.toUpperCase()) {
          throw new TypeError('Expected <IFRAME> tag, found <' + element.tagName + '>');
        }
      }

      if (element) {
        chkType();
        setupIFrame(element, options);
        iFrames.push(element);
      }
    }

    function warnDeprecatedOptions(options) {
      if (options && options.enablePublicMethods) {
        warn('enablePublicMethods option has been removed, public methods are now always available in the iFrame');
      }
    }

    var iFrames;

    return function iFrameResizeF(options, target, context) {
      if (!context) {
        context = window;
      }
      win = context;
      requestAnimationFrame = context.requestAnimationFrame, setupRequestAnimationFrame();
      setupEventListeners();

      iFrames = []; //Only return iFrames past in on this call

      warnDeprecatedOptions(options);

      switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
        case 'undefined':
        case 'string':
          Array.prototype.forEach.call(win.document.querySelectorAll(target || 'iframe'), init.bind(undefined, options));
          break;
        case 'object':
          init(options, target);
          break;
        default:
          throw new TypeError('Unexpected data type (' + (typeof target === 'undefined' ? 'undefined' : _typeof(target)) + ')');
      }

      return iFrames;
    };
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();
'filehash nRZRdd384vayjdEg2lpSmMf6JVk=';

/***/ }),

/***/ "./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.iframeResizer = __webpack_require__(/*! ./iframeResizer */ "./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/iframeResizer.js");
exports.iframeResizerContentWindow = __webpack_require__(/*! ./iframeResizer.contentWindow */ "./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/iframeResizer.contentWindow.js");
'filehash wuWr9znDIv1lpP3T7q1tMDGIWhk=';

/***/ }),

/***/ "./node_modules/@audienzz/preact-friendly-frame/src/FrameResizer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@audienzz/preact-friendly-frame/src/FrameResizer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preactCompat = __webpack_require__(/*! preact-compat */ "../../node_modules/preact-compat/dist/preact-compat.es.js");

var _preactCompat2 = _interopRequireDefault(_preactCompat);

var _propTypes = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iframeResizer = __webpack_require__(/*! @audienzz/iframe-resizer */ "./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrameResizer = function (_React$Component) {
  _inherits(FrameResizer, _React$Component);

  function FrameResizer() {
    _classCallCheck(this, FrameResizer);

    return _possibleConstructorReturn(this, (FrameResizer.__proto__ || Object.getPrototypeOf(FrameResizer)).apply(this, arguments));
  }

  _createClass(FrameResizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var code = __webpack_require__(/*! raw-loader!@audienzz/iframe-resizer/js/iframeResizer.contentWindow.min */ "../../node_modules/raw-loader/index.js!./node_modules/@audienzz/preact-friendly-frame/node_modules/@audienzz/iframe-resizer/js/iframeResizer.contentWindow.min.js"); // eslint-disable-line
      var script = window.document.createElement('script');
      script.innerHTML = code;
      this.props.frame.contentDocument.head.appendChild(script);

      setTimeout(function () {
        (0, _iframeResizer.iframeResizer)(_this2.props.config, _this2.props.frame);
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children[0];
    }
  }]);

  return FrameResizer;
}(_preactCompat2.default.Component);

FrameResizer.propTypes = {
  frame: _propTypes2.default.instanceOf(window.Element).isRequired,
  config: _propTypes2.default.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: _propTypes2.default.node.isRequired
};

exports.default = FrameResizer;
'filehash BGF2PeoF6pwpm0DT/wWfa0h1Ni4=';

/***/ }),

/***/ "./node_modules/@audienzz/preact-friendly-frame/src/FriendlyFrame.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@audienzz/preact-friendly-frame/src/FriendlyFrame.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preactCompat = __webpack_require__(/*! preact-compat */ "../../node_modules/preact-compat/dist/preact-compat.es.js");

var _preactCompat2 = _interopRequireDefault(_preactCompat);

var _preact = __webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.mjs");

var _preactPortal = __webpack_require__(/*! preact-portal */ "../../node_modules/preact-portal/dist/preact-portal.js");

var _preactPortal2 = _interopRequireDefault(_preactPortal);

var _propTypes = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FriendlyFrame = function (_React$Component) {
  _inherits(FriendlyFrame, _React$Component);

  function FriendlyFrame(props) {
    _classCallCheck(this, FriendlyFrame);

    var _this = _possibleConstructorReturn(this, (FriendlyFrame.__proto__ || Object.getPrototypeOf(FriendlyFrame)).call(this, props));

    _this.saveRef = function (node) {
      if (node) {
        var onload = function onload() {
          if (_this.loaded) {
            return;
          }
          _this.loaded = true;

          _this.setState(function (state) {
            return _extends({}, state, {
              node: node
            });
          });
        };

        // safari
        var timer = setInterval(function () {
          var doc = node.contentDocument || node.contentWindow;
          if (doc.readyState === 'complete') {
            clearInterval(timer);
            onload();
          }
        }, 1000);

        // all browsers
        node.onload = onload; // eslint-disable-line no-param-reassign
      }
    };

    _this.loaded = false;
    _this.state = {};
    return _this;
  }

  _createClass(FriendlyFrame, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          id = _props.id,
          props = _objectWithoutProperties(_props, ['children', 'id']);

      return (0, _preact.h)(
        'div',
        null,
        (0, _preact.h)('iframe', _extends({ // eslint-disable-line jsx-a11y/iframe-has-title
          id: id,
          ref: this.saveRef
        }, props)),
        this.state.node && (0, _preact.h)(
          _preactPortal2.default,
          {
            into: this.state.node.contentDocument.body
            // hack fix for IE11: without ref portal keeps reappending the content
            , ref: function ref(_ref) {
              _this2.portal = _ref;
            }
          },
          children({ node: this.state.node })
        )
      );
    }
  }]);

  return FriendlyFrame;
}(_preactCompat2.default.Component);

FriendlyFrame.defaultProps = {
  id: 'f' + Math.random().toString(36).substring(7),
  visible: true
};

FriendlyFrame.propTypes = {
  id: _propTypes2.default.string,
  visible: _propTypes2.default.bool,
  children: _propTypes2.default.func.isRequired
};

exports.default = FriendlyFrame;
'filehash cRlHQ/r2v37wvtZERhwqksLMWqk=';

/***/ }),

/***/ "./node_modules/@audienzz/preact-friendly-frame/src/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@audienzz/preact-friendly-frame/src/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameResizer = exports.FriendlyFrame = undefined;

var _FriendlyFrame = __webpack_require__(/*! ./FriendlyFrame */ "./node_modules/@audienzz/preact-friendly-frame/src/FriendlyFrame.js");

var _FriendlyFrame2 = _interopRequireDefault(_FriendlyFrame);

var _FrameResizer = __webpack_require__(/*! ./FrameResizer */ "./node_modules/@audienzz/preact-friendly-frame/src/FrameResizer.js");

var _FrameResizer2 = _interopRequireDefault(_FrameResizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FriendlyFrame = _FriendlyFrame2.default;
exports.FrameResizer = _FrameResizer2.default;
'filehash 9W7bVQbOQEXmUPxAA60aFXwscb0=';

/***/ }),

/***/ "./src/components/Notice/index.js":
/*!****************************************!*\
  !*** ./src/components/Notice/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = __webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.mjs");

var _propTypes = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _style = __webpack_require__(/*! ./style.scss */ "./src/components/Notice/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _preact.h)(
  'style',
  null,
  _style2.default
);

var _ref3 = (0, _preact.h)(
  'span',
  null,
  'Bitte erlauben Sie uns, Ihnen Werbung zu zeigen.'
);

var _ref4 = (0, _preact.h)(
  'span',
  null,
  'Um weiterzulesen, erlauben Sie uns bitte, Ihnen Werbung zu zeigen.'
);

var _ref5 = (0, _preact.h)(
  'span',
  null,
  'Um die Arbeit unserer Journalisten zu finanzieren, sind Erl\xF6se aus Werbung wichtig. Darum bitten wir Sie, die NZZ in Ihrem Ad-Blocker als Ausnahme hinzuzuf\xFCgen oder sich anzumelden.'
);

var _ref6 = (0, _preact.h)(
  'span',
  null,
  'Um die Arbeit unserer Journalisten zu finanzieren, sind Erl\xF6se aus Werbung wichtig. Darum bitten wir Sie, \xABNZZ Bellevue\xBB in Ihrem Ad-Blocker als Ausnahme hinzuzuf\xFCgen oder sich anzumelden.'
);

var _ref7 = (0, _preact.h)(
  'span',
  null,
  'Um die Arbeit unserer Journalisten zu finanzieren, sind Erl\xF6se aus Werbung wichtig. Darum bitten wir Sie, Luzernerzeitung.ch in Ihrem Ad-Blocker als Ausnahme hinzuzuf\xFCgen oder sich anzumelden.'
);

var _ref8 = (0, _preact.h)(
  'span',
  null,
  'Um die Arbeit unserer Journalisten zu finanzieren, sind Erl\xF6se aus Werbung wichtig. Darum bitten wir Sie, Tagblatt.ch in Ihrem Ad-Blocker als Ausnahme hinzuzuf\xFCgen oder sich anzumelden.'
);

var _ref9 = (0, _preact.h)(
  'span',
  null,
  'oder'
);

var _ref10 = (0, _preact.h)(
  'p',
  { className: 'notice__description' },
  'Vielen Dank, dass Sie helfen, unseren Journalismus zu finanzieren. Wir w\xFCnschen Ihnen viel Vergn\xFCgen beim Lesen.'
);

var Notice = function Notice(_ref) {
  var siteClass = _ref.siteClass,
      wasDetected = _ref.wasDetected,
      siteTitle = _ref.siteTitle,
      deactivate = _ref.deactivate,
      niceReminder = _ref.niceReminder,
      links = _ref.links;
  return (0, _preact.h)(
    'div',
    { className: (0, _classnames2.default)('notice', siteClass, { 'notice-overlay': wasDetected && !niceReminder }, { 'notice-default': wasDetected && niceReminder }, { 'notice-thanks': !wasDetected }), 'data-iframe-width': '1', 'data-iframe-height': '1' },
    (0, _preact.h)(
      'style',
      null,
      siteClass === 'default' && '\n        @font-face {\n          font-weight: 100;\n          font-family: nzz-sans-serif;\n          font-display: swap;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/GT-America-Standard-Regular.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/GT-America-Standard-Regular.woff) format("woff")\n        }\n\n        @font-face {\n          font-weight: 500;\n          font-family: nzz-sans-serif;\n          font-display: swap;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/GT-America-Standard-Medium.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/GT-America-Standard-Medium.woff) format("woff")\n        }\n\n        @font-face {\n          font-weight: 300;\n          font-family: nzz-serif;\n          font-display: swap;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-regular.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-regular.woff) format("woff")\n        }\n\n        @font-face {\n          font-weight: 300;\n          font-style: italic;\n          font-family: nzz-serif;\n          font-display: swap;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-regularitalic.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-regularitalic.woff) format("woff")\n        }\n\n        @font-face {\n          font-weight: 500;\n          font-family: nzz-serif;\n          font-display: swap;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-bold.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-bold.woff) format("woff")\n        }\n\n        @font-face {\n          font-weight: 500;\n          font-family: nzz-serif-alt;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumdisplay-medium.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumdisplay-medium.woff) format("woff")\n        }\n      ',
      siteClass === 'nzz' && '\n        @font-face {\n          font-weight: 100;\n          font-family: nzz-sans-serif;\n          font-display: swap;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/GT-America-Standard-Regular.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/GT-America-Standard-Regular.woff) format("woff")\n        }\n\n        @font-face {\n          font-weight: 500;\n          font-family: nzz-sans-serif;\n          font-display: swap;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/GT-America-Standard-Medium.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/GT-America-Standard-Medium.woff) format("woff")\n        }\n\n        @font-face {\n          font-weight: 300;\n          font-family: nzz-serif;\n          font-display: swap;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-regular.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-regular.woff) format("woff")\n        }\n\n        @font-face {\n          font-weight: 300;\n          font-style: italic;\n          font-family: nzz-serif;\n          font-display: swap;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-regularitalic.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-regularitalic.woff) format("woff")\n        }\n\n        @font-face {\n          font-weight: 500;\n          font-family: nzz-serif;\n          font-display: swap;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-bold.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumpro-bold.woff) format("woff")\n        }\n\n        @font-face {\n          font-weight: 500;\n          font-family: nzz-serif-alt;\n          src: url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumdisplay-medium.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-niobe/assets/fonts/pensumdisplay-medium.woff) format("woff")\n        }\n      ',
      siteClass === 'bellevue' && '\n        @font-face {\n          font-weight: 500;\n          font-family: BeausiteSlick-Bold;\n          src: url(https://assets.static-nzz.ch/bellevue/assets/fonts/Beausite/BeausiteSlick-Bold.woff2) format("woff2"), url(https://assets.static-nzz.ch/bellevue/assets/fonts/Beausite/BeausiteSlick-Bold.woff) format("woff")\n        }\n        @font-face {\n          font-weight: 400;\n          font-family: Damien-Regular;\n          src: url(https://assets.static-nzz.ch/bellevue/assets/fonts/Damien/Damien_Text_Regular.woff2) format("woff2"), url(https://assets.static-nzz.ch/bellevue/assets/fonts/Damien/Damien_Text_Regular.woff) format("woff")\n        }\n      ',
      (siteClass === 'luzernerzeitung' || siteClass === 'tagblatt') && '\n         @font-face {\n            font-weight: bold;\n            font-family: nzz-sans-serif;\n            src: url(https://assets.static-nzz.ch/nzz-regio/assets/fonts/tenso-bold.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-regio/assets/fonts/tenso-bold.woff) format("woff")\n          }\n         @font-face {\n            font-weight: normal;\n            font-family: nzz-sans-serif;\n            src: url(https://assets.static-nzz.ch/nzz-regio/assets/fonts/tenso.woff2) format("woff2"), url(https://assets.static-nzz.ch/nzz-regio/assets/fonts/tenso.woff) format("woff")\n          }\n      '
    ),
    _ref2,
    !!wasDetected && (0, _preact.h)(
      'div',
      { className: 'notice__body' },
      (0, _preact.h)(
        'h1',
        { className: 'notice__title' },
        niceReminder ? _ref3 : _ref4
      ),
      (0, _preact.h)(
        'p',
        { className: 'notice__description' },
        niceReminder ? (0, _preact.h)(
          'span',
          null,
          'Um die Arbeit unserer Journalisten zu finanzieren, sind Erl\xF6se aus Werbung wichtig. Darum bitten wir Sie,\xA0',
          siteTitle,
          '\xA0in Ihrem Ad-Blocker als Ausnahme hinzuzuf\xFCgen oder sich anzumelden.'
        ) : (0, _preact.h)(
          'span',
          null,
          siteClass === 'default' && (0, _preact.h)(
            'span',
            null,
            'Sie sehen diese Seite, weil Sie einen Ad-Blocker eingeschaltet haben. Um die Arbeit unserer Journalistinnen und Journalisten zu finanzieren, sind Erl\xF6se aus Werbung wichtig. Darum bitten wir Sie,\xA0',
            siteTitle,
            '\xA0in Ihrem Ad-Blocker als Ausnahme hinzuzuf\xFCgen oder sich zu registieren, um weiterlesen zu k\xF6nnen. Sie haben schon ein Benutzerkonto?'
          ),
          siteClass === 'nzz' && _ref5,
          siteClass === 'bellevue' && _ref6,
          siteClass === 'luzernerzeitung' && _ref7,
          siteClass === 'tagblatt' && _ref8
        )
      ),
      (0, _preact.h)(
        'div',
        { className: 'notice__footer' },
        (0, _preact.h)(
          'a',
          {
            className: 'mobile-hidden notice__footer--deactivate',
            target: '_top',
            href: niceReminder ? links.v1.desktop.deactivate : links.v2.desktop.deactivate
          },
          'Ad-Blocker anpassen'
        ),
        (0, _preact.h)(
          'a',
          {
            className: 'mobile-visible notice__footer--deactivate',
            target: '_top',
            href: niceReminder ? links.v1.mobile.deactivate : links.v2.mobile.deactivate
          },
          'Ad-Blocker anpassen'
        ),
        _ref9,
        (0, _preact.h)(
          'a',
          {
            className: 'mobile-hidden notice__footer--create',
            target: '_top',
            href: niceReminder ? links.v1.desktop.createAccount : links.v2.desktop.createAccount
          },
          'Benutzerkonto erstellen'
        ),
        (0, _preact.h)(
          'a',
          {
            className: 'mobile-visible notice__footer--create',
            target: '_top',
            href: niceReminder ? links.v1.mobile.createAccount : links.v2.mobile.createAccount
          },
          'Benutzerkonto erstellen'
        )
      ),
      (0, _preact.h)(
        'p',
        { className: 'notice__footer-description' },
        'Sie haben schon ein Benutzerkonto?\xA0',
        (0, _preact.h)(
          'a',
          {
            className: 'mobile-hidden',
            target: '_top',
            href: niceReminder ? links.v1.desktop.signIn : links.v2.desktop.signIn
          },
          'Direkt anmelden'
        ),
        (0, _preact.h)(
          'a',
          {
            className: 'mobile-visible',
            target: '_top',
            href: niceReminder ? links.v1.mobile.signIn : links.v2.mobile.signIn
          },
          'Direkt anmelden'
        )
      )
    ),
    !wasDetected && (0, _preact.h)(
      'div',
      { className: 'notice__body-was-found' },
      _ref10,
      (0, _preact.h)(
        'div',
        null,
        (0, _preact.h)('span', {
          tabIndex: 0,
          role: 'button',
          className: 'notice__remove',
          onClick: deactivate
        })
      )
    )
  );
};

Notice.defaultProps = {
  siteTitle: 'SITE TITLE',
  siteClass: 'default',
  wasDetected: 'false'
};

Notice.propTypes = {
  siteTitle: _propTypes2.default.string,
  siteClass: _propTypes2.default.string,
  wasDetected: _propTypes2.default.bool,
  deactivate: _propTypes2.default.func.isRequired,
  niceReminder: _propTypes2.default.number.isRequired,
  links: _propTypes2.default.object.isRequired // eslint-disable-line react/forbid-prop-types
};

exports.default = Notice;
'filehash I5aeN9tSrmNnOEJ1seYRP9wDTIE=';

/***/ }),

/***/ "./src/components/Notice/style.scss":
/*!******************************************!*\
  !*** ./src/components/Notice/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--5-3!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss */ "../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js!./src/components/Notice/style.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/components/Overlay/index.js":
/*!*****************************************!*\
  !*** ./src/components/Overlay/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _preactCompat = __webpack_require__(/*! preact-compat */ "../../node_modules/preact-compat/dist/preact-compat.es.js");

var _preactCompat2 = _interopRequireDefault(_preactCompat);

var _preact = __webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.mjs");

var _style = __webpack_require__(/*! ./style.scss */ "./src/components/Overlay/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _preact.h)(
  'style',
  null,
  _style2.default
);

var Overlay = function (_React$Component) {
  (0, _inherits3.default)(Overlay, _React$Component);

  function Overlay() {
    (0, _classCallCheck3.default)(this, Overlay);
    return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  (0, _createClass3.default)(Overlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var globalStyle = window.document.createElement('style');
      globalStyle.innerHTML = 'html,body { overflow: hidden; } .articlebar, .header__holder > header.header { z-index: 1; }';
      window.top.document.head.appendChild(globalStyle);
    }
  }, {
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);
  return Overlay;
}(_preactCompat2.default.Component);

exports.default = Overlay;
'filehash dzbAWLApM23TfxfdZE4oVLm3Kkk=';

/***/ }),

/***/ "./src/components/Overlay/style.scss":
/*!*******************************************!*\
  !*** ./src/components/Overlay/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--5-3!../../../../../node_modules/sass-loader/lib/loader.js!./style.scss */ "../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js!./src/components/Overlay/style.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/detector.js":
/*!*************************!*\
  !*** ./src/detector.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var version = '1.0'; /* eslint-disable */
// ===============================================
// AdBlock detector
//
// Attempts to detect the presence of Ad Blocker software and notify listener of its existence.
// Copyright (c) 2017 IAB
//
// The BSD-3 License
// Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
// 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
// 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// ===============================================


var ofs = 'offset',
    cl = 'client';
var noop = function noop() {};

var testedOnce = false;
var testExecuting = false;

var isOldIEevents = window.addEventListener === undefined;

/**
* Options set with default options initialized
*
*/
var _options = {
  loopDelay: 50,
  maxLoop: 5,
  debug: true,
  found: noop, // function to fire when adblock detected
  notfound: noop, // function to fire if adblock not detected after testing
  complete: noop // function to fire after testing completes, passing result as parameter
};

function parseAsJson(data) {
  var result, fnData;
  try {
    result = JSON.parse(data);
  } catch (ex) {
    try {
      fnData = new Function("return " + data);
      result = fnData();
    } catch (ex) {
      log('Failed secondary JSON parse', true);
    }
  }

  return result;
}

/**
* Ajax helper object to download external scripts.
* Initialize object with an options object
* Ex:
  {
    url : 'http://example.org/url_to_download',
    method: 'POST|GET',
    success: callback_function,
    fail:  callback_function
  }		
*/
var AjaxHelper = function AjaxHelper(opts) {
  var xhr = new XMLHttpRequest();

  this.success = opts.success || noop;
  this.fail = opts.fail || noop;
  var me = this;

  var method = opts.method || 'get';

  /**
  * Abort the request
  */
  this.abort = function () {
    try {
      xhr.abort();
    } catch (ex) {}
  };

  function stateChange(vals) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        me.success(xhr.response);
      } else {
        // failed
        me.fail(xhr.status);
      }
    }
  }

  xhr.onreadystatechange = stateChange;

  function start() {
    xhr.open(method, opts.url, true);
    xhr.send();
  }

  start();
};

/**
* Object tracking the various block lists
*/
var BlockListTracker = function BlockListTracker() {
  var me = this;
  var externalBlocklistData = {};

  /**
  * Add a new external URL to track
  */
  this.addUrl = function (url) {
    externalBlocklistData[url] = {
      url: url,
      state: 'pending',
      format: null,
      data: null,
      result: null
    };

    return externalBlocklistData[url];
  };

  /**
  * Loads a block list definition
  */
  this.setResult = function (urlKey, state, data) {
    var obj = externalBlocklistData[urlKey];
    if (obj == null) {
      obj = this.addUrl(urlKey);
    }

    obj.state = state;
    if (data == null) {
      obj.result = null;
      return;
    }

    if (typeof data === 'string') {
      try {
        data = parseAsJson(data);
        obj.format = 'json';
      } catch (ex) {
        obj.format = 'easylist';
        // parseEasyList(data);
      }
    }
    obj.data = data;

    return obj;
  };
};

var listeners = []; // event response listeners
var baitNode = null;
var quickBait = {
  cssClass: 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links'
};
var baitTriggers = {
  nullProps: [ofs + 'Parent'],
  zeroProps: []
};

baitTriggers.zeroProps = [ofs + 'Height', ofs + 'Left', ofs + 'Top', ofs + 'Width', ofs + 'Height', cl + 'Height', cl + 'Width'];

// result object
var exeResult = {
  quick: null,
  remote: null
};

var findResult = null; // result of test for ad blocker

var timerIds = {
  test: 0,
  download: 0
};

function isFunc(fn) {
  return typeof fn == 'function';
}

/**
* Make a DOM element
*/
function makeEl(tag, attributes) {
  var k,
      v,
      el,
      attr = attributes;
  var d = document;

  el = d.createElement(tag);

  if (attr) {
    for (k in attr) {
      if (attr.hasOwnProperty(k)) {
        el.setAttribute(k, attr[k]);
      }
    }
  }

  return el;
}

function attachEventListener(dom, eventName, handler) {
  if (isOldIEevents) {
    dom.attachEvent('on' + eventName, handler);
  } else {
    dom.addEventListener(eventName, handler, false);
  }
}

function log(message, isError) {
  if (!_options.debug && !isError) {
    return;
  }
  if (window.console && window.console.log) {
    if (isError) {
      console.error('[ABD] ' + message);
    } else {
      console.log('[ABD] ' + message);
    }
  }
}

var ajaxDownloads = [];

/**
* Load and execute the URL inside a closure function
*/
function loadExecuteUrl(url) {
  var ajax, result;

  blockLists.addUrl(url);
  // setup call for remote list
  ajax = new AjaxHelper({
    url: url,
    success: function success(data) {
      log('downloaded file ' + url); // todo - parse and store until use
      result = blockLists.setResult(url, 'success', data);
      try {
        var intervalId = 0,
            retryCount = 0;

        var tryExecuteTest = function tryExecuteTest(listData) {
          if (!testExecuting) {
            beginTest(listData, true);
            return true;
          }
          return false;
        };

        if (findResult == true) {
          return;
        }

        if (tryExecuteTest(result.data)) {
          return;
        } else {
          log('Pause before test execution');
          intervalId = setInterval(function () {
            if (tryExecuteTest(result.data) || retryCount++ > 5) {
              clearInterval(intervalId);
            }
          }, 250);
        }
      } catch (ex) {
        log(ex.message + ' url: ' + url, true);
      }
    },
    fail: function fail(status) {
      log(status, true);
      blockLists.setResult(url, 'error', null);
    }
  });

  ajaxDownloads.push(ajax);
}

/**
* Fetch the external lists and initiate the tests
*/
function fetchRemoteLists() {
  var i, url;
  var opts = _options;

  for (i = 0; i < opts.blockLists.length; i++) {
    url = opts.blockLists[i];
    loadExecuteUrl(url);
  }
}

function cancelRemoteDownloads() {
  var i, aj;

  for (i = ajaxDownloads.length - 1; i >= 0; i--) {
    aj = ajaxDownloads.pop();
    aj.abort();
  }
}

// =============================================================================
/**
* Begin execution of the test
*/
function beginTest(bait) {
  log('start beginTest');
  console.log('check', bait)

  if (findResult == true) {
    return; // we found it. don't continue executing
  }
  testExecuting = true;
  castBait(bait);

  exeResult.quick = 'testing';

  timerIds.test = setTimeout(function () {
    reelIn(bait, 1);
  }, 5);
}

/**
* Create the bait node to see how the browser page reacts
*/
function castBait(bait) {
  var i,
      d = document,
      b = d.body;
  var t;
  var baitStyle = 'width: 1px !important; height: 1px !important; position: absolute !important; ';
  if (_utils.isSafari) {
    baitStyle += 'left: 1px !important; top: 1px !important;';
  } else {
    baitStyle += 'left: -10000px !important; top: -1000px !important;';
  }

  if (bait == null || typeof bait == 'string') {
    log('invalid bait being cast');
    return;
  }

  if (bait.style != null) {
    baitStyle += bait.style;
  }

  baitNode = makeEl('div', {
    'class': bait.cssClass,
    'style': baitStyle
  });

  log('adding bait node to DOM');

  b.appendChild(baitNode);

  // touch these properties
  for (i = 0; i < baitTriggers.nullProps.length; i++) {
    t = baitNode[baitTriggers.nullProps[i]];
  }
  for (i = 0; i < baitTriggers.zeroProps.length; i++) {
    t = baitNode[baitTriggers.zeroProps[i]];
  }
}

/**
* Run tests to see if browser has taken the bait and blocked the bait element
*/
function reelIn(bait, attemptNum) {
  var i, k, v;
  var body = document.body;
  var found = false;

  if (baitNode == null) {
    log('recast bait');
    castBait(bait || quickBait);
  }

  if (typeof bait == 'string') {
    log('invalid bait used', true);
    if (clearBaitNode()) {
      setTimeout(function () {
        testExecuting = false;
      }, 5);
    }

    return;
  }

  if (timerIds.test > 0) {
    clearTimeout(timerIds.test);
    timerIds.test = 0;
  }

  // test for issues

  if (body.getAttribute('abp') !== null) {
    log('found adblock body attribute');
    found = true;
  }

  for (i = 0; i < baitTriggers.nullProps.length; i++) {
    console.log('check23', baitNode[baitTriggers.nullProps[i]], baitTriggers.nullProps[i])
    // console.log('check23', {...baitNode})
    if (baitNode[baitTriggers.nullProps[i]] == null) {
      if (attemptNum > 4) found = true;

      log('found adblock null attr: ' + baitTriggers.nullProps[i]);
      break;
    }
    if (found == true) {
      break;
    }
  }

  for (i = 0; i < baitTriggers.zeroProps.length; i++) {
    if (found == true) {
      break;
    }
    if (baitNode[baitTriggers.zeroProps[i]] == 0) {
      if (attemptNum > 4) found = true;
      log('found adblock zero attr: ' + baitTriggers.zeroProps[i]);
    }
  }

  if (window.getComputedStyle !== undefined) {
    var baitTemp = window.getComputedStyle(baitNode, null);
    if (baitTemp.getPropertyValue('display') == 'none' || baitTemp.getPropertyValue('visibility') == 'hidden') {
      if (attemptNum > 4) found = true;
      log('found adblock computedStyle indicator');
    }
  }

  testedOnce = true;

  if (found || attemptNum++ >= _options.maxLoop) {
    findResult = found;
    log('exiting test loop - value: ' + findResult);
    notifyListeners();
    if (clearBaitNode()) {
      setTimeout(function () {
        testExecuting = false;
      }, 5);
    }
  } else {
    timerIds.test = setTimeout(function () {
      reelIn(bait, attemptNum);
    }, _options.loopDelay);
  }
}

function clearBaitNode() {
  if (baitNode === null) {
    return true;
  }

  try {
    if (isFunc(baitNode.remove)) {
      baitNode.remove();
    }
    document.body.removeChild(baitNode);
  } catch (ex) {}
  baitNode = null;

  return true;
}

/**
* Halt the test and any pending timeouts
*/
function stopFishing() {
  if (timerIds.test > 0) {
    clearTimeout(timerIds.test);
  }
  if (timerIds.download > 0) {
    clearTimeout(timerIds.download);
  }

  cancelRemoteDownloads();

  clearBaitNode();
}

/**
* Fire all registered listeners
*/
function notifyListeners() {
  var i, funcs;
  if (findResult === null) {
    return;
  }
  for (i = 0; i < listeners.length; i++) {
    funcs = listeners[i];
    try {
      if (funcs != null) {
        if (isFunc(funcs['complete'])) {
          funcs['complete'](findResult);
        }

        if (findResult && isFunc(funcs['found'])) {
          funcs['found']();
        } else if (findResult === false && isFunc(funcs['notfound'])) {
          console.log('check')

          funcs['notfound']();
        }
      }
    } catch (ex) {
      log('Failure in notify listeners ' + ex.Message, true);
    }
  }
}

/**
* Attaches event listener or fires if events have already passed.
*/
function attachOrFire() {
  var fireNow = false;
  var fn;

  if (document.readyState) {
    if (document.readyState == 'complete') {
      fireNow = true;
    }
  }

  fn = function fn() {
    beginTest(quickBait, false);
  };

  if (fireNow) {
    fn();
  } else {
    attachEventListener(window, 'load', fn);
  }
}

var blockLists; // tracks external block lists

/**
* Public interface of adblock detector
*/
var impl = {
  /**
  * Version of the adblock detector package
  */
  version: version,

  /**
  * Initialization function. See comments at top for options object
  */
  init: function init(options) {
    var k, v, funcs;

    if (!options) {
      return;
    }

    funcs = {
      complete: noop,
      found: noop,
      notfound: noop
    };

    for (k in options) {
      if (options.hasOwnProperty(k)) {
        if (k == 'complete' || k == 'found' || k == 'notFound') {
          funcs[k.toLowerCase()] = options[k];
        } else {
          _options[k] = options[k];
        }
      }
    }

    listeners.push(funcs);

    blockLists = new BlockListTracker();

    attachOrFire();
  }
};

exports.default = impl;
'filehash Mx6rgE7OfJwrZzjcDqWPR8ZhH0g=';

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../../node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _preactCompat = __webpack_require__(/*! preact-compat */ "../../node_modules/preact-compat/dist/preact-compat.es.js");

var _preactCompat2 = _interopRequireDefault(_preactCompat);

var _preact = __webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.mjs");

var _preactFriendlyFrame = __webpack_require__(/*! @audienzz/preact-friendly-frame */ "./node_modules/@audienzz/preact-friendly-frame/src/index.js");

var _Overlay = __webpack_require__(/*! src/components/Overlay */ "./src/components/Overlay/index.js");

var _Overlay2 = _interopRequireDefault(_Overlay);

var _state = __webpack_require__(/*! src/state */ "./src/state.js");

var _state2 = _interopRequireDefault(_state);

var _utils = __webpack_require__(/*! src/utils */ "./src/utils.js");

var _sites = __webpack_require__(/*! src/sites */ "./src/sites.js");

var _sites2 = _interopRequireDefault(_sites);

var _detector = __webpack_require__(/*! src/detector */ "./src/detector.js");

var _detector2 = _interopRequireDefault(_detector);

var _Notice = __webpack_require__(/*! src/components/Notice */ "./src/components/Notice/index.js");

var _Notice2 = _interopRequireDefault(_Notice);

var _jsCookie = __webpack_require__(/*! js-cookie */ "../../node_modules/js-cookie/src/js.cookie.js");

var _jsCookie2 = _interopRequireDefault(_jsCookie);

__webpack_require__(/*! whatwg-fetch */ "../../node_modules/whatwg-fetch/fetch.js");

var _check = __webpack_require__(/*! @audienzz/check */ "./node_modules/@audienzz/check/index.js");

var _check2 = _interopRequireDefault(_check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  bannerFrame: {
    position: 'relative',
    zIndex: '1002',
    marginBottom: '6px'
  },
  bannerFrameV2: {
    position: 'fixed',
    bottom: 0,
    top: 0,
    margin: 'auto',
    right: 0,
    left: 0,
    zIndex: '100002',
    minHeight: '414px'
  }
};

var site = (0, _utils.findSite)(_sites2.default);
if (site && site.init) {
  site.init();
}

var _ref4 = (0, _preact.h)(_Overlay2.default, null);

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getVisitorId = function () {
      var cookie = _jsCookie2.default.get('visitorId');
      if (!cookie) {
        cookie = _this.generateVisitorId(18);
        _jsCookie2.default.set('visitorId', cookie);
      }

      return cookie;
    };

    _this.collect = function (detected) {
      var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return fetch('http://localhost' + '/collect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          visitorId: _this.getVisitorId(),
          detected: detected,
          hostname: window.location.hostname,
          browser: window.navigator.userAgent,
          v: v
        })
      });
    };

    _this.generateVisitorId = function (length) {
      return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
    };

    _this.deactivate = function () {
      _this.setState(function (state) {
        return (0, _extends3.default)({}, state, {
          detected: false,
          wasFound: false
        });
      });
    };

    _this.state = {
      detected: null,
      wasFound: null
    };
    _this.componentWillReceiveProps(props);
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _detector2.default.init({
        debug: false,
        found: function () {
          var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var adnzVersion, adnzComponentID, adnzComponentName, loadingDelay;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    window.digitalData.page.attributes.adBlocker.push('adnz|det');

                    if (!(site.urlChecked && !site.urlChecked())) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt('return');

                  case 3:
                    _context.t0 = site.renderingChecked;

                    if (!_context.t0) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 7;
                    return site.renderingChecked();

                  case 7:
                    _context.t0 = !_context.sent;

                  case 8:
                    if (!_context.t0) {
                      _context.next = 10;
                      break;
                    }

                    return _context.abrupt('return');

                  case 10:
                    window.digitalData.component = window.digitalData.component || [];
                    window.digitalData.event = window.digitalData.event || [];
                    adnzVersion = site.data.niceReminder ? 'v1' : 'v2';
                    adnzComponentID = 'adnz201811';
                    adnzComponentName = 'Adnz 201811 ' + adnzVersion;

                    window.digitalData.component.push({
                      componentInfo: {
                        componentID: adnzComponentID,
                        componentName: adnzComponentName
                      },
                      category: {
                        componentType: 'notification',
                        componentSubType1: 'adnz',
                        componentSubType2: adnzVersion
                      }
                    });
                    window.digitalData.event.push({
                      eventInfo: {
                        eventName: 'Notification Interaction',
                        eventAction: 'display',
                        eventNonInteractive: false,
                        type: 'form',
                        timeStamp: new Date(),
                        componentID: adnzComponentID,
                        componentName: adnzComponentName
                      },
                      category: {
                        primaryCategory: 'notification',
                        subCategory1: 'adnz',
                        subCategory3: adnzVersion
                      }
                    });
                    loadingDelay = site.data.loadingDelay && !site.data.niceReminder ? site.data.loadingDelay : 0;

                    setTimeout(function () {
                      var wasFoundCookie = _jsCookie2.default.get('wasFound');
                      if (!wasFoundCookie) {
                        _jsCookie2.default.set('wasFound', 'true');
                      }
                      _this2.setState(function (state) {
                        return (0, _extends3.default)({}, state, {
                          detected: true,
                          wasFound: !!wasFoundCookie
                        });
                      }, function () {
                        _this2.collect(true, adnzVersion);
                        if (site.mess) {
                          site.mess();
                        }
                      });
                    }, loadingDelay);

                  case 19:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this2);
          }));

          function found() {
            return _ref.apply(this, arguments);
          }

          return found;
        }(),
        notFound: function () {
          var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var wasFoundCookie;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    window.digitalData.page.attributes.adBlocker.push('adnz|ndet');

                    if (!(site.urlChecked && !site.urlChecked())) {
                      _context2.next = 3;
                      break;
                    }

                    return _context2.abrupt('return');

                  case 3:
                    _context2.t0 = site.renderingChecked;

                    if (!_context2.t0) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 7;
                    return site.renderingChecked();

                  case 7:
                    _context2.t0 = !_context2.sent;

                  case 8:
                    if (!_context2.t0) {
                      _context2.next = 10;
                      break;
                    }

                    return _context2.abrupt('return');

                  case 10:
                    wasFoundCookie = _jsCookie2.default.get('wasFound');

                    _this2.setState(function (state) {
                      return (0, _extends3.default)({}, state, {
                        detected: false,
                        wasFound: !!wasFoundCookie
                      });
                    }, function () {
                      _this2.collect(false);
                      if (wasFoundCookie) {
                        _jsCookie2.default.remove('wasFound');
                        if (site.mess) {
                          site.mess();
                        }
                      }
                    });

                  case 12:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2);
          }));

          function notFound() {
            return _ref2.apply(this, arguments);
          }

          return notFound;
        }()
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState(function (state) {
        return (0, _extends3.default)({}, state, props);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log('++++++', this.state.wasFound, this.state.detected);
      return (0, _preact.h)(
        _state2.default.Provider,
        { value: this.state },
        (this.state.wasFound || this.state.detected) && (0, _preact.h)(
          _preactFriendlyFrame.FriendlyFrame,
          {
            scrolling: 'no',
            frameBorder: '0',
            width: '100%',
            style: this.state.detected && !this.state.niceReminder ? styles.bannerFrameV2 : styles.bannerFrame
          },
          function (_ref3) {
            var node = _ref3.node;
            return (0, _preact.h)(
              _preactFriendlyFrame.FrameResizer,
              {
                frame: node,
                config: {
                  autoResize: true,
                  heightCalculationMethod: 'taggedElement',
                  widthCalculationMethod: 'taggedElement',
                  checkOrigin: false,
                  sizeWidth: false
                }
              },
              (0, _preact.h)(_Notice2.default, {
                deactivate: _this3.deactivate,
                siteClass: _this3.state.siteClass,
                siteTitle: _this3.state.siteTitle,
                wasDetected: _this3.state.detected,
                niceReminder: _this3.state.niceReminder,
                links: _this3.state.links
              })
            );
          }
        ),
        this.state.detected && !this.state.niceReminder && (0, _preact.h)(
          _preactFriendlyFrame.FriendlyFrame,
          {
            scrolling: 'no',
            style: {
              position: 'fixed',
              width: '100%',
              height: '100%',
              border: 'none',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
              margin: '0',
              padding: '0',
              overflow: 'hidden',
              zIndex: '100001'
            }
          },
          function () {
            return _ref4;
          }
        )
      );
    }
  }]);
  return App;
}(_preactCompat2.default.Component);

window.document.addEventListener('DOMContentLoaded', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
  var element, data;
  return _regenerator2.default.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _check2.default)(function () {
            try {
              return window.digitalData.page.attributes;
            } catch (err) {
              return null;
            }
          }, 15000, 500);

        case 2:

          window.digitalData = window.digitalData || {};
          window.digitalData.page = window.digitalData.page || {};
          window.digitalData.page.attributes = window.digitalData.page.attributes || {};
          window.digitalData.page.attributes.adBlocker = window.digitalData.page.attributes.adBlocker || [];

          _context3.next = 8;
          return site.getPlacement();

        case 8:
          element = _context3.sent;

          if (element) {
            data = site.data || {};

            (0, _preactCompat.render)((0, _preact.h)(App, data), element);
          }

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
}))());

exports.default = {};
'filehash fuR5hiE1bXOqXr64ljfewN+6Ls8=';

/***/ }),

/***/ "./src/sites.js":
/*!**********************!*\
  !*** ./src/sites.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _utils = __webpack_require__(/*! src/utils */ "./src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  test: /(bellevue.nzz.ch|www.bellevue.nzz.ch|bellevue-stage.nzz.ch|bellevue-test.nzz.ch)/,
  data: {
    siteClass: 'bellevue',
    siteTitle: '«NZZ Bellevue»',
    niceReminder: (0, _utils.isNiceReminder)(100),
    loadingDelay: 3000,
    links: {
      v1: {
        desktop: {
          deactivate: 'https://bellevue.nzz.ch/ld.1426977',
          createAccount: 'https://abo.nzz.ch/registrieren/?KAVZ=0873-0010-01-012',
          signIn: 'https://login.nzz.ch/?sso=1&target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0873-0010-01-010'
        },
        mobile: {
          deactivate: 'https://bellevue.nzz.ch/ld.1426977',
          createAccount: 'https://abo.nzz.ch/registrieren/?KAVZ=0873-0010-01-013',
          signIn: 'https://login.nzz.ch/?sso=1&target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0873-0010-01-011'
        }
      },
      v2: {
        desktop: {
          deactivate: 'https://bellevue.nzz.ch/ld.1426977',
          createAccount: 'https://abo.nzz.ch/registrieren/?KAVZ=0873-0010-02-012',
          signIn: 'https://login.nzz.ch/?sso=1&target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0873-0010-02-010'
        },
        mobile: {
          deactivate: 'https://bellevue.nzz.ch/ld.1426977',
          createAccount: 'https://abo.nzz.ch/registrieren/?KAVZ=0873-0010-02-013',
          signIn: 'https://login.nzz.ch/?sso=1&target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0873-0010-02-011'
        }
      }
    }
  },
  urlChecked: function urlChecked() {
    if (window.top.location.href.match(/\/haeufige-fragen/) || window.top.location.href.match(/\/impressum/) || window.top.location.href.match(/\/sponsored-content/)) {
      return false;
    }
    return true;
  },
  renderingChecked: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', (0, _utils.renderingCheck)());

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    function renderingChecked() {
      return _ref.apply(this, arguments);
    }

    return renderingChecked;
  }(),
  getPlacement: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', (0, _utils.createPlacementNode)(function () {
                return window.top.document.querySelector('.header-hero .resor--top');
              }));

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    function getPlacement() {
      return _ref2.apply(this, arguments);
    }

    return getPlacement;
  }(),
  mess: function mess() {
    (0, _utils.injectStyle)('\n        .header-hero .resor--top {\n          max-height: none;\n          margin-bottom: -20px;\n        }\n        @media (max-width: 767px) {\n          .header-hero .resor--top {\n            width: auto;\n            max-width: 100%;\n          }\n        }\n      ');
  }
}, {
  test: /(www.nzz.ch|nzz.ch|www-test.nzz.ch)/,
  data: {
    siteClass: 'nzz',
    siteTitle: 'die NZZ',
    niceReminder: (0, _utils.isNiceReminder)(100),
    loadingDelay: 3000,
    links: {
      v1: {
        desktop: {
          deactivate: 'https://www.nzz.ch/digital/adblocker-auf-fuer-nzz-abschalten-ld.10501',
          createAccount: 'https://abo.nzz.ch/registrieren/?KAVZ=0323-0010-04-021',
          signIn: 'https://login.nzz.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0323-0010-04-020'
        },
        mobile: {
          deactivate: 'https://www.nzz.ch/digital/adblocker-auf-fuer-nzz-abschalten-ld.10501',
          createAccount: 'https://abo.nzz.ch/registrieren/?KAVZ=0323-0010-04-023',
          signIn: 'https://login.nzz.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0323-0010-04-022'
        }
      },
      v2: {
        desktop: {
          deactivate: 'https://www.nzz.ch/digital/adblocker-auf-fuer-nzz-abschalten-ld.10501',
          createAccount: 'https://abo.nzz.ch/registrieren/?KAVZ=0323-0010-05-021',
          signIn: 'https://login.nzz.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0323-0010-05-020'
        },
        mobile: {
          deactivate: 'https://www.nzz.ch/digital/adblocker-auf-fuer-nzz-abschalten-ld.10501',
          createAccount: 'https://abo.nzz.ch/registrieren/?KAVZ=0323-0010-05-023',
          signIn: 'https://login.nzz.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0323-0010-05-022'
        }
      }
    }
  },
  urlChecked: function urlChecked() {
    if (window.top.location.href.match(/\/services/) || window.top.location.href.match(/\/information/) || window.top.location.href.match(/\/branded-content/)) {
      return false;
    }
    return true;
  },
  renderingChecked: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', (0, _utils.renderingCheck)());

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    function renderingChecked() {
      return _ref3.apply(this, arguments);
    }

    return renderingChecked;
  }(),
  getPlacement: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt('return', (0, _utils.createPlacementNode)(function () {
                return window.top.document.querySelector('.l--premain');
              }));

            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    function getPlacement() {
      return _ref4.apply(this, arguments);
    }

    return getPlacement;
  }(),
  mess: function mess() {
    (0, _utils.injectStyle)('\n        #c1notification + div:not(class) {\n          margin-top: -10px;\n        }\n      ');
  }
}, {
  test: /(www.luzernerzeitung.ch|luzernerzeitung.ch|beta-test.luzernerzeitung.ch|leodegar-test.luzernerzeitung.ch|beta-stage.luzernerzeitung.ch|leodegar-stage.luzernerzeitung.ch)/,
  data: {
    siteClass: 'luzernerzeitung',
    siteTitle: 'Luzernerzeitung.ch',
    niceReminder: (0, _utils.isNiceReminder)(0),
    loadingDelay: 3000,
    links: {
      v1: {
        desktop: {
          deactivate: 'https://www.luzernerzeitung.ch/services/ausnahme-ad-blocker-ld.1064015',
          createAccount: 'https://abo.luzernerzeitung.ch/registrieren/?KAVZ=0870-0010-01-012',
          signIn: 'https://login.luzernerzeitung.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0870-0010-01-010'
        },
        mobile: {
          deactivate: 'https://www.luzernerzeitung.ch/services/ausnahme-ad-blocker-ld.1064015',
          createAccount: 'https://abo.luzernerzeitung.ch/registrieren/?KAVZ=0870-0010-01-013',
          signIn: 'https://login.luzernerzeitung.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0870-0010-01-011'
        }
      },
      v2: {
        desktop: {
          deactivate: 'https://www.luzernerzeitung.ch/services/ausnahme-ad-blocker-ld.1064015',
          createAccount: 'https://abo.luzernerzeitung.ch/registrieren/?KAVZ=0870-0010-02-012',
          signIn: 'https://login.luzernerzeitung.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0870-0010-02-010'
        },
        mobile: {
          deactivate: 'https://www.luzernerzeitung.ch/services/ausnahme-ad-blocker-ld.1064015',
          createAccount: 'https://abo.luzernerzeitung.ch/registrieren/?KAVZ=0870-0010-02-013',
          signIn: 'https://login.luzernerzeitung.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0870-0010-02-011'
        }
      }
    }
  },
  urlChecked: function urlChecked() {
    if (window.top.location.href.match(/\/services/) || window.top.location.href.match(/\/brandedcontent/)) {
      return false;
    }
    return true;
  },
  renderingChecked: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt('return', (0, _utils.renderingCheck)());

            case 1:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    function renderingChecked() {
      return _ref5.apply(this, arguments);
    }

    return renderingChecked;
  }(),
  getPlacement: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt('return', (0, _utils.createPlacementNode)(function () {
                return window.top.document.querySelector('.l--premain');
              }));

            case 1:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    function getPlacement() {
      return _ref6.apply(this, arguments);
    }

    return getPlacement;
  }(),
  mess: function mess() {
    (0, _utils.injectStyle)('\n        #c1notification + div:not(class) {\n          margin-top: -10px;\n        }\n      ');
  }
}, {
  test: /(www.tagblatt.ch|gallus-test.tagblatt.ch|beta-test.tagblatt.ch|gallus-stage.tagblatt.ch|beta-stage.tagblatt.ch)/,
  data: {
    siteClass: 'tagblatt',
    siteTitle: 'Tagblatt.ch',
    niceReminder: (0, _utils.isNiceReminder)(0),
    loadingDelay: 3000,
    links: {
      v1: {
        desktop: {
          deactivate: 'https://www.tagblatt.ch/services/ausnahme-ad-blocker-ld.1064014',
          createAccount: 'https://abo.tagblatt.ch/registrieren/?KAVZ=0871-0010-01-012',
          signIn: 'https://login.tagblatt.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0871-0010-01-010'
        },
        mobile: {
          deactivate: 'https://www.tagblatt.ch/services/ausnahme-ad-blocker-ld.1064014',
          createAccount: 'https://abo.tagblatt.ch/registrieren/?KAVZ=0871-0010-01-013',
          signIn: 'https://login.tagblatt.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0871-0010-01-011'
        }
      },
      v2: {
        desktop: {
          deactivate: 'https://www.tagblatt.ch/services/ausnahme-ad-blocker-ld.1064014',
          createAccount: 'https://abo.tagblatt.ch/registrieren/?KAVZ=0871-0010-02-012',
          signIn: 'https://login.tagblatt.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0871-0010-02-010'
        },
        mobile: {
          deactivate: 'https://www.tagblatt.ch/services/ausnahme-ad-blocker-ld.1064014',
          createAccount: 'https://abo.tagblatt.ch/registrieren/?KAVZ=0871-0010-02-012',
          signIn: 'https://login.tagblatt.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0871-0010-02-011'
        }
      }
    }
  },
  urlChecked: function urlChecked() {
    if (window.top.location.href.match(/\/services/) || window.top.location.href.match(/\/brandedcontent/)) {
      return false;
    }
    return true;
  },
  renderingChecked: function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt('return', (0, _utils.renderingCheck)());

            case 1:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    function renderingChecked() {
      return _ref7.apply(this, arguments);
    }

    return renderingChecked;
  }(),
  getPlacement: function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt('return', (0, _utils.createPlacementNode)(function () {
                return window.top.document.querySelector('.l--premain');
              }));

            case 1:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined);
    }));

    function getPlacement() {
      return _ref8.apply(this, arguments);
    }

    return getPlacement;
  }(),
  mess: function mess() {
    (0, _utils.injectStyle)('\n        #c1notification + div:not(class) {\n          margin-top: -10px;\n        }\n      ');
  }
}, {
  data: {
    siteClass: 'default',
    siteTitle: 'default',
    niceReminder: (0, _utils.isNiceReminder)(100),
    loadingDelay: 3000,
    links: {
      v1: {
        desktop: {
          deactivate: 'https://www.tagblatt.ch/services/ausnahme-ad-blocker-ld.1064014',
          createAccount: 'https://abo.tagblatt.ch/registrieren/?KAVZ=0871-0010-01-012',
          signIn: 'https://login.tagblatt.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0871-0010-01-010'
        },
        mobile: {
          deactivate: 'https://www.tagblatt.ch/services/ausnahme-ad-blocker-ld.1064014',
          createAccount: 'https://abo.tagblatt.ch/registrieren/?KAVZ=0871-0010-01-013',
          signIn: 'https://login.tagblatt.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0871-0010-01-011'
        }
      },
      v2: {
        desktop: {
          deactivate: 'https://www.tagblatt.ch/services/ausnahme-ad-blocker-ld.1064014',
          createAccount: 'https://abo.tagblatt.ch/registrieren/?KAVZ=0871-0010-02-012',
          signIn: 'https://login.tagblatt.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0871-0010-02-010'
        },
        mobile: {
          deactivate: 'https://www.tagblatt.ch/services/ausnahme-ad-blocker-ld.1064014',
          createAccount: 'https://abo.tagblatt.ch/registrieren/?KAVZ=0871-0010-02-012',
          signIn: 'https://login.tagblatt.ch/?target=' + encodeURIComponent(window.top.location.href) + '&KAVZ=0871-0010-02-011'
        }
      }
    }
  },
  urlChecked: function urlChecked() {
    if (window.top.location.href.match(/\/services/)) {
      return false;
    }
    return true;
  },
  renderingChecked: function () {
    var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt('return', (0, _utils.renderingCheck)());

            case 1:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, undefined);
    }));

    function renderingChecked() {
      return _ref9.apply(this, arguments);
    }

    return renderingChecked;
  }(),
  getPlacement: function () {
    var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt('return', (0, _utils.createPlacementNode)(function () {
                return window.top.document.getElementById('root');
              }));

            case 1:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, undefined);
    }));

    function getPlacement() {
      return _ref10.apply(this, arguments);
    }

    return getPlacement;
  }(),
  init: function init() {},
  mess: function mess() {
    (0, _utils.injectStyle)('\n        .test-body {\n          color: transparent;\n          text-shadow: 5px 5px 5px rgba(0,0,0,0.2);\n          margin-top: 4px;\n        }\n      ');
  }
}];
'filehash 2N7UcHbeK46uYyK+16koMfN2vP8=';

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preactContext = __webpack_require__(/*! preact-context */ "../../node_modules/preact-context/dist/context.min.js");

exports.default = (0, _preactContext.createContext)();
'filehash DgTpfsl7Ye6rVfJs9mEGYE04xpE=';

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNiceReminder = exports.createPlacementNode = exports.renderingCheck = exports.getUrlParam = exports.injectStyle = exports.findSite = exports.isSafari = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "../../node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "../../node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _querystring = __webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js");

var _check = __webpack_require__(/*! @audienzz/check */ "./node_modules/@audienzz/check/index.js");

var _check2 = _interopRequireDefault(_check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isSafari = exports.isSafari = function isSafari() {
  return window.navigator.vendor && window.navigator.vendor.indexOf('Apple') > -1 && window.navigator.userAgent && window.navigator.userAgent.indexOf('CriOS') === -1 && window.navigator.userAgent.indexOf('FxiOS') === -1;
};

var findSite = exports.findSite = function findSite(sites) {
  return sites.find(function (site) {
    return window.top.location.href.match(site.test) || !site.test;
  });
};

var injectStyle = exports.injectStyle = function injectStyle(styles) {
  var head = window.top.document.head || window.top.document.getElementsByTagName('head')[0];
  var s = window.top.document.createElement('style');
  s.type = 'text/css';
  s.innerHTML = styles;
  head.appendChild(s);
};

var getUrlParam = exports.getUrlParam = function getUrlParam(name) {
  var urlParam = (0, _querystring.parse)(window.location.search.slice(1))[name];
  if (!!window.location.search && !!urlParam) {
    return urlParam.split('/')[0];
  }
  return null;
};

var renderingCheck = exports.renderingCheck = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var reduced, signIn, docType, pageType;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            reduced = getUrlParam('reduced') === 'true';
            signIn = false;
            _context.prev = 3;
            _context.next = 6;
            return (0, _check2.default)(function () {
              try {
                return !!window.top.digitalData.user[0].profile[0].profileInfo.profileID;
              } catch (err) {
                return null;
              }
            }, 15000, 500);

          case 6:
            signIn = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](3);

            console.log('signIn is not found'); // eslint-disable-line no-console

          case 12:
            docType = false;
            _context.prev = 13;
            _context.next = 16;
            return (0, _check2.default)(function () {
              try {
                return window.top.digitalData.page.attributes.c1.docType;
              } catch (err) {
                return null;
              }
            }, 15000, 500);

          case 16:
            _context.t1 = _context.sent;
            docType = _context.t1 === 'article';
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t2 = _context['catch'](13);

            console.log('doctype is not found'); // eslint-disable-line no-console

          case 23:
            pageType = false;
            _context.prev = 24;
            _context.next = 27;
            return (0, _check2.default)(function () {
              try {
                return window.digitalData.page.category.pageType;
              } catch (err) {
                return null;
              }
            }, 15000, 500);

          case 27:
            _context.t3 = _context.sent;
            pageType = _context.t3 !== 'mnzz';
            _context.next = 34;
            break;

          case 31:
            _context.prev = 31;
            _context.t4 = _context['catch'](24);

            console.log('page type is not found'); // eslint-disable-line no-console

          case 34:
            if (!(!!docType && !!pageType && !signIn && !reduced)) {
              _context.next = 36;
              break;
            }

            return _context.abrupt('return', true);

          case 36:
            _context.next = 41;
            break;

          case 38:
            _context.prev = 38;
            _context.t5 = _context['catch'](0);

            console.log(_context.t5); // eslint-disable-line no-console

          case 41:
            return _context.abrupt('return', null);

          case 42:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 38], [3, 9], [13, 20], [24, 31]]);
  }));

  return function renderingCheck() {
    return _ref.apply(this, arguments);
  };
}();

var createPlacementNode = exports.createPlacementNode = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(fetchContainer) {
    var container, renderBox;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            container = void 0;
            _context2.prev = 2;
            _context2.next = 5;
            return (0, _check2.default)(fetchContainer, 15000, 500);

          case 5:
            container = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](2);

            console.log('container is not found'); // eslint-disable-line no-console

          case 11:
            renderBox = window.top.document.createElement('div');

            container.insertBefore(renderBox, container.lastChild);
            return _context2.abrupt('return', renderBox);

          case 16:
            _context2.prev = 16;
            _context2.t1 = _context2['catch'](0);

            console.log(_context2.t1); // eslint-disable-line no-console

          case 19:
            return _context2.abrupt('return', null);

          case 20:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 16], [2, 8]]);
  }));

  return function createPlacementNode(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var isNiceReminder = exports.isNiceReminder = function isNiceReminder(percent) {
  return Math.random() * 100 <= percent;
};
'filehash B5z0tvZPT0lVMVJrItJYzdItBvA=';

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi core-js/fn/promise core-js/fn/array/find ./src/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/fn/promise */"../../node_modules/core-js/fn/promise.js");
__webpack_require__(/*! core-js/fn/array/find */"../../node_modules/core-js/fn/array/find.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ })["default"];
//# sourceMappingURL=index.js.map