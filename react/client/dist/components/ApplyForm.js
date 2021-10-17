"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _icons = require("@material-ui/icons/");

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _CardBody = _interopRequireDefault(require("components/Card/CardBody.js"));

var _CardFooter = _interopRequireDefault(require("components/Card/CardFooter.js"));

var _CustomInput = _interopRequireDefault(require("components/CustomInput/CustomInput.js"));

var _loginPage = _interopRequireDefault(require("assets/jss/material-kit-react/views/loginPage.js"));

var _core = require("@material-ui/core");

var _GridContainer = _interopRequireDefault(require("./Grid/GridContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _core.makeStyles)(_loginPage.default);

var ApplyForm = function ApplyForm() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("form", {
    className: classes.form
  }, /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Email...",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_icons.Email, {
        className: classes.inputIconsColor
      }))
    }
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Nom...",
    id: "name",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        style: {
          cursor: "pointer"
        },
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        className: classes.inputIconsColor
      }, /*#__PURE__*/_react.default.createElement(_icons.Person, {
        className: classes.inputIconsColor
      }))),
      autoComplete: "off"
    }
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Messsage",
    id: "pass",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      multiline: true,
      rows: 5,
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        style: {
          cursor: "pointer"
        },
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        className: classes.inputIconsColor
      }, /*#__PURE__*/_react.default.createElement(_icons.Message, {
        className: classes.inputIconsColor
      })))
    }
  }), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    alignItems: "center",
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    component: "label",
    color: "primary",
    style: {
      width: "100%"
    }
  }, "CV", /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    hidden: true
  }), /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
    style: {
      cursor: "pointer"
    },
    position: "end"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: classes.inputIconsColor
  }, /*#__PURE__*/_react.default.createElement(_icons.FileCopy, null)))))), /*#__PURE__*/_react.default.createElement(_CardFooter.default, {
    className: classes.cardFooter
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "success",
    size: "sm"
  }, "Postuler"))));
};

var _default = ApplyForm;
exports.default = _default;