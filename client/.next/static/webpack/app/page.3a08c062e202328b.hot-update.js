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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/vsc */ \"(app-client)/./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _SidebarOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarOption */ \"(app-client)/./src/components/SidebarOption.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ \"(app-client)/./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"(app-client)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n// use client\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst style = {\n    wrapper: \"flex-[0.7] px-8 flex flex-col\",\n    twitterIconContainer: \"text-3xl m-4\",\n    tweetButton: \"bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer\",\n    navContainer: \"flex-1\",\n    profileButton: \"flex items-center mb-6 cursor-pointer hover:bg-[#333c45 rounded-[100px] p-2\",\n    profileLeft: \"flex item-center justify-center mr-4\",\n    profileImage: \"h-12 w-12 rounded-full\",\n    profileRight: \"flex-1 flex\",\n    details: \"flex-1\",\n    name: \"text-lg\",\n    handle: \"text-[#8899a6]\",\n    moreContainer: \"flex items-center mr-2\"\n};\nfunction Sidebar(param) {\n    let { initialSelectedIcon = \"Home\" } = param;\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialSelectedIcon);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.twitterIconContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__.VscTwitter, {}, void 0, false, {\n                    fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.navContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Home\" ? react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiHome7Fill : react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiHome7Line,\n                        text: \"Home\",\n                        isActive: Boolean(setSelected === \"Home\"),\n                        setSelected: setSelected,\n                        redirect: \"/\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Explore\" ? react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaHashtag : react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiHash,\n                        text: \"Explore\",\n                        isActive: Boolean(setSelected === \"Explore\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Notifications\" ? react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaBell : react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiBell,\n                        text: \"Notifications\",\n                        isActive: Boolean(setSelected === \"Notifications\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        Icon: selected === \"Messages\" ? react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiMail : react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineMail,\n                        text: \"Messages\",\n                        isActive: Boolean(setSelected === \"Explore\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Notifications\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Messages\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Bookmarks\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Lists\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"More\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.tweetButton,\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.profileButton,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.profileLeft\n                    }, void 0, false, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.profileRight,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.details,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.name,\n                                        children: \"Johnie261\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.handle,\n                                        children: \"@0x55de...6xf3\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.moreContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiMoreHorizontal, {}, void 0, false, {\n                                    fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tush007/Desktop/Web3/twitter3.0/client/src/components/Sidebar.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"ZeRR+dkw7DxtwZpv+8ID+iiI6RU=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGFBQWE7OztBQUcrQjtBQUNEO0FBQ1g7QUFDMEM7QUFDbkM7QUFDa0I7QUFDSDtBQUNVO0FBQ3hCO0FBRXhDLE1BQU1lLFFBQVE7SUFDWkMsU0FBVTtJQUNWQyxzQkFBdUI7SUFDdkJDLGFBQWM7SUFDZEMsY0FBZTtJQUNmQyxlQUFnQjtJQUNoQkMsYUFBYztJQUNkQyxjQUFlO0lBQ2ZDLGNBQWU7SUFDZkMsU0FBVTtJQUNWQyxNQUFPO0lBQ1BDLFFBQVM7SUFDVEMsZUFBZ0I7QUFDbEI7QUFFQSxTQUFTQyxRQUFRLEtBQThCO1FBQTlCLEVBQUNDLHNCQUFzQixNQUFNLEVBQUMsR0FBOUI7O0lBQ2YsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUc3QiwrQ0FBUUEsQ0FBQzJCO0lBQ3pDLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXbEIsTUFBTUMsT0FBTzs7MEJBQzNCLDhEQUFDZ0I7Z0JBQUlDLFdBQVdsQixNQUFNRSxvQkFBb0I7MEJBQ3hDLDRFQUFDakIsdURBQVVBOzs7Ozs7Ozs7OzBCQUViLDhEQUFDZ0M7Z0JBQUlDLFdBQVdsQixNQUFNSSxZQUFZOztrQ0FDaEMsOERBQUNsQixzREFBYUE7d0JBQ1ppQyxNQUFNSixhQUFhLFNBQVMxQix1REFBV0EsR0FBR0QsdURBQVdBO3dCQUNyRGdDLE1BQUs7d0JBQ0xDLFVBQVVDLFFBQVFOLGdCQUFnQjt3QkFDbENBLGFBQWFBO3dCQUNiTyxVQUFVOzs7Ozs7a0NBRVosOERBQUNyQyxzREFBYUE7d0JBQ1ppQyxNQUFNSixhQUFhLFlBQVlsQixxREFBU0EsR0FBR04sa0RBQU1BO3dCQUNqRDZCLE1BQUs7d0JBQ0xDLFVBQVVDLFFBQVFOLGdCQUFnQjt3QkFDbENBLGFBQWFBOzs7Ozs7a0NBRWYsOERBQUM5QixzREFBYUE7d0JBQ1ppQyxNQUFNSixhQUFhLGtCQUFrQmpCLGtEQUFNQSxHQUFHTixrREFBTUE7d0JBQ3BENEIsTUFBSzt3QkFDTEMsVUFBVUMsUUFBUU4sZ0JBQWdCO3dCQUNsQ0EsYUFBYUE7Ozs7OztrQ0FFZiw4REFBQzlCLHNEQUFhQTt3QkFDWmlDLE1BQU1KLGFBQWEsYUFBYXBCLGtEQUFNQSxHQUFHRCx5REFBYUE7d0JBQ3REMEIsTUFBSzt3QkFDTEMsVUFBVUMsUUFBUU4sZ0JBQWdCO3dCQUNsQ0EsYUFBYUE7Ozs7OztrQ0FFZiw4REFBQ0M7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7d0JBQUlDLFdBQVdsQixNQUFNRyxXQUFXO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDYztnQkFBSUMsV0FBV2xCLE1BQU1LLGFBQWE7O2tDQUNqQyw4REFBQ1k7d0JBQUlDLFdBQVdsQixNQUFNTSxXQUFXOzs7Ozs7a0NBQ2pDLDhEQUFDVzt3QkFBSUMsV0FBV2xCLE1BQU1RLFlBQVk7OzBDQUNoQyw4REFBQ1M7Z0NBQUlDLFdBQVdsQixNQUFNUyxPQUFPOztrREFDM0IsOERBQUNRO3dDQUFJQyxXQUFXbEIsTUFBTVUsSUFBSTtrREFBRTs7Ozs7O2tEQUM1Qiw4REFBQ087d0NBQUlDLFdBQVdsQixNQUFNVyxNQUFNO2tEQUFFOzs7Ozs7Ozs7Ozs7MENBRWhDLDhEQUFDTTtnQ0FBSUMsV0FBV2xCLE1BQU1ZLGFBQWE7MENBQ2pDLDRFQUFDbkIsNERBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03QjtHQXZEU29CO0tBQUFBO0FBeURULCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIuanM/OWViYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2UgY2xpZW50XG4ndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IFZzY1R3aXR0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvdnNjXCJcbmltcG9ydCBTaWRlYmFyT3B0aW9uIGZyb20gXCIuL1NpZGViYXJPcHRpb25cIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgUmlIb21lN0xpbmUsIFJpSG9tZTdGaWxsLCBSaUZpbGVMaXN0MkZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7IEJpSGFzaCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xuaW1wb3J0IHsgRmlCZWxsLCBGaU1vcmVIb3Jpem9udGFsIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5pbXBvcnQgeyBIaU91dGxpbmVNYWlsLCBIaU1haWwgfSBmcm9tICdyZWFjdC1pY29ucy9oaSdcbmltcG9ydCB7IEZhUmVnTGlzdEFsdCwgRmFIYXNodGFnLCBGYUJlbGwgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCB7IENnTW9yZU8gfSBmcm9tICdyZWFjdC1pY29ucy9jZydcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHdyYXBwZXI6IGBmbGV4LVswLjddIHB4LTggZmxleCBmbGV4LWNvbGAsXG4gIHR3aXR0ZXJJY29uQ29udGFpbmVyOiBgdGV4dC0zeGwgbS00YCxcbiAgdHdlZXRCdXR0b246IGBiZy1bIzFkOWJmMF0gaG92ZXI6YmctWyMxYjhjZDhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCByb3VuZGVkLTN4bCBoLVs1MHB4XSBtdC1bMjBweF0gY3Vyc29yLXBvaW50ZXJgLFxuICBuYXZDb250YWluZXI6IGBmbGV4LTFgLFxuICBwcm9maWxlQnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgbWItNiBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1bIzMzM2M0NSByb3VuZGVkLVsxMDBweF0gcC0yYCxcbiAgcHJvZmlsZUxlZnQ6IGBmbGV4IGl0ZW0tY2VudGVyIGp1c3RpZnktY2VudGVyIG1yLTRgLFxuICBwcm9maWxlSW1hZ2U6IGBoLTEyIHctMTIgcm91bmRlZC1mdWxsYCxcbiAgcHJvZmlsZVJpZ2h0OiBgZmxleC0xIGZsZXhgLFxuICBkZXRhaWxzOiBgZmxleC0xYCxcbiAgbmFtZTogYHRleHQtbGdgLFxuICBoYW5kbGU6IGB0ZXh0LVsjODg5OWE2XWAsXG4gIG1vcmVDb250YWluZXI6IGBmbGV4IGl0ZW1zLWNlbnRlciBtci0yYCxcbn1cblxuZnVuY3Rpb24gU2lkZWJhcih7aW5pdGlhbFNlbGVjdGVkSWNvbiA9ICdIb21lJ30pIHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShpbml0aWFsU2VsZWN0ZWRJY29uKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50d2l0dGVySWNvbkNvbnRhaW5lcn0+XG4gICAgICAgIDxWc2NUd2l0dGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZDb250YWluZXJ9PlxuICAgICAgICA8U2lkZWJhck9wdGlvbiBcbiAgICAgICAgICBJY29uPXtzZWxlY3RlZCA9PT0gJ0hvbWUnID8gUmlIb21lN0ZpbGwgOiBSaUhvbWU3TGluZX1cbiAgICAgICAgICB0ZXh0PVwiSG9tZVwiXG4gICAgICAgICAgaXNBY3RpdmU9e0Jvb2xlYW4oc2V0U2VsZWN0ZWQgPT09ICdIb21lJyl9XG4gICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAgIHJlZGlyZWN0PXsnLyd9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uIFxuICAgICAgICAgIEljb249e3NlbGVjdGVkID09PSAnRXhwbG9yZScgPyBGYUhhc2h0YWcgOiBCaUhhc2h9XG4gICAgICAgICAgdGV4dD1cIkV4cGxvcmVcIlxuICAgICAgICAgIGlzQWN0aXZlPXtCb29sZWFuKHNldFNlbGVjdGVkID09PSAnRXhwbG9yZScpfVxuICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFNpZGViYXJPcHRpb24gXG4gICAgICAgICAgSWNvbj17c2VsZWN0ZWQgPT09ICdOb3RpZmljYXRpb25zJyA/IEZhQmVsbCA6IEZpQmVsbH1cbiAgICAgICAgICB0ZXh0PVwiTm90aWZpY2F0aW9uc1wiXG4gICAgICAgICAgaXNBY3RpdmU9e0Jvb2xlYW4oc2V0U2VsZWN0ZWQgPT09ICdOb3RpZmljYXRpb25zJyl9XG4gICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAvPlxuICAgICAgICA8U2lkZWJhck9wdGlvbiBcbiAgICAgICAgICBJY29uPXtzZWxlY3RlZCA9PT0gJ01lc3NhZ2VzJyA/IEhpTWFpbCA6IEhpT3V0bGluZU1haWx9XG4gICAgICAgICAgdGV4dD1cIk1lc3NhZ2VzXCJcbiAgICAgICAgICBpc0FjdGl2ZT17Qm9vbGVhbihzZXRTZWxlY3RlZCA9PT0gJ0V4cGxvcmUnKX1cbiAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+Tm90aWZpY2F0aW9uczwvZGl2PlxuICAgICAgICA8ZGl2Pk1lc3NhZ2VzPC9kaXY+XG4gICAgICAgIDxkaXY+Qm9va21hcmtzPC9kaXY+XG4gICAgICAgIDxkaXY+TGlzdHM8L2Rpdj5cbiAgICAgICAgPGRpdj5Qcm9maWxlPC9kaXY+XG4gICAgICAgIDxkaXY+TW9yZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudHdlZXRCdXR0b259Pk1pbnQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2ZpbGVCdXR0b259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZmlsZUxlZnR9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZmlsZVJpZ2h0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZGV0YWlsc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmFtZX0+Sm9obmllMjYxPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGFuZGxlfT5AMHg1NWRlLi4uNnhmMzwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tb3JlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxGaU1vcmVIb3Jpem9udGFsIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhciJdLCJuYW1lcyI6WyJWc2NUd2l0dGVyIiwiU2lkZWJhck9wdGlvbiIsInVzZVN0YXRlIiwiUmlIb21lN0xpbmUiLCJSaUhvbWU3RmlsbCIsIlJpRmlsZUxpc3QyRmlsbCIsIkJpSGFzaCIsIkZpQmVsbCIsIkZpTW9yZUhvcml6b250YWwiLCJIaU91dGxpbmVNYWlsIiwiSGlNYWlsIiwiRmFSZWdMaXN0QWx0IiwiRmFIYXNodGFnIiwiRmFCZWxsIiwiQ2dNb3JlTyIsInN0eWxlIiwid3JhcHBlciIsInR3aXR0ZXJJY29uQ29udGFpbmVyIiwidHdlZXRCdXR0b24iLCJuYXZDb250YWluZXIiLCJwcm9maWxlQnV0dG9uIiwicHJvZmlsZUxlZnQiLCJwcm9maWxlSW1hZ2UiLCJwcm9maWxlUmlnaHQiLCJkZXRhaWxzIiwibmFtZSIsImhhbmRsZSIsIm1vcmVDb250YWluZXIiLCJTaWRlYmFyIiwiaW5pdGlhbFNlbGVjdGVkSWNvbiIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJJY29uIiwidGV4dCIsImlzQWN0aXZlIiwiQm9vbGVhbiIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar.js\n"));

/***/ })

});