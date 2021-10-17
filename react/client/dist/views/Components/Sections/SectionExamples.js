"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionExamples;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _landing = _interopRequireDefault(require("assets/img/landing.jpg"));

var _profile = _interopRequireDefault(require("assets/img/profile.jpg"));

var _exampleStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/exampleStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// react components for routing our app without refresh
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_exampleStyle.default);

function SectionExamples() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "landing-page",
    className: classes.link
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _landing.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    simple: true
  }, "View landing page"))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "profile-page",
    className: classes.link
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _profile.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    simple: true
  }, "View profile page"))))));
}