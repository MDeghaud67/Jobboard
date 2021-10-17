"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Clearfix;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mterial-ui components
var styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};
var useStyles = (0, _styles.makeStyles)(styles);

function Clearfix() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.clearfix
  });
}

Clearfix.propTypes = {};