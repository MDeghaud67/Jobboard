"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionCompletedExamples;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _completedStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/completedStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_completedStyle.default);

function SectionCompletedExamples() {
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
    md: 8
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Completed with examples"), /*#__PURE__*/_react.default.createElement("h4", null, "The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you", "'", "re good to go. More importantly, looking at them will give you a picture of what you can build with this powerful kit.")))));
}