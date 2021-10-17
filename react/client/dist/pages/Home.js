"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Parallax = _interopRequireDefault(require("components/Parallax/Parallax.js"));

var _components = _interopRequireDefault(require("assets/jss/material-kit-react/views/components.js"));

var _JobList = _interopRequireDefault(require("components/JobList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(_components.default);

var Home = function Home() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Parallax.default, {
    image: require("assets/img/bg4.jpg").default
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.brand
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: classes.title
  }, "Jobboard"), /*#__PURE__*/_react.default.createElement("h3", {
    className: classes.subtitle
  }, "Find your dream job.")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.main, classes.mainRaised)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_JobList.default, null))))));
};

var _default = Home;
exports.default = _default;