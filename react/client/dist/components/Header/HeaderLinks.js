"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderLinks;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _icons = require("@material-ui/icons");

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _headerLinksStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/headerLinksStyle.js"));

var _reactRedux = require("react-redux");

var _core = require("@material-ui/core");

var _jwt = require("utils/jwt");

var _user = require("slices/user");

var _reactToastNotifications = require("react-toast-notifications");

var _toast = _interopRequireWildcard(require("utils/toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var useStyles = (0, _styles.makeStyles)(_headerLinksStyle.default);

function HeaderLinks(_ref) {
  var _user$data;

  var isScrolled = _ref.isScrolled;
  var classes = useStyles();

  var _useToasts = (0, _reactToastNotifications.useToasts)(),
      addToast = _useToasts.addToast;

  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var handleLogout = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _jwt.eraseAuthToken)();

            case 2:
              dispatch((0, _user.logout)());
              addToast.apply(void 0, _toConsumableArray((0, _toast.default)(_toast.LOGOUT)));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLogout() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement("div", null, !user.authentificated ? /*#__PURE__*/_react.default.createElement(_List.default, {
    className: classes.list
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/login",
    style: {
      textDecoration: 'none',
      color: isScrolled ? "black" : "white"
    }
  }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "transparent",
    className: classes.navLink
  }, /*#__PURE__*/_react.default.createElement(_icons.People, {
    className: classes.icons
  }), " Login"))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/register",
    style: {
      textDecoration: 'none',
      color: isScrolled ? "black" : "white"
    }
  }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "transparent",
    className: classes.navLink
  }, /*#__PURE__*/_react.default.createElement(_icons.People, {
    className: classes.icons
  }), " Register")))) : /*#__PURE__*/_react.default.createElement(_List.default, null, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: 3
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "transparent",
    className: classes.navLink,
    onClick: handleLogout
  }, /*#__PURE__*/_react.default.createElement(_icons.PowerOff, {
    className: classes.icons
  }), " Logout"))), user !== null && user !== void 0 && (_user$data = user.data) !== null && _user$data !== void 0 && _user$data.isAdmin ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/admin",
    style: {
      textDecoration: 'none',
      color: isScrolled ? "black" : "white"
    }
  }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: 3
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "transparent",
    className: classes.navLink
  }, /*#__PURE__*/_react.default.createElement(_icons.People, {
    className: classes.icons
  }), " Dashboard Admin"))) : ""));
}