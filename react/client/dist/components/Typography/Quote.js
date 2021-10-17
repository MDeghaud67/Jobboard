"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Quote;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _typographyStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/typographyStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// nodejs library to set properties for components
// @material-ui/core components
// core components
var useStyles = (0, _styles.makeStyles)(_typographyStyle.default);

function Quote(props) {
  var text = props.text,
      author = props.author;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("blockquote", {
    className: classes.defaultFontStyle + " " + classes.quote
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: classes.quoteText
  }, text), /*#__PURE__*/_react.default.createElement("small", {
    className: classes.quoteAuthor
  }, author));
}

Quote.propTypes = {
  text: _propTypes.default.node,
  author: _propTypes.default.node
};