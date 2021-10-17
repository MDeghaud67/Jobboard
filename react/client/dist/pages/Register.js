"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Register;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _icons = require("@material-ui/icons/");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _Card = _interopRequireDefault(require("components/Card/Card.js"));

var _CardBody = _interopRequireDefault(require("components/Card/CardBody.js"));

var _CardHeader = _interopRequireDefault(require("components/Card/CardHeader.js"));

var _CardFooter = _interopRequireDefault(require("components/Card/CardFooter.js"));

var _CustomInput = _interopRequireDefault(require("components/CustomInput/CustomInput.js"));

var _loginPage = _interopRequireDefault(require("assets/jss/material-kit-react/views/loginPage.js"));

var _bg = _interopRequireDefault(require("assets/img/bg7.jpg"));

var _ajax = require("utils/ajax");

var _reactRouter = require("react-router");

var _toast = require("utils/toast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_loginPage.default);

function Register(props) {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visibility = _React$useState2[0],
      setVisibility = _React$useState2[1];

  var _React$useState3 = _react.default.useState("cardHidden"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      cardAnimaton = _React$useState4[0],
      setCardAnimation = _React$useState4[1];

  var _React$useState5 = _react.default.useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      formProp = _React$useState6[0],
      setFormProp = _React$useState6[1];

  var _React$useState7 = _react.default.useState({}),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      errorsProp = _React$useState8[0],
      setErrorsProp = _React$useState8[1];

  var _React$useState9 = _react.default.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      loading = _React$useState10[0],
      setLoading = _React$useState10[1];

  var _React$useState11 = _react.default.useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      redirect = _React$useState12[0],
      setRedirect = _React$useState12[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 200);

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setFormProp(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    (0, _ajax.register)(formProp).then(function (res) {
      setTimeout(function () {
        setLoading(false);
        setRedirect(true);
      }, 500);
    }).catch(function (err) {
      setLoading(false);

      if (err.message) {
        var message = err.message;
        setErrorsProp(JSON.parse(message));
      }
    });
  };

  var classes = useStyles();

  var rest = _extends({}, props);

  return /*#__PURE__*/_react.default.createElement("div", null, redirect ? /*#__PURE__*/_react.default.createElement(_reactRouter.Redirect, {
    to: {
      pathname: "/login",
      state: {
        toast: _toast.REGISTER_SUCCESSFULL
      }
    }
  }) : "", /*#__PURE__*/_react.default.createElement("div", {
    className: classes.pageHeader,
    style: {
      backgroundImage: "url(" + _bg.default + ")",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: (classes[cardAnimaton], loading ? 'loading' : "")
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit,
    className: classes.form
  }, /*#__PURE__*/_react.default.createElement(_CardHeader.default, {
    color: "success",
    className: classes.cardHeader
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Register")), /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "First Name...",
    id: "first_name",
    error: errorsProp.first_name !== undefined,
    errorMessage: errorsProp.first_name,
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      error: errorsProp.first_name !== undefined,
      name: "first_name",
      value: formProp.first_name,
      onChange: handleChange,
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_icons.People, {
        className: classes.inputIconsColor
      }))
    }
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Last Name...",
    id: "last_name",
    error: errorsProp.last_name !== undefined,
    errorMessage: errorsProp.last_name,
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      name: "last_name",
      error: errorsProp.last_name !== undefined,
      value: formProp.last_name,
      onChange: handleChange,
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_icons.People, {
        className: classes.inputIconsColor
      }))
    }
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Email...",
    id: "email",
    error: errorsProp.email !== undefined,
    errorMessage: errorsProp.email,
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      error: errorsProp.email !== undefined,
      name: "email",
      value: formProp.email,
      onChange: handleChange,
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_icons.Email, {
        className: classes.inputIconsColor
      }))
    }
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Password",
    id: "pass",
    error: errorsProp.password !== undefined,
    errorMessage: errorsProp.password,
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: visibility ? "text" : "password",
      error: errorsProp.password !== undefined,
      name: "password",
      value: formProp.password,
      onChange: handleChange,
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        style: {
          cursor: "pointer"
        },
        position: "end",
        onClick: function onClick() {
          return setVisibility(!visibility);
        }
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        className: classes.inputIconsColor
      }, /*#__PURE__*/_react.default.createElement(_icons.Visibility, {
        className: classes.inputIconsColor
      }))),
      autoComplete: "off"
    }
  })), /*#__PURE__*/_react.default.createElement(_CardFooter.default, {
    className: classes.cardFooter
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "success",
    type: "submit",
    size: "sm"
  }, "Login")))))))));
}