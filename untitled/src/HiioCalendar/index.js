/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/HiioCalendar.ts":
/*!*****************************!*\
  !*** ./src/HiioCalendar.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HiioCalendar: () => (/* binding */ HiioCalendar)\n/* harmony export */ });\nvar __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {\n  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n    if (ar || !(i in from)) {\n      if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n      ar[i] = from[i];\n    }\n  }\n  return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar HiioCalendar = /** @class */function () {\n  function HiioCalendar() {\n    var args = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n      args[_i] = arguments[_i];\n    }\n    this.WEEKS = 6;\n    this.DAYS = 7;\n    if (args.length > 0) {\n      args[1] = args[1] - 1;\n    }\n    this._date = new (Date.bind.apply(Date, __spreadArray([void 0], args, false)))();\n  }\n  Object.defineProperty(HiioCalendar.prototype, \"Y\", {\n    get: function () {\n      return this._date.getFullYear();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"M\", {\n    get: function () {\n      return this._date.getMonth() + 1;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"D\", {\n    get: function () {\n      return this._date.getDate();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"W\", {\n    get: function () {\n      return this._date.getDay();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"H\", {\n    get: function () {\n      return this._date.getHours();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"m\", {\n    get: function () {\n      return this._date.getMonth();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"s\", {\n    get: function () {\n      return this._date.getSeconds();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"thisYear\", {\n    get: function () {\n      if (!this._thisYear) {\n        this._thisYear = new HiioCalendar(this.Y, 1, 0);\n      }\n      return this._thisYear;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"weekOfYear\", {\n    get: function () {\n      var currentDayOfYear = Math.floor((this.date.getTime() - this.thisYear.date.getTime()) / (24 * 60 * 60 * 1000));\n      return Math.ceil((currentDayOfYear + 1) / 7);\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"prevMonth\", {\n    get: function () {\n      if (!this._prev) {\n        this._prev = new HiioCalendar(this.Y, this.M - 1, this.D);\n      }\n      return this._prev;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"nextMonth\", {\n    get: function () {\n      if (!this._next) {\n        this._next = new HiioCalendar(this.Y, this.M + 1, this.D);\n      }\n      return this._next;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"first\", {\n    get: function () {\n      if (!this._first) {\n        this._first = new HiioCalendar(this.Y, this.M, 1);\n      }\n      return this._first;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"last\", {\n    get: function () {\n      if (!this._last) {\n        this._last = new HiioCalendar(this.Y, this.M + 1, 0);\n      }\n      return this._last;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"size\", {\n    get: function () {\n      return this.last.D - this.first.D + 1;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"list\", {\n    get: function () {\n      var _this = this;\n      if (!this._list) {\n        this._list = Array(this.size).fill(0).map(function (_, i) {\n          return new HiioCalendar(_this.Y, _this.M, i + 1);\n        });\n      }\n      return this._list;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  HiioCalendar.prototype.getMatrix = function () {\n    var mat = Array(this.WEEKS).fill([]);\n    var firstDay = this.first.W;\n    var firstSize = this.DAYS - firstDay;\n    var start = 0;\n    var end = firstSize;\n    var last = 0;\n    mat[0] = __spreadArray(__spreadArray([], mat[0], true), this.prevMonth.list.slice(this.prevMonth.size - firstDay, this.prevMonth.size + 1), true);\n    for (var i = 0; i < this.WEEKS; i++) {\n      mat[i] = __spreadArray(__spreadArray([], mat[i], true), this.list.slice(start, end), true);\n      start = end;\n      end = firstSize + (i + 1) * this.DAYS;\n      if (mat[i].length < this.DAYS && mat[i].length !== 0) {\n        last = i;\n      }\n    }\n    start = 0;\n    for (var i = last; i < this.WEEKS; i++) {\n      end = this.DAYS - mat[i].length + start;\n      mat[i] = __spreadArray(__spreadArray([], mat[i], true), this.nextMonth.list.slice(start, end), true);\n      start = end;\n    }\n    return mat;\n  };\n  Object.defineProperty(HiioCalendar.prototype, \"matrix\", {\n    get: function () {\n      if (!this._matrix) {\n        this._matrix = this.getMatrix();\n      }\n      return this._matrix;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioCalendar.prototype, \"date\", {\n    get: function () {\n      return this._date;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  HiioCalendar.prototype.toString = function (format) {\n    if (!format) {\n      return \"\".concat(this.Y, \"-\").concat(this.M, \"-\").concat(this.D);\n    } else {\n      var $this_1 = this;\n      return format.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\\/p)/gi, function (match) {\n        switch (match) {\n          case \"yyyy\":\n            return String($this_1.Y);\n          case \"yy\":\n            return String($this_1.Y % 1000).padStart(2, '0');\n          case \"MM\":\n            return String($this_1.M).padStart(2, '0');\n          case \"dd\":\n            return String($this_1.D).padStart(2, '0');\n          // case \"E\":\n          //     return weekName[d.getDay()];\n          case \"HH\":\n            return String($this_1.H).padStart(2, '0');\n          case \"hh\":\n            return String($this_1.H === $this_1.H % 12 ? $this_1.H : 12).padStart(2, '0');\n          case \"mm\":\n            return String($this_1.m).padStart(2, '0');\n          case \"ss\":\n            return String($this_1.s).padStart(2, '0');\n          case \"a/p\":\n            return $this_1.H < 12 ? \"오전\" : \"오후\";\n          default:\n            return match;\n        }\n      });\n    }\n  };\n  return HiioCalendar;\n}();\n\n\n//# sourceURL=webpack://webpacktest/./src/HiioCalendar.ts?");

