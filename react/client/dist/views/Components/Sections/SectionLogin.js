"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionLogin;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _People = _interopRequireDefault(require("@material-ui/icons/People"));

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Card = _interopRequireDefault(require("components/Card/Card.js"));

var _CardHeader = _interopRequireDefault(require("components/Card/CardHeader.js"));

var _CardBody = _interopRequireDefault(require("components/Card/CardBody.js"));

var _CardFooter = _interopRequireDefault(require("components/Card/CardFooter.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _CustomInput = _interopRequireDefault(require("components/CustomInput/CustomInput.js"));

var _loginStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/loginStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_loginStyle.default);

function SectionLogin() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement("form", {
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
    className: classes.socialIcons + " fab fa-twitter"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socialIcons + " fab fa-facebook"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socialIcons + " fab fa-google-plus-g"
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
  }, "Get started"))))))));
}