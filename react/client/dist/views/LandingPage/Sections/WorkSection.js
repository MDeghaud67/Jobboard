"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WorkSection;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _CustomInput = _interopRequireDefault(require("components/CustomInput/CustomInput.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _workStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/landingPageSections/workStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_workStyle.default);

function WorkSection() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    cs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: classes.title
  }, "Work with us"), /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.description
  }, "Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."), /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Your Name",
    id: "name",
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Your Email",
    id: "email",
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Your Message",
    id: "message",
    formControlProps: {
      fullWidth: true,
      className: classes.textArea
    },
    inputProps: {
      multiline: true,
      rows: 5
    }
  }), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary"
  }, "Send Message")))))));
}