"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardFooter;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _cardFooterStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/cardFooterStyle.js"));

var _excluded = ["className", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(_cardFooterStyle.default);

function CardFooter(props) {
  var _classNames;

  var classes = useStyles();

  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var cardFooterClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.cardFooter, true), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: cardFooterClasses
  }, rest), children);
}

CardFooter.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};