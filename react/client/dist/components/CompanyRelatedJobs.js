"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@material-ui/core");

var _headerStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/headerStyle.js"));

var _GridContainer = _interopRequireDefault(require("./Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("./Grid/GridItem"));

var _ajax = require("utils/ajax");

var _Button = _interopRequireDefault(require("components/CustomButtons/Button"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _core.makeStyles)(_headerStyle.default);

var CompanyRelatedJobs = function CompanyRelatedJobs(_ref) {
  var _classNames;

  var company = _ref.company;
  var classes = useStyles();
  var appBarClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.appBar, true), _defineProperty(_classNames, classes['dark'], "dark"), _classNames));
  return /*#__PURE__*/_react.default.createElement(_core.AppBar, {
    className: appBarClasses
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "space-between",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    ml: 5
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 2
  }, /*#__PURE__*/_react.default.createElement("h4", null, company.name), /*#__PURE__*/_react.default.createElement("img", {
    src: (0, _ajax.getCompanyImage)(company.image),
    alt: "...",
    className: classes.imgRounded + " " + classes.imgFluid
  }))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    mr: 5,
    mt: 3
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 2
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/company-job/".concat(company.id),
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "white"
  }, "View All Jobs"))))));
};

var _default = CompanyRelatedJobs;
exports.default = _default;