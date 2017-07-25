'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _colors = require('../../styles/colors.js');

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