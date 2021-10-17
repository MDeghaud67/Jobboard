"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactTransitionGroup = require("react-transition-group");

var _excluded = ["component"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AnimatedRoute = function AnimatedRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, rest, function (_ref2) {
    var match = _ref2.match;
    return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
      in: match != null,
      timeout: 300,
      classNames: "page",
      unmountOnExit: true
    }, /*#__PURE__*/_react.default.createElement(Component, null));
  });
};

var _default = AnimatedRoute;
exports.default = _default;