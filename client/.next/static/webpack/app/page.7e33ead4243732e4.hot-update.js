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

/***/ "(app-client)/./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/vsc */ \"(app-client)/./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _SidebarOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarOption */ \"(app-client)/./src/components/SidebarOption.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ \"(app-client)/./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n// use client\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst style = {\n    wrapper: \"flex-[0.7] px-8 flex flex-col\",\n    twitterIconContainer: \"text-3xl m-4\",\n    tweetButton: \"bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer\",\n    navContainer: \"flex-1\",\n    profileButton: \"flex items-center mb-6 cursor-pointer hover:bg-[#333c45 rounded-[100px] p-2\",\n    profileLeft: \"flex item-center justify-center mr-4\",\n    profileImage: \"h-12 w-12 rounded-full\",\n    profileRight: \"flex-1 flex\",\n    details: \"flex-1\",\n    name: \"text-lg\",\n    handle: \"text-[#8899a6]\",\n    moreContainer: \"flex items-center mr-2\"\n};\nfunction Sidebar(param) {\n    let { initialSelectedIcon = \"Home\" } = param;\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialSelectedIcon);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.twitterIconContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__.VscTwitter, {}, void 0, false, {\n                    fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.navContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Home\" ? react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiHome7Fill : react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiHome7Line,\n                        text: \"Home\",\n                        isActive: Boolean(setSelected === \"Home\"),\n                        redirect: \"/\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Explore\" ? react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaHashtag : react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiHash,\n                        text: \"Explore\",\n                        isActive: Boolean(setSelected === \"Explore\")\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Notifications\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Messages\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Bookmarks\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Lists\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"More\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.tweetButton,\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.profileButton,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.profileLeft\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.profileRight,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.details,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.name,\n                                        children: \"Johnie261\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.handle,\n                                        children: \"@0x55de...6xf3\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.moreContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiMoreHorizontal, {}, void 0, false, {\n                                    fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"ZeRR+dkw7DxtwZpv+8ID+iiI6RU=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsYUFBYTs7O0FBRytCO0FBQ0Q7QUFDWDtBQUMwQztBQUNuQztBQUNrQjtBQUNIO0FBQ1U7QUFDeEI7QUFFeEMsTUFBTWUsUUFBUTtJQUNaQyxTQUFVO0lBQ1ZDLHNCQUF1QjtJQUN2QkMsYUFBYztJQUNkQyxjQUFlO0lBQ2ZDLGVBQWdCO0lBQ2hCQyxhQUFjO0lBQ2RDLGNBQWU7SUFDZkMsY0FBZTtJQUNmQyxTQUFVO0lBQ1ZDLE1BQU87SUFDUEMsUUFBUztJQUNUQyxlQUFnQjtBQUNsQjtBQUVBLFNBQVNDLFFBQVEsS0FBOEI7UUFBOUIsRUFBQ0Msc0JBQXNCLE1BQU0sRUFBQyxHQUE5Qjs7SUFDZixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBRzdCLCtDQUFRQSxDQUFDMkI7SUFDekMscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdsQixNQUFNQyxPQUFPOzswQkFDM0IsOERBQUNnQjtnQkFBSUMsV0FBV2xCLE1BQU1FLG9CQUFvQjswQkFDeEMsNEVBQUNqQix1REFBVUE7Ozs7Ozs7Ozs7MEJBRWIsOERBQUNnQztnQkFBSUMsV0FBV2xCLE1BQU1JLFlBQVk7O2tDQUNoQyw4REFBQ2xCLHNEQUFhQTt3QkFDWmlDLE1BQU1KLGFBQWEsU0FBUzFCLHVEQUFXQSxHQUFHRCx1REFBV0E7d0JBQ3JEZ0MsTUFBSzt3QkFDTEMsVUFBVUMsUUFBUU4sZ0JBQWdCO3dCQUNsQ08sVUFBVTs7Ozs7O2tDQUVaLDhEQUFDckMsc0RBQWFBO3dCQUNaaUMsTUFBTUosYUFBYSxZQUFZbEIscURBQVNBLEdBQUdOLGtEQUFNQTt3QkFDakQ2QixNQUFLO3dCQUNMQyxVQUFVQyxRQUFRTixnQkFBZ0I7Ozs7OztrQ0FFcEMsOERBQUNDO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNBO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNBO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNBO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNBO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNBO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNBO3dCQUFJQyxXQUFXbEIsTUFBTUcsV0FBVztrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUVyQyw4REFBQ2M7Z0JBQUlDLFdBQVdsQixNQUFNSyxhQUFhOztrQ0FDakMsOERBQUNZO3dCQUFJQyxXQUFXbEIsTUFBTU0sV0FBVzs7Ozs7O2tDQUNqQyw4REFBQ1c7d0JBQUlDLFdBQVdsQixNQUFNUSxZQUFZOzswQ0FDaEMsOERBQUNTO2dDQUFJQyxXQUFXbEIsTUFBTVMsT0FBTzs7a0RBQzNCLDhEQUFDUTt3Q0FBSUMsV0FBV2xCLE1BQU1VLElBQUk7a0RBQUU7Ozs7OztrREFDNUIsOERBQUNPO3dDQUFJQyxXQUFXbEIsTUFBTVcsTUFBTTtrREFBRTs7Ozs7Ozs7Ozs7OzBDQUVoQyw4REFBQ007Z0NBQUlDLFdBQVdsQixNQUFNWSxhQUFhOzBDQUNqQyw0RUFBQ25CLDREQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0I7R0F6Q1NvQjtLQUFBQTtBQTJDVCwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLmpzPzllYmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlIGNsaWVudFxuJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBWc2NUd2l0dGVyIH0gZnJvbSBcInJlYWN0LWljb25zL3ZzY1wiXG5pbXBvcnQgU2lkZWJhck9wdGlvbiBmcm9tIFwiLi9TaWRlYmFyT3B0aW9uXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFJpSG9tZTdMaW5lLCBSaUhvbWU3RmlsbCwgUmlGaWxlTGlzdDJGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknXG5pbXBvcnQgeyBCaUhhc2ggfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcbmltcG9ydCB7IEZpQmVsbCwgRmlNb3JlSG9yaXpvbnRhbCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHsgSGlPdXRsaW5lTWFpbCwgSGlNYWlsIH0gZnJvbSAncmVhY3QtaWNvbnMvaGknXG5pbXBvcnQgeyBGYVJlZ0xpc3RBbHQsIEZhSGFzaHRhZywgRmFCZWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5pbXBvcnQgeyBDZ01vcmVPIH0gZnJvbSAncmVhY3QtaWNvbnMvY2cnXG5cbmNvbnN0IHN0eWxlID0ge1xuICB3cmFwcGVyOiBgZmxleC1bMC43XSBweC04IGZsZXggZmxleC1jb2xgLFxuICB0d2l0dGVySWNvbkNvbnRhaW5lcjogYHRleHQtM3hsIG0tNGAsXG4gIHR3ZWV0QnV0dG9uOiBgYmctWyMxZDliZjBdIGhvdmVyOmJnLVsjMWI4Y2Q4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgcm91bmRlZC0zeGwgaC1bNTBweF0gbXQtWzIwcHhdIGN1cnNvci1wb2ludGVyYCxcbiAgbmF2Q29udGFpbmVyOiBgZmxleC0xYCxcbiAgcHJvZmlsZUJ1dHRvbjogYGZsZXggaXRlbXMtY2VudGVyIG1iLTYgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctWyMzMzNjNDUgcm91bmRlZC1bMTAwcHhdIHAtMmAsXG4gIHByb2ZpbGVMZWZ0OiBgZmxleCBpdGVtLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtci00YCxcbiAgcHJvZmlsZUltYWdlOiBgaC0xMiB3LTEyIHJvdW5kZWQtZnVsbGAsXG4gIHByb2ZpbGVSaWdodDogYGZsZXgtMSBmbGV4YCxcbiAgZGV0YWlsczogYGZsZXgtMWAsXG4gIG5hbWU6IGB0ZXh0LWxnYCxcbiAgaGFuZGxlOiBgdGV4dC1bIzg4OTlhNl1gLFxuICBtb3JlQ29udGFpbmVyOiBgZmxleCBpdGVtcy1jZW50ZXIgbXItMmAsXG59XG5cbmZ1bmN0aW9uIFNpZGViYXIoe2luaXRpYWxTZWxlY3RlZEljb24gPSAnSG9tZSd9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoaW5pdGlhbFNlbGVjdGVkSWNvbilcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudHdpdHRlckljb25Db250YWluZXJ9PlxuICAgICAgICA8VnNjVHdpdHRlciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2Q29udGFpbmVyfT5cbiAgICAgICAgPFNpZGViYXJPcHRpb24gXG4gICAgICAgICAgSWNvbj17c2VsZWN0ZWQgPT09ICdIb21lJyA/IFJpSG9tZTdGaWxsIDogUmlIb21lN0xpbmV9XG4gICAgICAgICAgdGV4dD1cIkhvbWVcIlxuICAgICAgICAgIGlzQWN0aXZlPXtCb29sZWFuKHNldFNlbGVjdGVkID09PSAnSG9tZScpfVxuICAgICAgICAgIHJlZGlyZWN0PXsnLyd9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uIFxuICAgICAgICAgIEljb249e3NlbGVjdGVkID09PSAnRXhwbG9yZScgPyBGYUhhc2h0YWcgOiBCaUhhc2h9XG4gICAgICAgICAgdGV4dD1cIkV4cGxvcmVcIlxuICAgICAgICAgIGlzQWN0aXZlPXtCb29sZWFuKHNldFNlbGVjdGVkID09PSAnRXhwbG9yZScpfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2Pk5vdGlmaWNhdGlvbnM8L2Rpdj5cbiAgICAgICAgPGRpdj5NZXNzYWdlczwvZGl2PlxuICAgICAgICA8ZGl2PkJvb2ttYXJrczwvZGl2PlxuICAgICAgICA8ZGl2Pkxpc3RzPC9kaXY+XG4gICAgICAgIDxkaXY+UHJvZmlsZTwvZGl2PlxuICAgICAgICA8ZGl2Pk1vcmU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnR3ZWV0QnV0dG9ufT5NaW50PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9maWxlQnV0dG9ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2ZpbGVMZWZ0fT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2ZpbGVSaWdodH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmRldGFpbHN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hbWV9PkpvaG5pZTI2MTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhhbmRsZX0+QDB4NTVkZS4uLjZ4ZjM8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubW9yZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8RmlNb3JlSG9yaXpvbnRhbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIiXSwibmFtZXMiOlsiVnNjVHdpdHRlciIsIlNpZGViYXJPcHRpb24iLCJ1c2VTdGF0ZSIsIlJpSG9tZTdMaW5lIiwiUmlIb21lN0ZpbGwiLCJSaUZpbGVMaXN0MkZpbGwiLCJCaUhhc2giLCJGaUJlbGwiLCJGaU1vcmVIb3Jpem9udGFsIiwiSGlPdXRsaW5lTWFpbCIsIkhpTWFpbCIsIkZhUmVnTGlzdEFsdCIsIkZhSGFzaHRhZyIsIkZhQmVsbCIsIkNnTW9yZU8iLCJzdHlsZSIsIndyYXBwZXIiLCJ0d2l0dGVySWNvbkNvbnRhaW5lciIsInR3ZWV0QnV0dG9uIiwibmF2Q29udGFpbmVyIiwicHJvZmlsZUJ1dHRvbiIsInByb2ZpbGVMZWZ0IiwicHJvZmlsZUltYWdlIiwicHJvZmlsZVJpZ2h0IiwiZGV0YWlscyIsIm5hbWUiLCJoYW5kbGUiLCJtb3JlQ29udGFpbmVyIiwiU2lkZWJhciIsImluaXRpYWxTZWxlY3RlZEljb24iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiSWNvbiIsInRleHQiLCJpc0FjdGl2ZSIsIkJvb2xlYW4iLCJyZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar.js\n"));

/***/ })

});