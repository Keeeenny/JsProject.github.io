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

/***/ "./src/js/api/apiCalls.js":
/*!********************************!*\
  !*** ./src/js/api/apiCalls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_errorMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/errorMessage.js */ \"./src/js/components/errorMessage.js\");\n/* harmony import */ var _components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loadingStatus.js */ \"./src/js/components/loadingStatus.js\");\n/* harmony import */ var _dataFetcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataFetcher.js */ \"./src/js/api/dataFetcher.js\");\n/* harmony import */ var _components_buttonEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buttonEvent.js */ \"./src/js/components/buttonEvent.js\");\n\r\n\r\n\r\n\r\n\r\nconst url = ('https://hacker-news.firebaseio.com/v0/newstories.json');\r\nlet newsId\r\nlet firstTenIds\r\n\r\nasync function init(){\r\n  ;(0,_components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true)\r\n\r\n  try {\r\n    const response = await fetch(url)\r\n    newsId = await response.json()\r\n    firstTenIds = newsId.splice(0, 10)\r\n\r\n    ;(0,_dataFetcher_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(firstTenIds)\r\n    ;(0,_components_buttonEvent_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newsId)\r\n\r\n    return newsId\r\n  } catch (err) {\r\n    (0,_components_errorMessage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n  } finally {\r\n    (0,_components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false)\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\r\n\n\n//# sourceURL=webpack://progetto/./src/js/api/apiCalls.js?");

/***/ }),

/***/ "./src/js/api/dataFetcher.js":
/*!***********************************!*\
  !*** ./src/js/api/dataFetcher.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_errorMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/errorMessage.js */ \"./src/js/components/errorMessage.js\");\n/* harmony import */ var _components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loadingStatus.js */ \"./src/js/components/loadingStatus.js\");\n/* harmony import */ var _dataProcessor_appendData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataProcessor/appendData.js */ \"./src/js/dataProcessor/appendData.js\");\n\r\n\r\n\r\n\r\nasync function fetcher(loadedData){\r\n\r\n  (0,_components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true)\r\n\r\n  for (let value of loadedData){\r\n    try {\r\n      const newsUrl = await fetch (`https://hacker-news.firebaseio.com/v0/item/${value}.json`)\r\n      const response = await newsUrl.json()\r\n      ;(0,_dataProcessor_appendData_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(response)\r\n\r\n    } catch (err){\r\n      (0,_components_errorMessage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(err)\r\n      console.log(err)\r\n\r\n    } finally {\r\n      (0,_components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false)\r\n\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\r\n\n\n//# sourceURL=webpack://progetto/./src/js/api/dataFetcher.js?");

/***/ }),

/***/ "./src/js/components/buttonEvent.js":
/*!******************************************!*\
  !*** ./src/js/components/buttonEvent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_dataFetcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/dataFetcher.js */ \"./src/js/api/dataFetcher.js\");\n\r\n\r\nconst btn = document.getElementById('button');\r\nlet idList\r\n\r\nbtn.addEventListener('click', appendNextNews)\r\n\r\nfunction idsStorer(newsIds){\r\n  idList = newsIds\r\n}\r\n\r\nfunction appendNextNews() {\r\n    const firstTenIds = idList.splice(0, 10)\r\n    ;(0,_api_dataFetcher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(firstTenIds)\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (idsStorer);\r\n\n\n//# sourceURL=webpack://progetto/./src/js/components/buttonEvent.js?");

/***/ }),

/***/ "./src/js/components/errorMessage.js":
/*!*******************************************!*\
  !*** ./src/js/components/errorMessage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction error(err){\r\n  const article = document.createElement('article');\r\n  const horizontalRule = document.createElement('hr');\r\n  const text = document.createElement('p');\r\n\r\n  text.innerText = `An error occured: ${err}`\r\n\r\n  newsSection.append(article, horizontalRule);\r\n  article.append(text)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (error);\r\n\n\n//# sourceURL=webpack://progetto/./src/js/components/errorMessage.js?");

/***/ }),

/***/ "./src/js/components/loadingStatus.js":
/*!********************************************!*\
  !*** ./src/js/components/loadingStatus.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction isLoading(value){\r\n  const loading = document.getElementById('loading')\r\n\r\n  if (value == true) loading.classList.remove('hidden')\r\n  else loading.classList.add('hidden')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLoading); \r\n\n\n//# sourceURL=webpack://progetto/./src/js/components/loadingStatus.js?");

/***/ }),

/***/ "./src/js/dataProcessor/appendData.js":
/*!********************************************!*\
  !*** ./src/js/dataProcessor/appendData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _unixTimeConverter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unixTimeConverter.js */ \"./src/js/dataProcessor/unixTimeConverter.js\");\n\r\n\r\nconst newsSection = document.getElementById('newsSection');\r\n\r\n\r\n\r\nasync function append(data){\r\n  const article = document.createElement('article');\r\n  const horizontalRule = document.createElement('hr');\r\n\r\n  //Title\r\n  const title = document.createElement('h4');\r\n  title.innerText = data.title\r\n\r\n  //Content\r\n  const link = document.createElement('a');\r\n  const text = document.createElement('p');\r\n  const textContainer = document.createElement('div');\r\n\r\n  if (data.url !== undefined) {\r\n    link.innerText = data.url\r\n\r\n    article.append(link)\r\n\r\n    link.setAttribute('href', data.url)\r\n    link.setAttribute('target', '_blank')\r\n\r\n  } else {\r\n    article.append(textContainer)\r\n    textContainer.append(text)\r\n\r\n    text.setAttribute('id', 'text')\r\n    textContainer.setAttribute('class', 'text-left')\r\n\r\n    text.insertAdjacentHTML('afterbegin', data.text)\r\n  }\r\n\r\n  //time\r\n  const time = document.createElement('p');\r\n  time.innerText = (0,_unixTimeConverter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.time)\r\n\r\n  article.classList.add('news')\r\n\r\n  newsSection.append(article, horizontalRule);\r\n  article.append(title, time)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (append);\r\n\n\n//# sourceURL=webpack://progetto/./src/js/dataProcessor/appendData.js?");

/***/ }),

/***/ "./src/js/dataProcessor/unixTimeConverter.js":
/*!***************************************************!*\
  !*** ./src/js/dataProcessor/unixTimeConverter.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timeCalculator(data){\r\n  const unixTime = data * 1000\r\n  const monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\r\n  const unixDate = new Date (unixTime)\r\n  const minutes = Math.floor((Date.now() - unixDate) / 1000 / 60)\r\n  const hours = Math.floor((Date.now() - unixDate) / 1000 / 60 / 60)\r\n  const day = unixDate.getDate()\r\n  const month = monthNames[unixDate.getMonth()]\r\n  const newsDate =  month + ' ' + day\r\n\r\n  if (minutes == 0) return 'Loaded now - ' + newsDate\r\n  if (minutes == 1 ) return minutes + ' minute ago - ' + newsDate\r\n  if (minutes < 60) return minutes + ' minutes ago - ' + newsDate\r\n  if (hours == 1) return hours + ' hour ago - ' + newsDate\r\n  if (hours < 24) return hours + ' hours ago - ' + newsDate\r\n  else return newsDate\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeCalculator);\r\n\n\n//# sourceURL=webpack://progetto/./src/js/dataProcessor/unixTimeConverter.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_apiCalls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/apiCalls.js */ \"./src/js/api/apiCalls.js\");\n\r\n\r\n(0,_api_apiCalls_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\n\n//# sourceURL=webpack://progetto/./src/js/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;