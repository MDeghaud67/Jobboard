"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SnackbarContent;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _snackbarContentStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/snackbarContentStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var useStyles = (0, _styles.makeStyles)(_snackbarContentStyle.default);

function SnackbarContent(props) {
  var message = props.message,
      color = props.color,
      close = props.close,
      icon = props.icon;
  var classes = useStyles();
  var action = [];

  var closeAlert = function closeAlert() {
    setAlert(null);
  };

  if (close !== undefined) {
    action = [/*#__PURE__*/_react.default.createElement(_IconButton.default, {
      className: classes.iconButton,
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: closeAlert
    }, /*#__PURE__*/_react.default.createElement(_Close.default, {
      className: classes.close
    }))];
  }

  var snackIcon = null;

  switch (_typeof(icon)) {
    case "object":
      snackIcon = /*#__PURE__*/_react.default.createElement(props.icon, {
        className: classes.icon
      });
      break;

    case "string":
      snackIcon = /*#__PURE__*/_react.default.createElement(_Icon.default, {
        className: classes.icon
      }, props.icon);
      break;

    default:
      snackIcon = null;
      break;
  }

  var _React$useState = _react.default.useState( /*#__PURE__*/_react.default.createElement(_SnackbarContent.default, {
    message: /*#__PURE__*/_react.default.createElement("div", null, snackIcon, message, close !== undefined ? action : null),
    classes: {
      root: classes.root + " " + classes[color],
      message: classes.message + " " + classes.container
    }
  })),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      alert = _React$useState2[0],
      setAlert = _React$useState2[1];

  return alert;
}

SnackbarContent.propTypes = {
  message: _propTypes.default.node.isRequired,
  color: _propTypes.default.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: _propTypes.default.bool,
  icon: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string])
};