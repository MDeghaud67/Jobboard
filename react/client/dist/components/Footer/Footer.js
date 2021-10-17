"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _footerStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/footerStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(_footerStyle.default);

function Footer(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var whiteFont = props.whiteFont;
  var footerClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.footer, true), _defineProperty(_classNames, classes.footerWhiteFont, whiteFont), _classNames));
  var aClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.a, true), _defineProperty(_classNames2, classes.footerWhiteFont, whiteFont), _classNames2));
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: footerClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.left
  }, /*#__PURE__*/_react.default.createElement(_core.List, {
    className: classes.list
  }, /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    className: classes.inlineBlock
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.creative-tim.com/?ref=mkr-footer",
    className: classes.block,
    target: "_blank"
  }, "Creative Tim")), /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    className: classes.inlineBlock
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.creative-tim.com/presentation?ref=mkr-footer",
    className: classes.block,
    target: "_blank"
  }, "About us")), /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    className: classes.inlineBlock
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://blog.creative-tim.com/?ref=mkr-footer",
    className: classes.block,
    target: "_blank"
  }, "Blog")), /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    className: classes.inlineBlock
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.creative-tim.com/license?ref=mkr-footer",
    className: classes.block,
    target: "_blank"
  }, "Licenses")))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.right
  }, "\xA9 ", 1900 + new Date().getYear(), " , made with", " ", /*#__PURE__*/_react.default.createElement(_Favorite.default, {
    className: classes.icon
  }), " by", " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.creative-tim.com?ref=mkr-footer",
    className: aClasses,
    target: "_blank"
  }, "Creative Tim"), " ", "for a better web.")));
}

Footer.propTypes = {
  whiteFont: _propTypes.default.bool
};