"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _AuthentificationProvider = _interopRequireDefault(require("./AuthentificationProvider"));

var _excluded = ["component", "redirectTo", "needAdmin", "animated"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AuthentificatedRoute = function AuthentificatedRoute(_ref) {
  var component = _ref.component,
      _ref$redirectTo = _ref.redirectTo,
      redirectTo = _ref$redirectTo === void 0 ? "/login" : _ref$redirectTo,
      needAdmin = _ref.needAdmin,
      _ref$animated = _ref.animated,
      animated = _ref$animated === void 0 ? false : _ref$animated,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return /*#__PURE__*/_react.default.createElement(_AuthentificationProvider.default, _extends({
        redirect: redirectTo
      }, props, {
        needAdmin: true,
        animated: true,
        component: component
      }));
    }
  })));
};

var _default = AuthentificatedRoute;
exports.default = _default;