"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollTop = function ScrollTop() {
  var location = (0, _reactRouterDom.useLocation)();

  _react.default.useEffect(function () {
    window.scrollTo(0, 0);
  }, [location]);

  return /*#__PURE__*/_react.default.createElement("div", null);
};

var _default = ScrollTop;
exports.default = _default;