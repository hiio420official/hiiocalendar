/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/HiioCalendar.ts":
/*!*****************************!*\
  !*** ./src/HiioCalendar.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HiioCalendar: () => (/* binding */ HiioCalendar)\n/* harmony export */ });\nvar __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {\n  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n    if (ar || !(i in from)) {\n      if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n      ar[i] = from[i];\n    }\n  }\n  return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar HiioCalendar = /** @class */function () {\n  function HiioCalendar() {\n    var args = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n      args[_i] = arguments[_i];\n    }\n    this.WEEKS = 6;\n    this.DAYS = 7;\n    if (args.length > 0) {\n      args[1] = args[1] - 1;\n    }\n    this._date = new (Date.bind.apply(Date, __spreadArray([void 0], args, false)))();\n  }\n  Object.defineProperty(HiioCalendar.prototype, \"Y\", {\n    get: function () {\n      return this._date.getFullYear();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"M\", {\n    get: function () {\n      return this._date.getMonth() + 1;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"D\", {\n    get: function () {\n      return this._date.getDate();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"W\", {\n    get: function () {\n      return this._date.getDay();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"H\", {\n    get: function () {\n      return this._date.getHours();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"m\", {\n    get: function () {\n      return this._date.getMonth();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"s\", {\n    get: function () {\n      return this._date.getSeconds();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"prevMonth\", {\n    get: function () {\n      if (!this._prev) {\n        this._prev = new HiioCalendar(this.Y, this.M - 1, this.D);\n      }\n      return this._prev;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"nextMonth\", {\n    get: function () {\n      if (!this._next) {\n        this._next = new HiioCalendar(this.Y, this.M + 1, this.D);\n      }\n      return this._next;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"first\", {\n    get: function () {\n      if (!this._first) {\n        this._first = new HiioCalendar(this.Y, this.M, 1);\n      }\n      return this._first;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"last\", {\n    get: function () {\n      if (!this._last) {\n        this._last = new HiioCalendar(this.Y, this.M + 1, 0);\n      }\n      return this._last;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"size\", {\n    get: function () {\n      return this.last.D - this.first.D + 1;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"list\", {\n    get: function () {\n      var _this = this;\n      if (!this._list) {\n        this._list = Array(this.size).fill(0).map(function (_, i) {\n          return new HiioCalendar(_this.Y, _this.M, i + 1);\n        });\n      }\n      return this._list;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  HiioCalendar.prototype.getMatrix = function () {\n    var mat = Array(this.WEEKS).fill([]);\n    var firstDay = this.first.W;\n    var firstSize = this.DAYS - firstDay;\n    var start = 0;\n    var end = firstSize;\n    var last = 0;\n    mat[0] = __spreadArray(__spreadArray([], mat[0], true), this.prevMonth.list.slice(this.prevMonth.size - firstDay, this.prevMonth.size + 1), true);\n    for (var i = 0; i < this.WEEKS; i++) {\n      mat[i] = __spreadArray(__spreadArray([], mat[i], true), this.list.slice(start, end), true);\n      start = end;\n      end = firstSize + (i + 1) * this.DAYS;\n      if (mat[i].length < this.DAYS && mat[i].length !== 0) {\n        last = i;\n      }\n    }\n    start = 0;\n    for (var i = last; i < this.WEEKS; i++) {\n      end = this.DAYS - mat[i].length + start;\n      mat[i] = __spreadArray(__spreadArray([], mat[i], true), this.nextMonth.list.slice(start, end), true);\n      start = end;\n    }\n    return mat;\n  };\n  Object.defineProperty(HiioCalendar.prototype, \"matrix\", {\n    get: function () {\n      if (!this._matrix) {\n        this._matrix = this.getMatrix();\n      }\n      return this._matrix;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"date\", {\n    get: function () {\n      return this._date;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  HiioCalendar.prototype.toString = function (format) {\n    if (!format) {\n      return \"\".concat(this.Y, \"-\").concat(this.M, \"-\").concat(this.D);\n    } else {\n      var $this_1 = this;\n      return format.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\\/p)/gi, function (match) {\n        switch (match) {\n          case \"yyyy\":\n            return String($this_1.Y);\n          case \"yy\":\n            return String($this_1.Y % 1000).padStart(2, '0');\n          case \"MM\":\n            return String($this_1.M).padStart(2, '0');\n          case \"dd\":\n            return String($this_1.D).padStart(2, '0');\n          // case \"E\":\n          //     return weekName[d.getDay()];\n          case \"HH\":\n            return String($this_1.H).padStart(2, '0');\n          case \"hh\":\n            return String($this_1.H === $this_1.H % 12 ? $this_1.H : 12).padStart(2, '0');\n          case \"mm\":\n            return String($this_1.m).padStart(2, '0');\n          case \"ss\":\n            return String($this_1.s).padStart(2, '0');\n          case \"a/p\":\n            return $this_1.H < 12 ? \"오전\" : \"오후\";\n          default:\n            return match;\n        }\n      });\n    }\n  };\n  return HiioCalendar;\n}();\n\n\n//# sourceURL=webpack://webpacktest/./src/HiioCalendar.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _HiioCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HiioCalendar */ \"./src/HiioCalendar.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_HiioCalendar__WEBPACK_IMPORTED_MODULE_0__.HiioCalendar);\n\n//# sourceURL=webpack://webpacktest/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;