"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Badge;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _badgeStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/badgeStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// nodejs library to set properties for components
// @material-ui/core components
var useStyles = (0, _styles.makeStyles)(_badgeStyle.default);

function Badge(props) {
  var classes = useStyles();
  var color = props.color,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: classes.badge + " " + classes[color]
  }, children);
}

Badge.defaultProps = {
  color: "gray"
};
Badge.propTypes = {
  color: _propTypes.default.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  children: _propTypes.default.node
};