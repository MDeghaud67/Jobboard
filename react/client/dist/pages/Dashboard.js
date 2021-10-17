"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _icons = require("@material-ui/icons");

var _CustomTabs = _interopRequireDefault(require("components/CustomTabs/CustomTabs"));

var _components = _interopRequireDefault(require("assets/jss/material-kit-react/views/components.js"));

var _core = require("@material-ui/core");

var _UserCrud = _interopRequireDefault(require("components/UserCrud"));

var _ajax = require("utils/ajax");

var _JobCrud = _interopRequireDefault(require("components/JobCrud"));

var _CompanyCrud = _interopRequireDefault(require("components/CompanyCrud"));

var _reactRedux = require("react-redux");

var _crud = require("slices/crud");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_components.default);

var Dashboard = function Dashboard() {
  var _React$useState = _react.default.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var datas = (0, _reactRedux.useSelector)(function (state) {
    return state.crud.data;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  _react.default.useEffect(function () {
    (0, _ajax.getAdminsData)().then(function (res) {
      setTimeout(function () {
        dispatch((0, _crud.hydrate)(res));
        setLoading(false);
      }, 500);
    }).catch(function (err) {
      console.log(err);
    });
  }, []);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    pt: 30
  }, !loading ? /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_CustomTabs.default, {
    headerColor: "danger",
    tabs: [{
      tabName: "Users",
      tabIcon: _icons.DataUsage,
      tabContent: /*#__PURE__*/_react.default.createElement(_UserCrud.default, {
        users: datas.users
      })
    }, {
      tabName: "Jobs",
      tabIcon: _icons.DataUsage,
      tabContent: /*#__PURE__*/_react.default.createElement(_JobCrud.default, {
        jobs: datas.jobs
      })
    }, {
      tabName: "Companies",
      tabIcon: _icons.DataUsage,
      tabContent: /*#__PURE__*/_react.default.createElement(_CompanyCrud.default, {
        companies: datas.companies
      })
    }]
  }))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "loading"
  }));
};

var _default = Dashboard;
exports.default = _default;