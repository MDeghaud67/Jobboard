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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _core.makeStyles)(_headerStyle.default);

var CompanyHeadInfo = function CompanyHeadInfo(_ref) {
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
    ml: 20
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (0, _ajax.getCompanyImage)(company.image),
    alt: "...",
    className: classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/_react.default.createElement("p", null, company.description)))));
};

var _default = CompanyHeadInfo;
exports.default = _default;