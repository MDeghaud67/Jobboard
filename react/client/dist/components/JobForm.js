"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _icons = require("@material-ui/icons/");

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _CustomInput = _interopRequireDefault(require("components/CustomInput/CustomInput.js"));

var _core = require("@material-ui/core");

var _reactDatetime = _interopRequireDefault(require("react-datetime"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem"));

var _javascriptStyles = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js"));

var _ajax = require("utils/ajax");

var _reactRedux = require("react-redux");

var _crud = require("slices/crud");

var _toast = _interopRequireWildcard(require("utils/toast"));

var _reactToastNotifications = require("react-toast-notifications");

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)(_javascriptStyles.default);

var JobForm = function JobForm() {
  var classes = useStyles();

  var _useToasts = (0, _reactToastNotifications.useToasts)(),
      addToast = _useToasts.addToast;

  var dispatch = (0, _reactRedux.useDispatch)();
  var history = (0, _reactRouterDom.useHistory)();
  var companies = (0, _reactRedux.useSelector)(function (state) {
    return state.crud.data.companies;
  });

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visibility = _React$useState2[0],
      setVisibility = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isAdmin = _React$useState4[0],
      setIsAdmin = _React$useState4[1];

  var _React$useState5 = _react.default.useState({
    title: "",
    company: "",
    description: "",
    experienceRequired: "",
    workingTime: "",
    starAt: "",
    income: null,
    localisation: "",
    isAdmin: isAdmin
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
    formProp.isAdmin = isAdmin;
    setLoading(true);
    (0, _ajax.createUser)(formProp).then(function (res) {
      setTimeout(function () {
        setLoading(false);
        dispatch((0, _crud.createAction)({
          entity: 'users',
          data: res[0]
        }));
        addToast.apply(void 0, _toConsumableArray((0, _toast.default)(_toast.CRUD_CREATE)));
        history.push('/admin');
      }, 500);
    }).catch(function (err) {
      setLoading(false);

      if (err.message) {
        var message = err.message;
        setErrorsProp(JSON.parse(message));
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: loading ? 'loading' : ""
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit,
    className: classes.form
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    sm: 6
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Title...",
    id: "title",
    error: errorsProp.title !== undefined,
    errorMessage: errorsProp.title,
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      error: errorsProp.title !== undefined,
      name: "title",
      value: formProp.title,
      onChange: handleChange,
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_icons.Email, {
        className: classes.inputIconsColor
      }))
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    sm: 6
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: 1.5
  }, /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    id: "company"
  }, "Company"), /*#__PURE__*/_react.default.createElement(_core.Select, {
    labelId: "company",
    id: "company",
    name: "company",
    value: formProp.company,
    label: "Age",
    onChange: handleChange,
    endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
      position: "end"
    }, /*#__PURE__*/_react.default.createElement(_icons.Business, {
      className: classes.inputIconsColor
    }))
  }, companies.map(function (company, key) {
    return /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
      key: key,
      value: company.id
    }, company.name);
  }))))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    sm: 6
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Experience required...",
    id: "experienceRequired",
    error: errorsProp.experienceRequired !== undefined,
    errorMessage: errorsProp.experienceRequired,
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      error: errorsProp.experienceRequired !== undefined,
      name: "experienceRequired",
      value: formProp.experienceRequired,
      onChange: handleChange,
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_icons.Build, {
        className: classes.inputIconsColor
      }))
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    sm: 6
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Working time...",
    id: "workingTime",
    error: errorsProp.workingTime !== undefined,
    errorMessage: errorsProp.workingTime,
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      name: "workingTime",
      error: errorsProp.workingTime !== undefined,
      value: formProp.workingTime,
      onChange: handleChange,
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_icons.AccessTime, {
        className: classes.inputIconsColor
      }))
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    sm: 6
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Datetime Picker")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    className: classes.label
  }, "Datetime Picker"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_reactDatetime.default, {
    inputProps: {
      placeholder: "Datetime Picker Here"
    }
  }))))), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "",
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
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    sm: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Switch.default, {
      checked: isAdmin,
      onChange: function onChange(event) {
        return setIsAdmin(event.target.checked);
      },
      value: "checkedA",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      }
    }),
    classes: {
      label: classes.label
    },
    label: "Admin"
  })), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "success",
    type: "submit"
  }, "Cr\xE9er"))))));
};

var _default = JobForm;
exports.default = _default;