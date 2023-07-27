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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_errorMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/errorMessage.js */ \"./src/js/components/errorMessage.js\");\n/* harmony import */ var _components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loadingStatus.js */ \"./src/js/components/loadingStatus.js\");\n/* harmony import */ var _dataFetcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataFetcher.js */ \"./src/js/api/dataFetcher.js\");\n/* harmony import */ var _components_buttonEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buttonEvent.js */ \"./src/js/components/buttonEvent.js\");\n\n\n\n\n\nconst url = \"https://hacker-news.firebaseio.com/v0/newstories.json\";\nlet newsId;\nlet firstTenIds;\n\nasync function init() {\n  (0,_components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true);\n\n  try {\n    const response = await fetch(url);\n    newsId = await response.json();\n    firstTenIds = newsId.splice(0, 10);\n\n    (0,_dataFetcher_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(firstTenIds);\n    (0,_components_buttonEvent_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newsId);\n\n    return newsId;\n  } catch (err) {\n    (0,_components_errorMessage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  } finally {\n    (0,_components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://progetto/./src/js/api/apiCalls.js?");

/***/ }),

/***/ "./src/js/api/dataFetcher.js":
/*!***********************************!*\
  !*** ./src/js/api/dataFetcher.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_errorMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/errorMessage.js */ \"./src/js/components/errorMessage.js\");\n/* harmony import */ var _components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loadingStatus.js */ \"./src/js/components/loadingStatus.js\");\n/* harmony import */ var _dataProcessor_appendData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataProcessor/appendData.js */ \"./src/js/dataProcessor/appendData.js\");\n\n\n\n\nasync function fetcher(loadedData) {\n  (0,_components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true);\n\n  const promises = loadedData.map(async (value) => {\n    try {\n      const newsUrl = await fetch(\n        `https://hacker-news.firebaseio.com/v0/item/${value}.json`\n      );\n      const response = await newsUrl.json();\n      return response;\n    } catch (err) {\n      (0,_components_errorMessage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(err);\n      console.log(err);\n      return null;\n    }\n  });\n\n  try {\n    const responses = await Promise.all(promises);\n    responses.forEach((response) => (0,_dataProcessor_appendData_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(response));\n  } catch (err) {\n    console.error(err);\n  } finally {\n    (0,_components_loadingStatus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);\n\n\n//# sourceURL=webpack://progetto/./src/js/api/dataFetcher.js?");

/***/ }),

/***/ "./src/js/components/buttonEvent.js":
/*!******************************************!*\
  !*** ./src/js/components/buttonEvent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_dataFetcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/dataFetcher.js */ \"./src/js/api/dataFetcher.js\");\n\n\nconst btn = document.getElementById(\"button\");\nlet idList;\n\nbtn.addEventListener(\"click\", appendNextNews);\n\nfunction idsStorer(newsIds) {\n  idList = newsIds;\n}\n\nfunction appendNextNews() {\n  const firstTenIds = idList.splice(0, 10);\n  (0,_api_dataFetcher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(firstTenIds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (idsStorer);\n\n\n//# sourceURL=webpack://progetto/./src/js/components/buttonEvent.js?");

/***/ }),

/***/ "./src/js/components/errorMessage.js":
/*!*******************************************!*\
  !*** ./src/js/components/errorMessage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction error(err) {\n  const article = document.createElement(\"article\");\n  const horizontalRule = document.createElement(\"hr\");\n  const text = document.createElement(\"p\");\n\n  text.innerText = `An error occured: ${err}`;\n\n  newsSection.append(article, horizontalRule);\n  article.append(text);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (error);\n\n\n//# sourceURL=webpack://progetto/./src/js/components/errorMessage.js?");

/***/ }),

/***/ "./src/js/components/loadingStatus.js":
/*!********************************************!*\
  !*** ./src/js/components/loadingStatus.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction isLoading(value) {\n  const loading = document.getElementById(\"loading\");\n\n  if (value == true) loading.classList.remove(\"hidden\");\n  else loading.classList.add(\"hidden\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLoading);\n\n\n//# sourceURL=webpack://progetto/./src/js/components/loadingStatus.js?");

/***/ }),

/***/ "./src/js/dataProcessor/appendData.js":
/*!********************************************!*\
  !*** ./src/js/dataProcessor/appendData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _unixTimeConverter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unixTimeConverter.js */ \"./src/js/dataProcessor/unixTimeConverter.js\");\n\n\nconst newsSection = document.getElementById(\"newsSection\");\n\nasync function append(data) {\n  const article = document.createElement(\"article\");\n  const horizontalRule = document.createElement(\"hr\");\n\n  //Title\n  const title = document.createElement(\"h4\");\n  title.innerText = data.title;\n\n  //Content\n  const link = document.createElement(\"a\");\n  const text = document.createElement(\"p\");\n  const textContainer = document.createElement(\"div\");\n\n  if (data.url !== undefined) {\n    link.innerText = data.url;\n\n    article.append(link);\n\n    link.setAttribute(\"href\", data.url);\n    link.setAttribute(\"target\", \"_blank\");\n  } else {\n    article.append(textContainer);\n    textContainer.append(text);\n\n    text.setAttribute(\"id\", \"text\");\n    textContainer.setAttribute(\"class\", \"text-left\");\n\n    text.insertAdjacentHTML(\"afterbegin\", data.text);\n  }\n\n  //time\n  const time = document.createElement(\"p\");\n  time.innerText = (0,_unixTimeConverter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.time);\n\n  article.classList.add(\"news\");\n\n  newsSection.append(article, horizontalRule);\n  article.append(title, time);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (append);\n\n\n//# sourceURL=webpack://progetto/./src/js/dataProcessor/appendData.js?");

/***/ }),

/***/ "./src/js/dataProcessor/unixTimeConverter.js":
/*!***************************************************!*\
  !*** ./src/js/dataProcessor/unixTimeConverter.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timeCalculator(data) {\n  const unixTime = data * 1000;\n  const monthNames = [\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\",\n  ];\n  const unixDate = new Date(unixTime);\n  const minutes = Math.floor((Date.now() - unixDate) / 1000 / 60);\n  const hours = Math.floor((Date.now() - unixDate) / 1000 / 60 / 60);\n  const day = unixDate.getDate();\n  const month = monthNames[unixDate.getMonth()];\n  const newsDate = month + \" \" + day;\n\n  if (minutes == 0) return \"Loaded now - \" + newsDate;\n  if (minutes == 1) return minutes + \" minute ago - \" + newsDate;\n  if (minutes < 60) return minutes + \" minutes ago - \" + newsDate;\n  if (hours == 1) return hours + \" hour ago - \" + newsDate;\n  if (hours < 24) return hours + \" hours ago - \" + newsDate;\n  else return newsDate;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeCalculator);\n\n\n//# sourceURL=webpack://progetto/./src/js/dataProcessor/unixTimeConverter.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_apiCalls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/apiCalls.js */ \"./src/js/api/apiCalls.js\");\n\n\n(0,_api_apiCalls_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://progetto/./src/js/main.js?");

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