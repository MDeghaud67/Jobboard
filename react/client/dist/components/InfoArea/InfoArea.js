"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoArea;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _infoStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/infoStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(_infoStyle.default);

function InfoArea(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var title = props.title,
      description = props.description,
      iconColor = props.iconColor,
      vertical = props.vertical;
  var iconWrapper = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.iconWrapper, true), _defineProperty(_classNames, classes[iconColor], true), _defineProperty(_classNames, classes.iconWrapperVertical, vertical), _classNames));
  var iconClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.icon, true), _defineProperty(_classNames2, classes.iconVertical, vertical), _classNames2));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.infoArea
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: iconWrapper
  }, /*#__PURE__*/_react.default.createElement(props.icon, {
    className: iconClasses
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.descriptionWrapper
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.title
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: classes.description
  }, description)));
}

InfoArea.defaultProps = {
  iconColor: "gray"
};
InfoArea.propTypes = {
  icon: _propTypes.default.object.isRequired,
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  iconColor: _propTypes.default.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: _propTypes.default.bool
};