"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _ajax = require("../utils/ajax");

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _Muted = _interopRequireDefault(require("components/Typography/Muted"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _LibraryBooks = _interopRequireDefault(require("@material-ui/icons/LibraryBooks"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _ApplyForm = _interopRequireDefault(require("components/ApplyForm"));

var _components = _interopRequireDefault(require("assets/jss/material-kit-react/views/components.js"));

var _CompanyRelatedJobs = _interopRequireDefault(require("components/CompanyRelatedJobs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Transition = /*#__PURE__*/_react.default.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/_react.default.createElement(_Slide.default, _extends({
    direction: "down",
    ref: ref
  }, props));
});

var useStyles = (0, _styles.makeStyles)(_components.default);

var Job = function Job() {
  var classes = useStyles();

  var _useParams = (0, _reactRouter.useParams)(),
      id = _useParams.id;

  var _React$useState = _react.default.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      job = _React$useState2[0],
      setJob = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      loaded = _React$useState4[0],
      setLoaded = _React$useState4[1];

  var _React$useState5 = _react.default.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      classicModal = _React$useState6[0],
      setClassicModal = _React$useState6[1];

  _react.default.useEffect(function () {
    (0, _ajax.getJob)(id).then(function (res) {
      setJob(res);
      setLoaded(true);
    }).catch(function (err) {
      console.log(err);
    });
  }, []);

  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    pt: 5
  }, loaded ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 5
  }, /*#__PURE__*/_react.default.createElement(_CompanyRelatedJobs.default, {
    company: job.Company
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    lg: 3
  }, /*#__PURE__*/_react.default.createElement("h3", null, job.title), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "success",
    block: true,
    onClick: function onClick() {
      return setClassicModal(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_LibraryBooks.default, {
    className: classes.icon
  }), "APPLY"), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
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
  }, "Postuler a l'offre de ", job.Company.name)), /*#__PURE__*/_react.default.createElement(_DialogContent.default, {
    id: "classic-modal-slide-description",
    className: classes.modalBody
  }, /*#__PURE__*/_react.default.createElement(_ApplyForm.default, null)), /*#__PURE__*/_react.default.createElement(_DialogActions.default, {
    className: classes.modalFooter
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick() {
      return setClassicModal(false);
    },
    color: "danger",
    simple: true
  }, "Annuler"))), /*#__PURE__*/_react.default.createElement(_Muted.default, null, job.localisation), /*#__PURE__*/_react.default.createElement(_Muted.default, null, job.income), /*#__PURE__*/_react.default.createElement(_Muted.default, null, job.experienceRequired)), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    lg: 9
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.mainRaised
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    m: 5,
    pt: 3,
    pb: 3
  }, (0, _htmlReactParser.default)(job.description)))))))))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "loading"
  }));
};

var _default = Job;
exports.default = _default;