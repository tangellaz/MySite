webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_tywa_Documents_Freelance_MySite_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_tywa_Documents_Freelance_MySite_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _home_tywa_Documents_Freelance_MySite_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ \"./node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/home/tywa/Documents/Freelance/MySite/components/Link.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_tywa_Documents_Freelance_MySite_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar ActiveLink = function ActiveLink(_ref) {\n  _s();\n\n  var children = _ref.children,\n      activeClassName = _ref.activeClassName,\n      props = Object(_home_tywa_Documents_Freelance_MySite_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\", \"activeClassName\"]);\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(),\n      asPath = _useRouter.asPath;\n\n  var child = react__WEBPACK_IMPORTED_MODULE_4__[\"Children\"].only(children);\n  var childClassName = child.props.className || '';\n  var className = asPath === props.href || asPath === props.as ? \"\".concat(childClassName, \" \").concat(activeClassName).trim() : childClassName; // let className = children.props.className || ''\n  // console.log('LOGGGGG')\n  // console.log('className=',className)\n\n  if (router.pathname === href) {\n    // className = `${className} selected`;\n    className = (Object(_home_tywa_Documents_Freelance_MySite_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"className\"), \"\".concat(className, \" \").concat(activeClassName).trim()); // className = `${className}-selected`;\n    // className = `${className}`;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {\n      className: className || null\n    })\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ActiveLink, \"2F48WNebuXCpWV2Gp8hgxMpYgEU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = ActiveLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveLink);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rLmpzPzYwZDgiXSwibmFtZXMiOlsiQWN0aXZlTGluayIsImNoaWxkcmVuIiwiYWN0aXZlQ2xhc3NOYW1lIiwicHJvcHMiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiaHJlZiIsImFzIiwidHJpbSIsInJvdXRlciIsInBhdGhuYW1lIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUNmLFNBREtBLFVBQ0wsT0FBNkM7QUFBQTs7QUFBQSxNQUExQ0MsUUFBMEMsUUFBMUNBLFFBQTBDO0FBQUEsTUFBaENDLGVBQWdDLFFBQWhDQSxlQUFnQztBQUFBLE1BQVpDLEtBQVk7O0FBQUEsbUJBQzFCQyw2REFBUyxFQURpQjtBQUFBLE1BQ3BDQyxNQURvQyxjQUNwQ0EsTUFEb0M7O0FBRTVDLE1BQU1DLEtBQUssR0FBR0MsOENBQVEsQ0FBQ0MsSUFBVCxDQUFjUCxRQUFkLENBQWQ7QUFDQSxNQUFNUSxjQUFjLEdBQUdILEtBQUssQ0FBQ0gsS0FBTixDQUFZTyxTQUFaLElBQXlCLEVBQWhEO0FBRUEsTUFBTUEsU0FBUyxHQUNiTCxNQUFNLEtBQUtGLEtBQUssQ0FBQ1EsSUFBakIsSUFBeUJOLE1BQU0sS0FBS0YsS0FBSyxDQUFDUyxFQUExQyxHQUNFLFVBQUdILGNBQUgsY0FBcUJQLGVBQXJCLEVBQXVDVyxJQUF2QyxFQURGLEdBRUVKLGNBSEosQ0FMNEMsQ0FVNUM7QUFDQTtBQUNBOztBQUdBLE1BQUlLLE1BQU0sQ0FBQ0MsUUFBUCxLQUFvQkosSUFBeEIsRUFBOEI7QUFDNUI7QUFDQUQsYUFBUyw2SkFBRyxVQUFHQSxTQUFILGNBQWdCUixlQUFoQixFQUFrQ1csSUFBbEMsRUFBSCxDQUFULENBRjRCLENBRzVCO0FBQ0E7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxnREFBRCxrQ0FBVVYsS0FBVjtBQUFBLDJCQUNHYSw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CWCxLQUFuQixFQUEwQjtBQUFFSSxlQUFTLEVBQUVBLFNBQVMsSUFBSTtBQUExQixLQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBNUJEOztHQUFNVixVO1VBRWNJLHFEOzs7S0FGZEosVTtBQTZCU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmsuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBBY3RpdmVMaW5rID0gXG4gKHsgY2hpbGRyZW4sIGFjdGl2ZUNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGFzUGF0aH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBjaGlsZCA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkQ2xhc3NOYW1lID0gY2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnXG5cbiAgY29uc3QgY2xhc3NOYW1lID0gXG4gICAgYXNQYXRoID09PSBwcm9wcy5ocmVmIHx8IGFzUGF0aCA9PT0gcHJvcHMuYXNcbiAgICA/IGAke2NoaWxkQ2xhc3NOYW1lfSAke2FjdGl2ZUNsYXNzTmFtZX1gLnRyaW0oKVxuICAgIDogY2hpbGRDbGFzc05hbWVcblxuICAvLyBsZXQgY2xhc3NOYW1lID0gY2hpbGRyZW4ucHJvcHMuY2xhc3NOYW1lIHx8ICcnXG4gIC8vIGNvbnNvbGUubG9nKCdMT0dHR0dHJylcbiAgLy8gY29uc29sZS5sb2coJ2NsYXNzTmFtZT0nLGNsYXNzTmFtZSlcblxuXG4gIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09IGhyZWYpIHtcbiAgICAvLyBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IHNlbGVjdGVkYDtcbiAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9ICR7YWN0aXZlQ2xhc3NOYW1lfWAudHJpbSgpO1xuICAgIC8vIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0tc2VsZWN0ZWRgO1xuICAgIC8vIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayB7Li4ucHJvcHN9PlxuICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB8fCBudWxsIH0pfVxuICAgIDwvTGluaz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlTGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Link.js\n");

/***/ })

})