/***/ }),

/***/ "./src/HiioTask.ts":
/*!*************************!*\
  !*** ./src/HiioTask.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   COMPARE: () => (/* binding */ COMPARE),\n/* harmony export */   HiioTask: () => (/* binding */ HiioTask)\n/* harmony export */ });\n/* harmony import */ var _HiioCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HiioCalendar */ \"./src/HiioCalendar.ts\");\nvar __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {\n  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n    if (ar || !(i in from)) {\n      if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n      ar[i] = from[i];\n    }\n  }\n  return to.concat(ar || Array.prototype.slice.call(from));\n};\n\nvar COMPARE;\n(function (COMPARE) {\n  COMPARE[COMPARE[\"PREV\"] = 0] = \"PREV\";\n  COMPARE[COMPARE[\"CURRENT\"] = 1] = \"CURRENT\";\n  COMPARE[COMPARE[\"NEXT\"] = 2] = \"NEXT\";\n})(COMPARE || (COMPARE = {}));\n;\nvar HiioTask = /** @class */function () {\n  function HiioTask() {}\n  Object.defineProperty(HiioTask.prototype, \"start\", {\n    get: function () {\n      return this._start;\n    },\n    set: function (startDate) {\n      this._start = startDate;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioTask.prototype, \"end\", {\n    get: function () {\n      return this._end;\n    },\n    set: function (endDate) {\n      this._end = endDate;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(HiioTask.prototype, \"id\", {\n    get: function () {\n      return this._id;\n    },\n    set: function (id) {\n      this._id = id;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  HiioTask.prototype.compare = function (src, dist) {\n    var _src = src.date.getTime();\n    var _dist = dist.date.getTime();\n    if (_src > _dist) {\n      return COMPARE.PREV;\n    } else if (_src === _dist) {\n      return COMPARE.CURRENT;\n    } else {\n      return COMPARE.NEXT;\n    }\n  };\n  HiioTask.prototype.dateList = function () {\n    var _this = this;\n    if (!this._start || !this._end) {\n      return [];\n    }\n    var diffTime = this.end.date.getTime() - this.start.date.getTime();\n    var diffDays = diffTime / (1000 * 60 * 60 * 24);\n    if (diffDays === 0) {\n      return [this._start];\n    }\n    return __spreadArray(__spreadArray([this.start], Array(diffDays - 1).fill(0).map(function (_, i) {\n      return new _HiioCalendar__WEBPACK_IMPORTED_MODULE_0__.HiioCalendar(_this.start.Y, _this.start.M, _this.start.D + i + 1);\n    }), true), [this.end], false);\n  };\n  Object.defineProperty(HiioTask.prototype, \"dateToWeeks\", {\n    get: function () {\n      var mat = [];\n      var start = 0;\n      this.dateList().map(function (item) {\n        if (mat.length === 0) {\n          mat.push([]);\n        }\n        mat[start] = __spreadArray(__spreadArray([], mat[start], true), [item], false);\n        if (item.W === 6) {\n          start++;\n          mat = __spreadArray(__spreadArray([], mat, true), [[]], false);\n        }\n      });\n      return mat;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  HiioTask.intersect = function (src, dist) {\n    return src.some(function (item) {\n      return dist.includes(item);\n    });\n  };\n  return HiioTask;\n}();\n\n\n//# sourceURL=webpack://webpacktest/./src/HiioTask.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _HiioCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HiioCalendar */ \"./src/HiioCalendar.ts\");\n/* harmony import */ var _HiioTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HiioTask */ \"./src/HiioTask.ts\");\nvar __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {\n  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n    if (ar || !(i in from)) {\n      if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n      ar[i] = from[i];\n    }\n  }\n  return to.concat(ar || Array.prototype.slice.call(from));\n};\n\n\nvar calendar = new _HiioCalendar__WEBPACK_IMPORTED_MODULE_0__.HiioCalendar();\nvar taskMatrix = Array(6).fill(Array(7).fill(0));\nvar target = document.querySelector(\"#calendar\");\ndraw(target);\nvar a = new _HiioTask__WEBPACK_IMPORTED_MODULE_1__.HiioTask();\na.start = new _HiioCalendar__WEBPACK_IMPORTED_MODULE_0__.HiioCalendar(2023, 12, 1);\na.end = new _HiioCalendar__WEBPACK_IMPORTED_MODULE_0__.HiioCalendar(2023, 12, 6);\na.id = \"123vksdjvn\";\nvar taskList = [a];\ntaskList.map(function (task) {\n  taskDraw(task);\n});\nfunction draw(target) {\n  var matrix = calendar.matrix;\n  for (var i = 0; i < matrix.length; i++) {\n    var row = document.createElement(\"div\");\n    row.className = \"row\";\n    row.id = \"row_\".concat(i);\n    for (var j = 0; j < matrix[i].length; j++) {\n      var item = document.createElement(\"div\");\n      var d = matrix[i][j];\n      item.innerHTML = \"\".concat(d.D);\n      item.id = \"calendar_date_\".concat(d.Y, \"_\").concat(d.M, \"_\").concat(d.D);\n      item.className = \"calendar_date\";\n      row.append(item);\n    }\n    target.append(row);\n  }\n}\nvar calendarDateNode = document.querySelectorAll(\".calendar_date\");\ncalendarDateNode.forEach(function (node, idx) {\n  node.addEventListener(\"mouseenter\", function (e) {});\n  node.addEventListener(\"mousedown\", function (e) {\n    var weeks = Math.floor(idx / 7);\n    var days = idx % 7;\n    var d = calendar.matrix[weeks][days];\n    a = new _HiioTask__WEBPACK_IMPORTED_MODULE_1__.HiioTask();\n    a.start = d;\n    a.end = d;\n    a.id = String(Math.random());\n  });\n  node.addEventListener(\"mouseup\", function (e) {\n    var weeks = Math.floor(idx / 7);\n    var days = idx % 7;\n    var d = calendar.matrix[weeks][days];\n    var _compare = a.compare(a.start, d);\n    if (_compare === _HiioTask__WEBPACK_IMPORTED_MODULE_1__.COMPARE.PREV) {\n      a.end = a.start;\n      a.start = d;\n    } else {\n      a.end = d;\n    }\n    document.querySelectorAll(\".task\").forEach(function (node) {\n      return node.remove();\n    });\n    taskList = __spreadArray(__spreadArray([], taskList, true), [a], false).sort(function (a, b) {\n      return b.dateList().length - a.dateList().length;\n    });\n    console.log(taskList.map(function (i) {\n      return i.dateList().length;\n    }));\n    taskList.map(function (task) {\n      taskDraw(task);\n    });\n  });\n});\nfunction taskDraw(task) {\n  var dateToWeeks = task.dateToWeeks;\n  var id = task.id;\n  dateToWeeks.map(function (list, idx) {\n    var len = list.length;\n    if (len > 0) {\n      if (idx === 0) {}\n      var start = list[0];\n      var node = document.querySelector(\"#calendar_date_\".concat(start.Y, \"_\").concat(start.M, \"_\").concat(start.D));\n      var newNode = document.createElement(\"div\");\n      var width = node.clientWidth * len / window.innerWidth * 100;\n      var total_1 = 1;\n      var index = taskList.map(function (i) {\n        return i.id;\n      }).indexOf(id);\n      taskList.slice(0, index).map(function (item) {\n        if (item.id !== id) {\n          if (_HiioTask__WEBPACK_IMPORTED_MODULE_1__.HiioTask.intersect(list.map(function (i) {\n            return i.toString();\n          }), item.dateList().map(function (i) {\n            return i.toString();\n          }))) {\n            total_1++;\n          }\n        }\n      });\n      newNode.classList.add(\"task\");\n      newNode.style.width = width + \"%\";\n      newNode.style.top = total_1 + \"em\";\n      node.append(newNode);\n    }\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_HiioCalendar__WEBPACK_IMPORTED_MODULE_0__.HiioCalendar);\n\n//# sourceURL=webpack://webpacktest/./src/index.ts?");

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
/******/ 	return __webpack_exports__;
/******/ })()
;
});