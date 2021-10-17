"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionNotifications;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _SnackbarContent = _interopRequireDefault(require("components/Snackbar/SnackbarContent.js"));

var _Clearfix = _interopRequireDefault(require("components/Clearfix/Clearfix.js"));

var _notificationsStyles = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_notificationsStyles.default);

function SectionNotifications() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section,
    id: "notifications"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Notifications"))), /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, {
    message: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "INFO ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "info",
    icon: "info_outline"
  }), /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, {
    message: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "SUCCESS ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "success",
    icon: _Check.default
  }), /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, {
    message: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "WARNING ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "warning",
    icon: _Warning.default
  }), /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, {
    message: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, "DANGER ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "danger",
    icon: "info_outline"
  }), /*#__PURE__*/_react.default.createElement(_Clearfix.default, null));
}