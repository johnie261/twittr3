"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/Home/Feed.js":
/*!**************************!*\
  !*** ./src/Home/Feed.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"(app-client)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _TweetBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TweetBox */ \"(app-client)/./src/Home/TweetBox.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n// const style = {\n//   wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,\n//   header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,\n//   headerTitle: `text-xl font-bold`,\n// }\nfunction Feed() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.header,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.headerTitle,\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/Home/Feed.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsStars, {}, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/Home/Feed.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/Home/Feed.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TweetBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/Home/Feed.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/Home/Feed.js\",\n        lineNumber: 14,\n        columnNumber: 7\n    }, this);\n}\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL0hvbWUvRmVlZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQUNQO0FBRWhDLGtCQUFrQjtBQUNsQiw4RUFBOEU7QUFDOUUsb0ZBQW9GO0FBQ3BGLHNDQUFzQztBQUN0QyxJQUFJO0FBRUosU0FBU0U7SUFDUCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV0MsTUFBTUMsT0FBTzs7MEJBQzNCLDhEQUFDSDtnQkFBSUMsV0FBV0MsTUFBTUUsTUFBTTs7a0NBQzFCLDhEQUFDSjt3QkFBSUMsV0FBV0MsTUFBTUcsV0FBVztrQ0FBRTs7Ozs7O2tDQUNuQyw4REFBQ1IsbURBQU9BOzs7Ozs7Ozs7OzswQkFFViw4REFBQ0MsaURBQVFBOzs7Ozs7Ozs7OztBQUdmO0tBVlNDO0FBWVQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0hvbWUvRmVlZC5qcz85NDdkIl0sInNvdXJjZXNDb250ZW50IjpbIiAgJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IEJzU3RhcnMgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCBUd2VldEJveCBmcm9tIFwiLi9Ud2VldEJveFwiO1xuXG4gIC8vIGNvbnN0IHN0eWxlID0ge1xuICAvLyAgIHdyYXBwZXI6IGBmbGV4LVsyXSBib3JkZXItciBib3JkZXItbCBib3JkZXItWyMzODQ0NGRdIG92ZXJmbG93LXktc2Nyb2xsYCxcbiAgLy8gICBoZWFkZXI6IGBzdGlja3kgdG9wLTAgYmctWyMxNTIwMmJdIHotMTAgcC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcmAsXG4gIC8vICAgaGVhZGVyVGl0bGU6IGB0ZXh0LXhsIGZvbnQtYm9sZGAsXG4gIC8vIH1cblxuICBmdW5jdGlvbiBGZWVkKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJUaXRsZX0+SG9tZTwvZGl2PlxuICAgICAgICAgIDxCc1N0YXJzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VHdlZXRCb3ggLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IEZlZWQ7Il0sIm5hbWVzIjpbIkJzU3RhcnMiLCJUd2VldEJveCIsIkZlZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndyYXBwZXIiLCJoZWFkZXIiLCJoZWFkZXJUaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/Home/Feed.js\n"));

/***/ })

});