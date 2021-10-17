"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _ajax = require("../utils/ajax");

var _jwt = require("../utils/jwt");

var _user = require("slices/user");

var _reactTransitionGroup = require("react-transition-group");

var _excluded = ["component", "redirect", "needAdmin", "animated"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AuthentificationProvider = function AuthentificationProvider(_ref) {
  var Component = _ref.component,
      redirect = _ref.redirect,
      needAdmin = _ref.needAdmin,
      animated = _ref.animated,
      rest = _objectWithoutProperties(_ref, _excluded);

  var match = rest.match;
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.user;
  });

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      needRedirect = _useState2[0],
      setNeedRedirect = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      done = _useState4[0],
      setDone = _useState4[1];

  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    if (needAdmin) {
      if (!user.data || !user.data.isAdmin) {
        setNeedRedirect(true);
        setDone(true);
        return;
      }
    }

    if (!user.authentificated) {
      if (!(0, _jwt.hasAuthToken)()) {
        setNeedRedirect(true);
        setDone(true);
      } else {
        (0, _ajax.getProfile)().then(function (res) {
          dispatch((0, _user.onLogin)(res));
          setNeedRedirect(false);
          setDone(true);
        }).catch(function (err) {
          (0, _jwt.eraseAuthToken)();
          setNeedRedirect(true);
          setDone(true);
        });
      }
    } else {
      setNeedRedirect(false);
      setDone(true);
    }
  }, [user.authentificated]);
  return /*#__PURE__*/_react.default.createElement("div", null, done ? needRedirect ? /*#__PURE__*/_react.default.createElement(_reactRouter.Redirect, {
    to: redirect
  }) : animated ? /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: match != null,
    timeout: 300,
    classNames: "page",
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement(Component, rest)) : /*#__PURE__*/_react.default.createElement(Component, rest) : /*#__PURE__*/_react.default.createElement("div", {
    className: "main-loader loading"
  }));
};

var _default = AuthentificationProvider;
exports.default = _default;