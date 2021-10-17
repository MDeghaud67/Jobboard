"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Components;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _Header = _interopRequireDefault(require("components/Header/Header.js"));

var _Footer = _interopRequireDefault(require("components/Footer/Footer.js"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _Parallax = _interopRequireDefault(require("components/Parallax/Parallax.js"));

var _HeaderLinks = _interopRequireDefault(require("components/Header/HeaderLinks.js"));

var _SectionBasics = _interopRequireDefault(require("./Sections/SectionBasics.js"));

var _SectionNavbars = _interopRequireDefault(require("./Sections/SectionNavbars.js"));

var _SectionTabs = _interopRequireDefault(require("./Sections/SectionTabs.js"));

var _SectionPills = _interopRequireDefault(require("./Sections/SectionPills.js"));

var _SectionNotifications = _interopRequireDefault(require("./Sections/SectionNotifications.js"));

var _SectionTypography = _interopRequireDefault(require("./Sections/SectionTypography.js"));

var _SectionJavascript = _interopRequireDefault(require("./Sections/SectionJavascript.js"));

var _SectionCarousel = _interopRequireDefault(require("./Sections/SectionCarousel.js"));

var _SectionCompletedExamples = _interopRequireDefault(require("./Sections/SectionCompletedExamples.js"));

var _SectionLogin = _interopRequireDefault(require("./Sections/SectionLogin.js"));

var _SectionExamples = _interopRequireDefault(require("./Sections/SectionExamples.js"));

var _SectionDownload = _interopRequireDefault(require("./Sections/SectionDownload.js"));

var _components = _interopRequireDefault(require("assets/jss/material-kit-react/views/components.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(_components.default);

function Components(props) {
  var classes = useStyles();

  var rest = _extends({}, props);

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, _extends({
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/_react.default.createElement(_HeaderLinks.default, null),
    fixed: true,
    color: "transparent",
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest)), /*#__PURE__*/_react.default.createElement(_Parallax.default, {
    image: require("assets/img/bg4.jpg").default
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.brand
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: classes.title
  }, "Material Kit React."), /*#__PURE__*/_react.default.createElement("h3", {
    className: classes.subtitle
  }, "A Badass Material-UI Kit based on Material Design.")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.main, classes.mainRaised)
  }, /*#__PURE__*/_react.default.createElement(_SectionBasics.default, null), /*#__PURE__*/_react.default.createElement(_SectionNavbars.default, null), /*#__PURE__*/_react.default.createElement(_SectionTabs.default, null), /*#__PURE__*/_react.default.createElement(_SectionPills.default, null), /*#__PURE__*/_react.default.createElement(_SectionNotifications.default, null), /*#__PURE__*/_react.default.createElement(_SectionTypography.default, null), /*#__PURE__*/_react.default.createElement(_SectionJavascript.default, null), /*#__PURE__*/_react.default.createElement(_SectionCarousel.default, null), /*#__PURE__*/_react.default.createElement(_SectionCompletedExamples.default, null), /*#__PURE__*/_react.default.createElement(_SectionLogin.default, null), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    md: 12,
    className: classes.textCenter
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/login-page",
    className: classes.link
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    simple: true
  }, "View Login Page"))), /*#__PURE__*/_react.default.createElement(_SectionExamples.default, null), /*#__PURE__*/_react.default.createElement(_SectionDownload.default, null)), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}