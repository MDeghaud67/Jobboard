"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomDropdown;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _customDropdownStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/customDropdownStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_customDropdownStyle.default);

function CustomDropdown(props) {
  var _classNames, _classNames2, _classNames3;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  var handleClose = function handleClose(param) {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  var handleCloseAway = function handleCloseAway(event) {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  var classes = useStyles();
  var buttonText = props.buttonText,
      buttonIcon = props.buttonIcon,
      dropdownList = props.dropdownList,
      buttonProps = props.buttonProps,
      dropup = props.dropup,
      dropdownHeader = props.dropdownHeader,
      caret = props.caret,
      hoverColor = props.hoverColor,
      left = props.left,
      rtlActive = props.rtlActive,
      noLiPadding = props.noLiPadding;
  var caretClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.caret, true), _defineProperty(_classNames, classes.caretActive, Boolean(anchorEl)), _defineProperty(_classNames, classes.caretRTL, rtlActive), _classNames));
  var dropdownItem = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.dropdownItem, true), _defineProperty(_classNames2, classes[hoverColor + "Hover"], true), _defineProperty(_classNames2, classes.noLiPadding, noLiPadding), _defineProperty(_classNames2, classes.dropdownItemRTL, rtlActive), _classNames2));
  var icon = null;

  switch (_typeof(buttonIcon)) {
    case "object":
      icon = /*#__PURE__*/_react.default.createElement(props.buttonIcon, {
        className: classes.buttonIcon
      });
      break;

    case "string":
      icon = /*#__PURE__*/_react.default.createElement(_Icon.default, {
        className: classes.buttonIcon
      }, props.buttonIcon);
      break;

    default:
      icon = null;
      break;
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    "aria-label": "Notifications",
    "aria-owns": anchorEl ? "menu-list" : null,
    "aria-haspopup": "true"
  }, buttonProps, {
    onClick: handleClick
  }), icon, buttonText !== undefined ? buttonText : null, caret ? /*#__PURE__*/_react.default.createElement("b", {
    className: caretClasses
  }) : null)), /*#__PURE__*/_react.default.createElement(_Popper.default, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true,
    placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
    className: (0, _classnames.default)((_classNames3 = {}, _defineProperty(_classNames3, classes.popperClose, !anchorEl), _defineProperty(_classNames3, classes.popperResponsive, true), _classNames3))
  }, function () {
    return /*#__PURE__*/_react.default.createElement(_Grow.default, {
      in: Boolean(anchorEl),
      id: "menu-list",
      style: dropup ? {
        transformOrigin: "0 100% 0"
      } : {
        transformOrigin: "0 0 0"
      }
    }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
      className: classes.dropdown
    }, /*#__PURE__*/_react.default.createElement(_ClickAwayListener.default, {
      onClickAway: handleCloseAway
    }, /*#__PURE__*/_react.default.createElement(_MenuList.default, {
      role: "menu",
      className: classes.menuList
    }, dropdownHeader !== undefined ? /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      onClick: function onClick() {
        return handleClose(dropdownHeader);
      },
      className: classes.dropdownHeader
    }, dropdownHeader) : null, dropdownList.map(function (prop, key) {
      if (prop.divider) {
        return /*#__PURE__*/_react.default.createElement(_Divider.default, {
          key: key,
          onClick: function onClick() {
            return handleClose("divider");
          },
          className: classes.dropdownDividerItem
        });
      }

      return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: key,
        onClick: function onClick() {
          return handleClose(prop);
        },
        className: dropdownItem
      }, prop);
    })))));
  }));
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
CustomDropdown.propTypes = {
  hoverColor: _propTypes.default.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: _propTypes.default.node,
  buttonIcon: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  dropdownList: _propTypes.default.array,
  buttonProps: _propTypes.default.object,
  dropup: _propTypes.default.bool,
  dropdownHeader: _propTypes.default.node,
  rtlActive: _propTypes.default.bool,
  caret: _propTypes.default.bool,
  left: _propTypes.default.bool,
  noLiPadding: _propTypes.default.bool,
  // function that retuns the selected item
  onClick: _propTypes.default.func
};