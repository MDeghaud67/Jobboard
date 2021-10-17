"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _ajax = require("../utils/ajax");

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@material-ui/core");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _CompanyHeadInfo = _interopRequireDefault(require("components/CompanyHeadInfo"));

var _JobItem = _interopRequireDefault(require("components/JobItem"));

var _styles = require("@material-ui/core/styles");

var _components = _interopRequireDefault(require("assets/jss/material-kit-react/views/components.js"));

var _toast = require("utils/toast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_components.default);

var CompanyJobs = function CompanyJobs() {
  var classes = useStyles();

  var _useParams = (0, _reactRouter.useParams)(),
      company = _useParams.company;

  var _React$useState = _react.default.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      jobs = _React$useState2[0],
      setJobs = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      loaded = _React$useState4[0],
      setLoaded = _React$useState4[1];

  var _React$useState5 = _react.default.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      notFound = _React$useState6[0],
      setNotFound = _React$useState6[1];

  var _React$useState7 = _react.default.useState({}),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      companyData = _React$useState8[0],
      setCompanyData = _React$useState8[1];

  _react.default.useEffect(function () {
    (0, _ajax.getJobsByCompany)(company).then(function (res) {
      setJobs(res);

      for (var i = 0; i < res.length; i++) {
        if (res[i].Company) {
          setCompanyData(res[i].Company);
          break;
        }
      }

      setLoaded(true);
    }).catch(function (err) {
      setNotFound(true);
    });
  }, []);

  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    pt: 5
  }, notFound ? /*#__PURE__*/_react.default.createElement(_reactRouter.Redirect, {
    to: {
      pathname: "/",
      state: {
        toast: _toast.NOT_FOUND
      }
    }
  }) : "", loaded ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 5
  }, /*#__PURE__*/_react.default.createElement(_CompanyHeadInfo.default, {
    company: companyData
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.main, classes.mainRaised)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, jobs.map(function (job, i) {
    return /*#__PURE__*/_react.default.createElement(_JobItem.default, {
      job: job,
      key: i
    });
  })))))))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "loading"
  }));
};

var _default = CompanyJobs;
exports.default = _default;