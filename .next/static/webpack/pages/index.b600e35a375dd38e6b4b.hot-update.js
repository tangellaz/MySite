webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/tywa/Documents/Freelance/MySite/components/Link.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ActiveLink = function ActiveLink(_ref) {\n  _s();\n\n  var href = _ref.href,\n      children = _ref.children,\n      activeClassName = _ref.activeClassName;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var className = children.props.className || '';\n  console.log('LOGGGGG');\n  console.log('className=', className);\n\n  if (router.pathname === href) {\n    // className = `${className} selected`;\n    className = \"\".concat(className, \" \").concat(activeClassName).trim(); // className = `${className}-selected`;\n    // className = `${className}`;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: href,\n    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {\n      className: className\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ActiveLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = ActiveLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveLink);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiveLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rLmpzPzYwZDgiXSwibmFtZXMiOlsiQWN0aXZlTGluayIsImhyZWYiLCJjaGlsZHJlbiIsImFjdGl2ZUNsYXNzTmFtZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNsYXNzTmFtZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwidHJpbSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUNmLFNBREtBLFVBQ0wsT0FBeUM7QUFBQTs7QUFBQSxNQUF0Q0MsSUFBc0MsUUFBdENBLElBQXNDO0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7QUFDeEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQUlDLFNBQVMsR0FBR0osUUFBUSxDQUFDSyxLQUFULENBQWVELFNBQWYsSUFBNEIsRUFBNUM7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQXlCSCxTQUF6Qjs7QUFDQSxNQUFJRixNQUFNLENBQUNNLFFBQVAsS0FBb0JULElBQXhCLEVBQThCO0FBQzVCO0FBQ0FLLGFBQVMsR0FBRyxVQUFHQSxTQUFILGNBQWdCSCxlQUFoQixFQUFrQ1EsSUFBbEMsRUFBWixDQUY0QixDQUc1QjtBQUNBO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVWLElBQVo7QUFBQSwyQkFDR1csNENBQUssQ0FBQ0MsWUFBTixDQUFtQlgsUUFBbkIsRUFBNkI7QUFBRUksZUFBUyxFQUFFQTtBQUFiLEtBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FuQkQ7O0dBQU1OLFU7VUFFV0sscUQ7OztLQUZYTCxVO0FBb0JTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGluay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBBY3RpdmVMaW5rID0gXG4gKHsgaHJlZiwgY2hpbGRyZW4sIGFjdGl2ZUNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgbGV0IGNsYXNzTmFtZSA9IGNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSB8fCAnJ1xuICBjb25zb2xlLmxvZygnTE9HR0dHRycpXG4gIGNvbnNvbGUubG9nKCdjbGFzc05hbWU9JyxjbGFzc05hbWUpXG4gIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09IGhyZWYpIHtcbiAgICAvLyBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IHNlbGVjdGVkYDtcbiAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9ICR7YWN0aXZlQ2xhc3NOYW1lfWAudHJpbSgpO1xuICAgIC8vIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0tc2VsZWN0ZWRgO1xuICAgIC8vIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSl9XG4gICAgPC9MaW5rPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBBY3RpdmVMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Link.js\n");

/***/ })

})