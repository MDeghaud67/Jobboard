"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionJavascript;

var _react = _interopRequireDefault(require("react"));

var _reactDatetime = _interopRequireDefault(require("react-datetime"));

var _styles = require("@material-ui/core/styles");

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _LibraryBooks = _interopRequireDefault(require("@material-ui/icons/LibraryBooks"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _javascriptStyles = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(_javascriptStyles.default);

var Transition = /*#__PURE__*/_react.default.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/_react.default.createElement(_Slide.default, _extends({
    direction: "down",
    ref: ref
  }, props));
});

Transition.displayName = "Transition";

function SectionJavascript() {
  var classes = useStyles();

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorElLeft = _React$useState2[0],
      setAnchorElLeft = _React$useState2[1];

  var _React$useState3 = _react.default.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      anchorElTop = _React$useState4[0],
      setAnchorElTop = _React$useState4[1];

  var _React$useState5 = _react.default.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      anchorElBottom = _React$useState6[0],
      setAnchorElBottom = _React$useState6[1];

  var _React$useState7 = _react.default.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      anchorElRight = _React$useState8[0],
      setAnchorElRight = _React$useState8[1];

  var _React$useState9 = _react.default.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      classicModal = _React$useState10[0],
      setClassicModal = _React$useState10[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Javascript components")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Modal")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    block: true,
    onClick: function onClick() {
      return setClassicModal(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_LibraryBooks.default, {
    className: classes.icon
  }), "Classic"), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    classes: {
      root: classes.center,
      paper: classes.modal
    },
    open: classicModal,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: function onClose() {
      return setClassicModal(false);
    },
    "aria-labelledby": "classic-modal-slide-title",
    "aria-describedby": "classic-modal-slide-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "classic-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    color: "inherit",
    onClick: function onClick() {
      return setClassicModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_Close.default, {
    className: classes.modalClose
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.modalTitle
  }, "Modal title")), /*#__PURE__*/_react.default.createElement(_DialogContent.default, {
    id: "classic-modal-slide-description",
    className: classes.modalBody
  }, /*#__PURE__*/_react.default.createElement("p", null, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.")), /*#__PURE__*/_react.default.createElement(_DialogActions.default, {
    className: classes.modalFooter
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "transparent",
    simple: true
  }, "Nice Button"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick() {
      return setClassicModal(false);
    },
    color: "danger",
    simple: true
  }, "Close"))))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Datetime Picker")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    className: classes.label
  }, "Datetime Picker"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_reactDatetime.default, {
    inputProps: {
      placeholder: "Datetime Picker Here"
    }
  })))))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Popovers")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick(event) {
      return setAnchorElLeft(event.currentTarget);
    }
  }, "On left"), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElLeft),
    anchorEl: anchorElLeft,
    onClose: function onClose() {
      return setAnchorElLeft(null);
    },
    anchorOrigin: {
      vertical: "center",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "center",
      horizontal: "right"
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: classes.popoverHeader
  }, "Popover on left"), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover. Here will be some very useful information about his popover.")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick(event) {
      return setAnchorElTop(event.currentTarget);
    }
  }, "On top"), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElTop),
    anchorEl: anchorElTop,
    onClose: function onClose() {
      return setAnchorElTop(null);
    },
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: classes.popoverHeader
  }, "Popover on top"), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover.")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick(event) {
      return setAnchorElBottom(event.currentTarget);
    }
  }, "On bottom"), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElBottom),
    anchorEl: anchorElBottom,
    onClose: function onClose() {
      return setAnchorElBottom(null);
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: classes.popoverHeader
  }, "Popover on bottom"), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover.")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick(event) {
      return setAnchorElRight(event.currentTarget);
    }
  }, "On right"), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElRight),
    anchorEl: anchorElRight,
    onClose: function onClose() {
      return setAnchorElRight(null);
    },
    anchorOrigin: {
      vertical: "center",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "center",
      horizontal: "left"
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: classes.popoverHeader
  }, "Popover on right"), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover.")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Tooltips")), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    id: "tooltip-left",
    title: "Tooltip on left",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "On left")), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    id: "tooltip-top",
    title: "Tooltip on top",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "On top")), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    id: "tooltip-bottom",
    title: "Tooltip on bottom",
    placement: "bottom",
    classes: {
      tooltip: classes.tooltip
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "On bottom")), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    id: "tooltip-right",
    title: "Tooltip on right",
    placement: "right",
    classes: {
      tooltip: classes.tooltip
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "On right")))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Carousel"))));
}