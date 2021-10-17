"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionDownload;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _downloadStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/downloadStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_downloadStyle.default);

function SectionDownload() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    className: classes.textCenter,
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Do you love this UI Kit?"), /*#__PURE__*/_react.default.createElement("h4", null, "Cause if you do, it can be yours for FREE. Hit the buttons below to navigate to our website where you can find the kit. We also have the Bootstrap 4 version on plain HTML. Start a new project or give an old Bootstrap project a new look!")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 8,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit-react?ref=mkr-download-section",
    target: "_blank"
  }, "Free React Download"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit?ref=mkr-download-section",
    target: "_blank"
  }, "Free HTML Downoad"))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    className: classes.textCenter,
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Want more?"), /*#__PURE__*/_react.default.createElement("h4", null, "We", "'", "ve launched", " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section",
    target: "_blank"
  }, "Material Kit PRO React", " "), ".It has a huge number of components, sections and example pages. Start Your Development With A Badass Material-UI nspired by Material Design.")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 8,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "rose",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section",
    target: "_blank"
  }, "Material Kit PRO"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "rose",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mkr-download-section",
    target: "_blank"
  }, "Material Dashboard PRO"))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.textCenter + " " + classes.sharingArea
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Thank you for supporting us!")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "twitter"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-twitter"
  }), " Tweet"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "facebook"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-facebook-square"
  }), " Share"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "google"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-google-plus-g"
  }), "Share"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "github"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-github"
  }), " Star"))));
}