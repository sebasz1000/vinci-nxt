
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var blue = exports.blue = '#2c2e3b';
var grey = exports.grey = '#707070';
var greyLight = exports.greyLight = '#eeeeee';
var lime = exports.lime = '#c4de4a';
var limeLight = exports.limeLight = '#faffe3';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/dev/vinci-nxt/styles/colors.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/dev/vinci-nxt/styles/colors.js"); } } })();

/***/ }),

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

var _MuiThemeProvider = __webpack_require__(605);

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

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(556);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/dev/vinci-nxt/comps/layout/Header.js';

exports.default = function (props) {
    var colorr = _colors.blue;
    return _react2.default.createElement('header', {
        'data-jsx': 3703589088,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 3703589088,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('nav', {
        'data-jsx': 3703589088,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('div', { id: 'main-logo', 'data-jsx': 3703589088,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'Vinci'), _react2.default.createElement('img', { id: 'main-user-pic', className: 'right circle', src: 'http://i.dailymail.co.uk/i/pix/2016/05/23/22/348B850600000578-3605456-image-m-32_1464040491071.jpg', alt: 'User in session', 'data-jsx': 3703589088,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }))), _react2.default.createElement(_style2.default, {
        styleId: 3703589088,
        css: 'img[data-jsx="3703589088"]{width:42px;height:42px;border-radius:50%;float:right}nav[data-jsx="3703589088"]{padding:12px 14px;height:47px}nav[data-jsx="3703589088"] #main-logo[data-jsx="3703589088"]{color:#171717;font-size:24px;font-weight:bold;float:left}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBR21CLEFBQ0ksQUFDRCxXQUZpQixHQUVPLEtBRE4sSUFEMEIsT0FFTSxFQUQzQixVQUR5QyxNQUVILE1BRlEsS0FFSCIsImZpbGUiOiJjb21wcy9sYXlvdXQvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9kZXYvdmluY2ktbnh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyAsIHtibHVlICxsaW1lfSBmcm9tICcuLi8uLi9zdHlsZXMvY29sb3JzLmpzJ1xuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY29sb3JyID0gYmx1ZTtcbiAgICByZXR1cm4oXG4gICAgPGhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICA8bmF2PlxuICAgICAgICA8ZGl2IGlkPSdtYWluLWxvZ28nPlZpbmNpPC9kaXY+XG4gICAgICAgIDxpbWcgaWQ9J21haW4tdXNlci1waWMnIGNsYXNzTmFtZT0ncmlnaHQgY2lyY2xlJyBzcmM9J2h0dHA6Ly9pLmRhaWx5bWFpbC5jby51ay9pL3BpeC8yMDE2LzA1LzIzLzIyLzM0OEI4NTA2MDAwMDA1NzgtMzYwNTQ1Ni1pbWFnZS1tLTMyXzE0NjQwNDA0OTEwNzEuanBnJyBhbHQ9J1VzZXIgaW4gc2Vzc2lvbicvPlxuICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOjQycHg7XG4gICAgICAgIGhlaWdodDo0MnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgIH1cbiAgICBuYXZ7XG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xuICAgIGhlaWdodDogNDdweDtcbiAgICB9XG4gICAgbmF2ICNtYWluLWxvZ297XG4gICAgICAgIGNvbG9yOiMxNzE3MTc7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5mbG9hdDpsZWZ0O1xuICAgIH1cbiAgXG4gICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuKX0iXX0= */\n/*@ sourceURL=comps/layout/Header.js */'
    }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/dev/vinci-nxt/comps/layout/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/dev/vinci-nxt/comps/layout/Header.js"); } } })();

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(560);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(621);

var _Header2 = _interopRequireDefault(_Header);

var _colors = __webpack_require__(556);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/dev/vinci-nxt/comps/layout/Layout.js';

exports.default = function (props) {
    return _react2.default.createElement('div', { id: 'main', className: 'container', 'data-jsx': 4086285490,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), props.children, _react2.default.createElement(_style2.default, {
        styleId: 4086285490,
        css: '.container{max-width:90%;margin:0 auto}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXVCLEFBRzJCLGVBQTJCLGVBQVMiLCJmaWxlIjoiY29tcHMvbGF5b3V0L0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvZGV2L3ZpbmNpLW54dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgY29sb3JzICwge2JsdWV9IGZyb20gJy4uLy4uL3N0eWxlcy9jb2xvcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICAgIDxkaXYgaWQ9J21haW4nIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=comps/layout/Layout.js */'
    }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/dev/vinci-nxt/comps/layout/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/dev/vinci-nxt/comps/layout/Layout.js"); } } })();

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(561);


/***/ })

},[638]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlcy9jb2xvcnMuanM/MjE4N2ZiYSIsIndlYnBhY2s6Ly8vLi9wYWdlcz8yMTg3ZmJhIiwid2VicGFjazovLy8uL2NvbXBzL2xheW91dC9IZWFkZXIuanM/MjE4N2ZiYSIsIndlYnBhY2s6Ly8vLi9jb21wcy9sYXlvdXQvTGF5b3V0LmpzPzIxODdmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJsdWUgPSAnIzJjMmUzYic7XG5leHBvcnQgY29uc3QgZ3JleSA9ICcjNzA3MDcwJztcbmV4cG9ydCBjb25zdCBncmV5TGlnaHQgPSAnI2VlZWVlZSc7XG5leHBvcnQgY29uc3QgbGltZSA9ICcjYzRkZTRhJztcbmV4cG9ydCBjb25zdCBsaW1lTGlnaHQgPSAnI2ZhZmZlMyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3R5bGVzL2NvbG9ycy5qcyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvbGF5b3V0L0xheW91dC5qcydcbmltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJ1xuLy9pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJ1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gJ3JlYWN0LXRhcC1ldmVudC1wbHVnaW4nXG5cbmNvbnN0IHZpbmNpVGhlbWUgPSBnZXRNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgICB0ZXh0Q29sb3I6ICcjNDU1Njc2JyxcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIFxuICAgIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXt2aW5jaVRoZW1lfT5cbiAgICAgICAgPExheW91dCAvPlxuICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbilcbi8vaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBjb2xvcnMgLCB7Ymx1ZSAsbGltZX0gZnJvbSAnLi4vLi4vc3R5bGVzL2NvbG9ycy5qcydcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNvbG9yciA9IGJsdWU7XG4gICAgcmV0dXJuKFxuICAgIDxoZWFkZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgPG5hdj5cbiAgICAgICAgPGRpdiBpZD0nbWFpbi1sb2dvJz5WaW5jaTwvZGl2PlxuICAgICAgICA8aW1nIGlkPSdtYWluLXVzZXItcGljJyBjbGFzc05hbWU9J3JpZ2h0IGNpcmNsZScgc3JjPSdodHRwOi8vaS5kYWlseW1haWwuY28udWsvaS9waXgvMjAxNi8wNS8yMy8yMi8zNDhCODUwNjAwMDAwNTc4LTM2MDU0NTYtaW1hZ2UtbS0zMl8xNDY0MDQwNDkxMDcxLmpwZycgYWx0PSdVc2VyIGluIHNlc3Npb24nLz5cbiAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgaW1ne1xuICAgICAgICB3aWR0aDo0MnB4O1xuICAgICAgICBoZWlnaHQ6NDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmbG9hdDpyaWdodDtcbiAgICB9XG4gICAgbmF2e1xuICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgfVxuICAgIG5hdiAjbWFpbi1sb2dve1xuICAgICAgICBjb2xvcjojMTcxNzE3O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuZmxvYXQ6bGVmdDtcbiAgICB9XG4gIFxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbil9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcHMvbGF5b3V0L0hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgY29sb3JzICwge2JsdWV9IGZyb20gJy4uLy4uL3N0eWxlcy9jb2xvcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICAgIDxkaXYgaWQ9J21haW4nIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBzL2xheW91dC9MYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFIQTtBQUNBO0FBQ0E7QUFFQTs7QUFNQTtBQUpBO0FBREE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTs7Ozs7OztBQURBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBOztBQUpBO0FBMkJBO0FBM0JBO0FBSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        