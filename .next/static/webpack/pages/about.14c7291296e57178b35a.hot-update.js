webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_tywa_Documents_Freelance_MySite_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_tywa_Documents_Freelance_MySite_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/home/tywa/Documents/Freelance/MySite/components/Link.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_tywa_Documents_Freelance_MySite_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar ActiveLink = function ActiveLink(_ref) {\n  _s();\n\n  var children = _ref.children,\n      activeClassName = _ref.activeClassName,\n      props = Object(_home_tywa_Documents_Freelance_MySite_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\", \"activeClassName\"]);\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])(),\n      asPath = _useRouter.asPath;\n\n  var child = react__WEBPACK_IMPORTED_MODULE_3__[\"Children\"].only(children);\n  var childClassName = child.props.className || '';\n  var className = asPath === props.href || asPath === props.as ? \"\".concat(childClassName, \" \").concat(activeClassName).trim() : childClassName;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, {\n      className: className || null\n    })\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ActiveLink, \"2F48WNebuXCpWV2Gp8hgxMpYgEU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = ActiveLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveLink);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rLmpzPzYwZDgiXSwibmFtZXMiOlsiQWN0aXZlTGluayIsImNoaWxkcmVuIiwiYWN0aXZlQ2xhc3NOYW1lIiwicHJvcHMiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiaHJlZiIsImFzIiwidHJpbSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQ2YsU0FES0EsVUFDTCxPQUE2QztBQUFBOztBQUFBLE1BQTFDQyxRQUEwQyxRQUExQ0EsUUFBMEM7QUFBQSxNQUFoQ0MsZUFBZ0MsUUFBaENBLGVBQWdDO0FBQUEsTUFBWkMsS0FBWTs7QUFBQSxtQkFDMUJDLDZEQUFTLEVBRGlCO0FBQUEsTUFDcENDLE1BRG9DLGNBQ3BDQSxNQURvQzs7QUFFNUMsTUFBTUMsS0FBSyxHQUFHQyw4Q0FBUSxDQUFDQyxJQUFULENBQWNQLFFBQWQsQ0FBZDtBQUNBLE1BQU1RLGNBQWMsR0FBR0gsS0FBSyxDQUFDSCxLQUFOLENBQVlPLFNBQVosSUFBeUIsRUFBaEQ7QUFFQSxNQUFNQSxTQUFTLEdBQ2JMLE1BQU0sS0FBS0YsS0FBSyxDQUFDUSxJQUFqQixJQUF5Qk4sTUFBTSxLQUFLRixLQUFLLENBQUNTLEVBQTFDLEdBQ0UsVUFBR0gsY0FBSCxjQUFxQlAsZUFBckIsRUFBdUNXLElBQXZDLEVBREYsR0FFRUosY0FISjtBQUtBLHNCQUNFLHFFQUFDLGdEQUFELGtDQUFVTixLQUFWO0FBQUEsMkJBQ0dXLDRDQUFLLENBQUNDLFlBQU4sQ0FBbUJULEtBQW5CLEVBQTBCO0FBQUVJLGVBQVMsRUFBRUEsU0FBUyxJQUFJO0FBQTFCLEtBQTFCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FoQkQ7O0dBQU1WLFU7VUFFY0kscUQ7OztLQUZkSixVO0FBaUJTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGluay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEFjdGl2ZUxpbmsgPSBcbiAoeyBjaGlsZHJlbiwgYWN0aXZlQ2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgYXNQYXRofSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGNoaWxkID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRDbGFzc05hbWUgPSBjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJydcblxuICBjb25zdCBjbGFzc05hbWUgPSBcbiAgICBhc1BhdGggPT09IHByb3BzLmhyZWYgfHwgYXNQYXRoID09PSBwcm9wcy5hc1xuICAgID8gYCR7Y2hpbGRDbGFzc05hbWV9ICR7YWN0aXZlQ2xhc3NOYW1lfWAudHJpbSgpXG4gICAgOiBjaGlsZENsYXNzTmFtZVxuXG4gIHJldHVybiAoXG4gICAgPExpbmsgey4uLnByb3BzfT5cbiAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfHwgbnVsbCB9KX1cbiAgICA8L0xpbms+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZUxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Link.js\n");

/***/ })

})