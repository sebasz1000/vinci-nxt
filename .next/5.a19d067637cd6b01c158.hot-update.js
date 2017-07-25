webpackHotUpdate(5,{

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(622);

var _Layout2 = _interopRequireDefault(_Layout);

var _MuiThemeProvider = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"MuiThemeProvider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _AppBar = __webpack_require__(589);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactTapEventPlugin = __webpack_require__(626);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/dev/vinci-nxt/pages/index.js?entry';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';


var vinciTheme = getMuiTheme({
    palette: {
        textColor: '#455676'
    }
});

exports.default = function () {
    return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: vinciTheme, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }));
};
//injectTapEventPlugin();

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/dev/vinci-nxt/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/dev/vinci-nxt/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hMTlkMDY3NjM3Y2Q2YjAxYzE1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL2xheW91dC9MYXlvdXQuanMnXG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdNdWlUaGVtZVByb3ZpZGVyJ1xuLy9pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJ1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nXG5cbmNvbnN0IHZpbmNpVGhlbWUgPSBnZXRNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICB0ZXh0Q29sb3I6ICcjNDU1Njc2JyxcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIFxuICAgIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXt2aW5jaVRoZW1lfT5cbiAgICAgICAgPExheW91dCAvPlxuICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbilcbi8vaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUhBO0FBQ0E7QUFDQTtBQUVBOztBQU1BO0FBSkE7QUFEQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9