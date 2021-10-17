"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LandingPage;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Header = _interopRequireDefault(require("components/Header/Header.js"));

var _Footer = _interopRequireDefault(require("components/Footer/Footer.js"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _HeaderLinks = _interopRequireDefault(require("components/Header/HeaderLinks.js"));

var _Parallax = _interopRequireDefault(require("components/Parallax/Parallax.js"));

var _landingPage = _interopRequireDefault(require("assets/jss/material-kit-react/views/landingPage.js"));

var _ProductSection = _interopRequireDefault(require("./Sections/ProductSection.js"));

var _TeamSection = _interopRequireDefault(require("./Sections/TeamSection.js"));

var _WorkSection = _interopRequireDefault(require("./Sections/WorkSection.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var dashboardRoutes = [];
var useStyles = (0, _styles.makeStyles)(_landingPage.default);

function LandingPage(props) {
  var classes = useStyles();

  var rest = _extends({}, props);

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, _extends({
    color: "transparent",
    routes: dashboardRoutes,
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/_react.default.createElement(_HeaderLinks.default, null),
    fixed: true,
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest)), /*#__PURE__*/_react.default.createElement(_Parallax.default, {
    filter: true,
    image: require("assets/img/landing-bg.jpg").default
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: classes.title
  }, "Your Story Starts With Us."), /*#__PURE__*/_react.default.createElement("h4", null, "Every landing page needs a small description after the big bold title, that", "'", "s why we added this text here. Add here all the information that can make you or your product create the first impression."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "danger",
    size: "lg",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-play"
  }), "Watch video"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.main, classes.mainRaised)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_ProductSection.default, null), /*#__PURE__*/_react.default.createElement(_TeamSection.default, null), /*#__PURE__*/_react.default.createElement(_WorkSection.default, null))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}