"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("style/App.css");

var _reactRouterDom = require("react-router-dom");

var _reactToastNotifications = require("react-toast-notifications");

var _Header = _interopRequireDefault(require("components/Header/Header"));

var _Toast = _interopRequireDefault(require("components/Toast"));

var _Home = _interopRequireDefault(require("pages/Home"));

var _Job = _interopRequireDefault(require("pages/Job"));

var _CompanyJobs = _interopRequireDefault(require("pages/CompanyJobs"));

var _Login = _interopRequireDefault(require("pages/Login"));

var _Register = _interopRequireDefault(require("pages/Register"));

var _AnimatedRoute = _interopRequireDefault(require("components/AnimatedRoute"));

var _ScrollTop = _interopRequireDefault(require("components/ScrollTop"));

var _ajax = require("utils/ajax");

var _jwt = require("utils/jwt");

var _user = require("slices/user");

var _reactRedux = require("react-redux");

var _AuthentificatedRoute = _interopRequireDefault(require("components/AuthentificatedRoute"));

var _Dashboard = _interopRequireDefault(require("pages/Dashboard"));

var _UserForm = _interopRequireDefault(require("components/UserForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var dispatch = (0, _reactRedux.useDispatch)();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      done = _React$useState2[0],
      setDone = _React$useState2[1];

  _react.default.useEffect(function () {
    if ((0, _jwt.hasAuthToken)()) {
      (0, _ajax.getProfile)().then(function (res) {
        dispatch((0, _user.onLogin)(res));
        setDone(true);
      }).catch( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _jwt.eraseAuthToken)();

                case 2:
                  setDone(true);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    } else {
      setDone(true);
    }
  }, []);

  return /*#__PURE__*/_react.default.createElement("div", null, done ? /*#__PURE__*/_react.default.createElement(_reactToastNotifications.ToastProvider, {
    autoDismiss: true,
    autoDismissTimeout: 2000,
    placement: "bottom-right"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_ScrollTop.default, null), /*#__PURE__*/_react.default.createElement(_Toast.default, null), /*#__PURE__*/_react.default.createElement(_Header.default, {
    brand: "Jobboard",
    color: "dark",
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }), /*#__PURE__*/_react.default.createElement(_AnimatedRoute.default, {
    exact: true,
    path: "/",
    component: _Home.default
  }), /*#__PURE__*/_react.default.createElement(_AnimatedRoute.default, {
    exact: true,
    path: "/login",
    component: _Login.default
  }), /*#__PURE__*/_react.default.createElement(_AnimatedRoute.default, {
    exact: true,
    path: "/register",
    component: _Register.default
  }), /*#__PURE__*/_react.default.createElement(_AnimatedRoute.default, {
    exact: true,
    path: "/job/:id",
    component: _Job.default
  }), /*#__PURE__*/_react.default.createElement(_AnimatedRoute.default, {
    exact: true,
    path: "/company-job/:company",
    component: _CompanyJobs.default
  }), /*#__PURE__*/_react.default.createElement(_AuthentificatedRoute.default, {
    animated: true,
    needAdmin: true,
    path: "/admin",
    component: _Dashboard.default
  }))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "loading"
  }));
}

var _default = App;
exports.default = _default;