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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/vsc */ \"(app-client)/./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _SidebarOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarOption */ \"(app-client)/./src/components/SidebarOption.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ \"(app-client)/./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"(app-client)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ \"(app-client)/./node_modules/react-icons/bs/index.esm.js\");\n// use client\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst style = {\n    wrapper: \"flex-[0.7] px-8 flex flex-col\",\n    twitterIconContainer: \"text-3xl m-4\",\n    tweetButton: \"bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer\",\n    navContainer: \"flex-1\",\n    profileButton: \"flex items-center mb-6 cursor-pointer hover:bg-[#333c45 rounded-[100px] p-2\",\n    profileLeft: \"flex item-center justify-center mr-4\",\n    profileImage: \"h-12 w-12 rounded-full\",\n    profileRight: \"flex-1 flex\",\n    details: \"flex-1\",\n    name: \"text-lg\",\n    handle: \"text-[#8899a6]\",\n    moreContainer: \"flex items-center mr-2\"\n};\nfunction Sidebar(param) {\n    let { initialSelectedIcon = \"Home\" } = param;\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialSelectedIcon);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.twitterIconContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__.VscTwitter, {}, void 0, false, {\n                    fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.navContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Home\" ? react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiHome7Fill : react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiHome7Line,\n                        text: \"Home\",\n                        isActive: Boolean(setSelected === \"Home\"),\n                        setSelected: setSelected,\n                        redirect: \"/\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Explore\" ? react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaHashtag : react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiHash,\n                        text: \"Explore\",\n                        isActive: Boolean(setSelected === \"Explore\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Notifications\" ? react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaBell : react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiBell,\n                        text: \"Notifications\",\n                        isActive: Boolean(setSelected === \"Notifications\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Messages\" ? react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiMail : react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineMail,\n                        text: \"Messages\",\n                        isActive: Boolean(setSelected === \"Messages\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Bookmarks\" ? react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsBookmarkFill : react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsBookmark,\n                        text: \"Bookmarks\",\n                        isActive: Boolean(setSelected === \"Bookmarks\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Lists\" ? react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiFileList2Fill : react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaRegListAlt,\n                        text: \"Lists\",\n                        isActive: Boolean(setSelected === \"Lists\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Profile\" ? react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsBookmarkFill : react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsBookmark,\n                        text: \"Profile\",\n                        isActive: Boolean(setSelected === \"Profile\"),\n                        setSelected: setSelected,\n                        redirect: \"/profile\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Notifications\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Messages\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Bookmarks\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Lists\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"More\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.tweetButton,\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.profileButton,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.profileLeft\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.profileRight,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.details,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.name,\n                                        children: \"Johnie261\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.handle,\n                                        children: \"@0x55de...6xf3\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.moreContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiMoreHorizontal, {}, void 0, false, {\n                                    fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"ZeRR+dkw7DxtwZpv+8ID+iiI6RU=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTVEsWUFBWTs7MENBQ2hDLDhEQUFDUztnQ0FBSUMsV0FBV2xCLE1BQU1TLE9BQU87O2tEQUMzQiw4REFBQ1E7d0NBQUlDLFdBQVdsQixNQUFNVSxJQUFJO2tEQUFFOzs7Ozs7a0RBQzVCLDhEQUFDTzt3Q0FBSUMsV0FBV2xCLE1BQU1XLE1BQU07a0RBQUU7Ozs7Ozs7Ozs7OzswQ0FFaEMsOERBQUNNO2dDQUFJQyxXQUFXbEIsTUFBTVksYUFBYTswQ0FDakMsNEVBQUN2Qiw0REFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCO0dBMUVTd0I7S0FBQUE7QUE0RVQsK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qcz85ZWJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHVzZSBjbGllbnRcbid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgVnNjVHdpdHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy92c2NcIlxuaW1wb3J0IFNpZGViYXJPcHRpb24gZnJvbSBcIi4vU2lkZWJhck9wdGlvblwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBSaUhvbWU3TGluZSwgUmlIb21lN0ZpbGwsIFJpRmlsZUxpc3QyRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJ1xuaW1wb3J0IHsgQmlIYXNoIH0gZnJvbSAncmVhY3QtaWNvbnMvYmknXG5pbXBvcnQgeyBGaUJlbGwsIEZpTW9yZUhvcml6b250YWwgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcbmltcG9ydCB7IEhpT3V0bGluZU1haWwsIEhpTWFpbCB9IGZyb20gJ3JlYWN0LWljb25zL2hpJ1xuaW1wb3J0IHsgRmFSZWdMaXN0QWx0LCBGYUhhc2h0YWcsIEZhQmVsbCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IHsgQ2dNb3JlTyB9IGZyb20gJ3JlYWN0LWljb25zL2NnJ1xuaW1wb3J0IHtcbiAgQnNCb29rbWFyayxcbiAgQnNCb29rbWFya0ZpbGwsXG4gIEJzUGVyc29uLFxuICBCc1BlcnNvbkZpbGwsXG59IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgd3JhcHBlcjogYGZsZXgtWzAuN10gcHgtOCBmbGV4IGZsZXgtY29sYCxcbiAgdHdpdHRlckljb25Db250YWluZXI6IGB0ZXh0LTN4bCBtLTRgLFxuICB0d2VldEJ1dHRvbjogYGJnLVsjMWQ5YmYwXSBob3ZlcjpiZy1bIzFiOGNkOF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIHJvdW5kZWQtM3hsIGgtWzUwcHhdIG10LVsyMHB4XSBjdXJzb3ItcG9pbnRlcmAsXG4gIG5hdkNvbnRhaW5lcjogYGZsZXgtMWAsXG4gIHByb2ZpbGVCdXR0b246IGBmbGV4IGl0ZW1zLWNlbnRlciBtYi02IGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLVsjMzMzYzQ1IHJvdW5kZWQtWzEwMHB4XSBwLTJgLFxuICBwcm9maWxlTGVmdDogYGZsZXggaXRlbS1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXItNGAsXG4gIHByb2ZpbGVJbWFnZTogYGgtMTIgdy0xMiByb3VuZGVkLWZ1bGxgLFxuICBwcm9maWxlUmlnaHQ6IGBmbGV4LTEgZmxleGAsXG4gIGRldGFpbHM6IGBmbGV4LTFgLFxuICBuYW1lOiBgdGV4dC1sZ2AsXG4gIGhhbmRsZTogYHRleHQtWyM4ODk5YTZdYCxcbiAgbW9yZUNvbnRhaW5lcjogYGZsZXggaXRlbXMtY2VudGVyIG1yLTJgLFxufVxuXG5mdW5jdGlvbiBTaWRlYmFyKHtpbml0aWFsU2VsZWN0ZWRJY29uID0gJ0hvbWUnfSkge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGluaXRpYWxTZWxlY3RlZEljb24pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnR3aXR0ZXJJY29uQ29udGFpbmVyfT5cbiAgICAgICAgPFZzY1R3aXR0ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkNvbnRhaW5lcn0+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uIFxuICAgICAgICAgIEljb249e3NlbGVjdGVkID09PSAnSG9tZScgPyBSaUhvbWU3RmlsbCA6IFJpSG9tZTdMaW5lfVxuICAgICAgICAgIHRleHQ9XCJIb21lXCJcbiAgICAgICAgICBpc0FjdGl2ZT17Qm9vbGVhbihzZXRTZWxlY3RlZCA9PT0gJ0hvbWUnKX1cbiAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XG4gICAgICAgICAgcmVkaXJlY3Q9eycvJ31cbiAgICAgICAgLz5cbiAgICAgICAgPFNpZGViYXJPcHRpb24gXG4gICAgICAgICAgSWNvbj17c2VsZWN0ZWQgPT09ICdFeHBsb3JlJyA/IEZhSGFzaHRhZyA6IEJpSGFzaH1cbiAgICAgICAgICB0ZXh0PVwiRXhwbG9yZVwiXG4gICAgICAgICAgaXNBY3RpdmU9e0Jvb2xlYW4oc2V0U2VsZWN0ZWQgPT09ICdFeHBsb3JlJyl9XG4gICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAvPlxuICAgICAgICA8U2lkZWJhck9wdGlvbiBcbiAgICAgICAgICBJY29uPXtzZWxlY3RlZCA9PT0gJ05vdGlmaWNhdGlvbnMnID8gRmFCZWxsIDogRmlCZWxsfVxuICAgICAgICAgIHRleHQ9XCJOb3RpZmljYXRpb25zXCJcbiAgICAgICAgICBpc0FjdGl2ZT17Qm9vbGVhbihzZXRTZWxlY3RlZCA9PT0gJ05vdGlmaWNhdGlvbnMnKX1cbiAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uIFxuICAgICAgICAgIEljb249e3NlbGVjdGVkID09PSAnTWVzc2FnZXMnID8gSGlNYWlsIDogSGlPdXRsaW5lTWFpbH1cbiAgICAgICAgICB0ZXh0PVwiTWVzc2FnZXNcIlxuICAgICAgICAgIGlzQWN0aXZlPXtCb29sZWFuKHNldFNlbGVjdGVkID09PSAnTWVzc2FnZXMnKX1cbiAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uIFxuICAgICAgICAgIEljb249e3NlbGVjdGVkID09PSAnQm9va21hcmtzJyA/IEJzQm9va21hcmtGaWxsIDogQnNCb29rbWFya31cbiAgICAgICAgICB0ZXh0PVwiQm9va21hcmtzXCJcbiAgICAgICAgICBpc0FjdGl2ZT17Qm9vbGVhbihzZXRTZWxlY3RlZCA9PT0gJ0Jvb2ttYXJrcycpfVxuICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFNpZGViYXJPcHRpb24gXG4gICAgICAgICAgSWNvbj17c2VsZWN0ZWQgPT09ICdMaXN0cycgPyBSaUZpbGVMaXN0MkZpbGwgOiBGYVJlZ0xpc3RBbHR9XG4gICAgICAgICAgdGV4dD1cIkxpc3RzXCJcbiAgICAgICAgICBpc0FjdGl2ZT17Qm9vbGVhbihzZXRTZWxlY3RlZCA9PT0gJ0xpc3RzJyl9XG4gICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAvPlxuICAgICAgICA8U2lkZWJhck9wdGlvbiBcbiAgICAgICAgICBJY29uPXtzZWxlY3RlZCA9PT0gJ1Byb2ZpbGUnID8gQnNCb29rbWFya0ZpbGwgOiBCc0Jvb2ttYXJrfVxuICAgICAgICAgIHRleHQ9XCJQcm9maWxlXCJcbiAgICAgICAgICBpc0FjdGl2ZT17Qm9vbGVhbihzZXRTZWxlY3RlZCA9PT0gJ1Byb2ZpbGUnKX1cbiAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XG4gICAgICAgICAgcmVkaXJlY3Q9eycvcHJvZmlsZSd9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+Tm90aWZpY2F0aW9uczwvZGl2PlxuICAgICAgICA8ZGl2Pk1lc3NhZ2VzPC9kaXY+XG4gICAgICAgIDxkaXY+Qm9va21hcmtzPC9kaXY+XG4gICAgICAgIDxkaXY+TGlzdHM8L2Rpdj5cbiAgICAgICAgPGRpdj5Qcm9maWxlPC9kaXY+XG4gICAgICAgIDxkaXY+TW9yZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudHdlZXRCdXR0b259Pk1pbnQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2ZpbGVCdXR0b259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZmlsZUxlZnR9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZmlsZVJpZ2h0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZGV0YWlsc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmFtZX0+Sm9obmllMjYxPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGFuZGxlfT5AMHg1NWRlLi4uNnhmMzwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tb3JlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxGaU1vcmVIb3Jpem9udGFsIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhciJdLCJuYW1lcyI6WyJWc2NUd2l0dGVyIiwiU2lkZWJhck9wdGlvbiIsInVzZVN0YXRlIiwiUmlIb21lN0xpbmUiLCJSaUhvbWU3RmlsbCIsIlJpRmlsZUxpc3QyRmlsbCIsIkJpSGFzaCIsIkZpQmVsbCIsIkZpTW9yZUhvcml6b250YWwiLCJIaU91dGxpbmVNYWlsIiwiSGlNYWlsIiwiRmFSZWdMaXN0QWx0IiwiRmFIYXNodGFnIiwiRmFCZWxsIiwiQ2dNb3JlTyIsIkJzQm9va21hcmsiLCJCc0Jvb2ttYXJrRmlsbCIsIkJzUGVyc29uIiwiQnNQZXJzb25GaWxsIiwic3R5bGUiLCJ3cmFwcGVyIiwidHdpdHRlckljb25Db250YWluZXIiLCJ0d2VldEJ1dHRvbiIsIm5hdkNvbnRhaW5lciIsInByb2ZpbGVCdXR0b24iLCJwcm9maWxlTGVmdCIsInByb2ZpbGVJbWFnZSIsInByb2ZpbGVSaWdodCIsImRldGFpbHMiLCJuYW1lIiwiaGFuZGxlIiwibW9yZUNvbnRhaW5lciIsIlNpZGViYXIiLCJpbml0aWFsU2VsZWN0ZWRJY29uIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImRpdiIsImNsYXNzTmFtZSIsIkljb24iLCJ0ZXh0IiwiaXNBY3RpdmUiLCJCb29sZWFuIiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar.js\n"));

/***/ })

});