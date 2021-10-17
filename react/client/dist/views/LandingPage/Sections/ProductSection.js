"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductSection;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Chat = _interopRequireDefault(require("@material-ui/icons/Chat"));

var _VerifiedUser = _interopRequireDefault(require("@material-ui/icons/VerifiedUser"));

var _Fingerprint = _interopRequireDefault(require("@material-ui/icons/Fingerprint"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _InfoArea = _interopRequireDefault(require("components/InfoArea/InfoArea.js"));

var _productStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/landingPageSections/productStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_productStyle.default);

function ProductSection() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: classes.title
  }, "Let", "'", "s talk product"), /*#__PURE__*/_react.default.createElement("h5", {
    className: classes.description
  }, "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn", "'", "t scroll to get here. Add a button if you want the user to see more."))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_InfoArea.default, {
    title: "Free Chat",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _Chat.default,
    iconColor: "info",
    vertical: true
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_InfoArea.default, {
    title: "Verified Users",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _VerifiedUser.default,
    iconColor: "success",
    vertical: true
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_InfoArea.default, {
    title: "Fingerprint",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _Fingerprint.default,
    iconColor: "danger",
    vertical: true
  })))));
}