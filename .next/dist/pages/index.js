'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../comps/layout/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactTapEventPlugin = require('react-tap-event-plugin');

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