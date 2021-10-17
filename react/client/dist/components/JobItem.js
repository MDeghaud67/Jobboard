"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _reactRouterDom = require("react-router-dom");

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _Card = _interopRequireDefault(require("components/Card/Card.js"));

var _CardBody = _interopRequireDefault(require("components/Card/CardBody.js"));

var _CardFooter = _interopRequireDefault(require("components/Card/CardFooter.js"));

var _teamStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"));

var _ajax = require("utils/ajax");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(_teamStyle.default);

var JobItem = function JobItem(_ref) {
  var job = _ref.job;
  var classes = useStyles();
  var imageClasses = (0, _classnames.default)(classes.imgRaised, classes.imgFluid);
  return /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    className: classes.imgRaised,
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    plain: true
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (0, _ajax.getCompanyImage)(job.Company.image),
    alt: "...",
    className: imageClasses
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.cardTitle
  }, job.Company.name, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("small", {
    className: classes.smallTitle
  }, job.title)), /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement("p", {
    className: classes.description
  }, job.income), /*#__PURE__*/_react.default.createElement("p", {
    className: classes.description
  }, job.experienceRequired)), /*#__PURE__*/_react.default.createElement(_CardFooter.default, {
    className: classes.justifyCenter
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/job/".concat(job.id),
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "danger"
  }, "APPLY")))));
};

var _default = JobItem;
exports.default = _default;