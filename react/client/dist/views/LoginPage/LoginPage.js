"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoginPage;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _People = _interopRequireDefault(require("@material-ui/icons/People"));

var _Header = _interopRequireDefault(require("components/Header/Header.js"));

var _HeaderLinks = _interopRequireDefault(require("components/Header/HeaderLinks.js"));

var _Footer = _interopRequireDefault(require("components/Footer/Footer.js"));

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_loginPage.default);

function LoginPage(props) {
  var _React$useState = _react.default.useState("cardHidden"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      cardAnimaton = _React$useState2[0],
      setCardAnimation = _React$useState2[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  var classes = useStyles();

  var rest = _extends({}, props);

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, _extends({
    absolute: true,
    color: "transparent",
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/_react.default.createElement(_HeaderLinks.default, null)
  }, rest)), /*#__PURE__*/_react.default.createElement("div", {
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
    className: classes[cardAnimaton]
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: classes.form
  }, /*#__PURE__*/_react.default.createElement(_CardHeader.default, {
    color: "primary",
    className: classes.cardHeader
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Login"), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.socialLine
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-twitter"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-facebook"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-google-plus-g"
  })))), /*#__PURE__*/_react.default.createElement("p", {
    className: classes.divider
  }, "Or Be Classical"), /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "First Name...",
    id: "first",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_People.default, {
        className: classes.inputIconsColor
      }))
    }
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Email...",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_Email.default, {
        className: classes.inputIconsColor
      }))
    }
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Password",
    id: "pass",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "password",
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        className: classes.inputIconsColor
      }, "lock_outline")),
      autoComplete: "off"
    }
  })), /*#__PURE__*/_react.default.createElement(_CardFooter.default, {
    className: classes.cardFooter
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    simple: true,
    color: "primary",
    size: "lg"
  }, "Get started"))))))), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    whiteFont: true
  })));
}