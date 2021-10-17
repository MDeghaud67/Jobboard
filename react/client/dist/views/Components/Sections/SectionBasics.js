"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionBasics;

var _react = _interopRequireDefault(require("react"));

var _nouislider = _interopRequireDefault(require("nouislider"));

var _styles = require("@material-ui/core/styles");

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _People = _interopRequireDefault(require("@material-ui/icons/People"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _FiberManualRecord = _interopRequireDefault(require("@material-ui/icons/FiberManualRecord"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _CustomInput = _interopRequireDefault(require("components/CustomInput/CustomInput.js"));

var _CustomLinearProgress = _interopRequireDefault(require("components/CustomLinearProgress/CustomLinearProgress.js"));

var _Pagination = _interopRequireDefault(require("components/Pagination/Pagination.js"));

var _Badge = _interopRequireDefault(require("components/Badge/Badge.js"));

var _basicsStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/basicsStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_basicsStyle.default);

function SectionBasics() {
  var classes = useStyles();

  var _React$useState = _react.default.useState([24, 22]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var _React$useState3 = _react.default.useState("b"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedEnabled = _React$useState4[0],
      setSelectedEnabled = _React$useState4[1];

  var _React$useState5 = _react.default.useState(true),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      checkedA = _React$useState6[0],
      setCheckedA = _React$useState6[1];

  var _React$useState7 = _react.default.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      checkedB = _React$useState8[0],
      setCheckedB = _React$useState8[1];

  _react.default.useEffect(function () {
    if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
      _nouislider.default.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    if (!document.getElementById("sliderDouble").classList.contains("noUi-target")) {
      _nouislider.default.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    return function cleanup() {};
  });

  var handleToggle = function handleToggle(value) {
    var currentIndex = checked.indexOf(value);

    var newChecked = _toConsumableArray(checked);

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.sections
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Basic Elements")), /*#__PURE__*/_react.default.createElement("div", {
    id: "buttons"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Buttons", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("small", null, "Pick your style"))), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary"
  }, "Default"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    round: true
  }, "round"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    round: true
  }, /*#__PURE__*/_react.default.createElement(_Favorite.default, {
    className: classes.icons
  }), " with icon"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    round: true,
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_Favorite.default, {
    className: classes.icons
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    simple: true
  }, "simple"))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Pick your size"))), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "sm"
  }, "Small"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary"
  }, "Regular"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg"
  }, "Large"))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("small", null, "Pick your color"))), /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/_react.default.createElement(_Button.default, null, "Default"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "info"
  }, "Info"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "success"
  }, "Success"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "warning"
  }, "Warning"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "danger"
  }, "Danger"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "rose"
  }, "Rose")))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space50
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "inputs"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Inputs")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    id: "regular",
    inputProps: {
      placeholder: "Regular"
    },
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "With floating label",
    id: "float",
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Success input",
    id: "success",
    success: true,
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "Error input",
    id: "error",
    error: true,
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "With material Icons",
    id: "material",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement(_People.default, null))
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    labelText: "With Font Awesome Icons",
    id: "font-awesome",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
        position: "end"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fas fa-users"
      }))
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space70
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "checkRadios"
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Checkboxes")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      tabIndex: -1,
      onClick: function onClick() {
        return handleToggle(21);
      },
      checkedIcon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Unchecked"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      tabIndex: -1,
      onClick: function onClick() {
        return handleToggle(22);
      },
      checked: checked.indexOf(22) !== -1 ? true : false,
      checkedIcon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Checked"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    disabled: true,
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      tabIndex: -1,
      checkedIcon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    disabled: true,
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      tabIndex: -1,
      checked: checked.indexOf(24) !== -1 ? true : false,
      checkedIcon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/_react.default.createElement(_Check.default, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Checked"
  }))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Radio Buttons")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
      checked: selectedEnabled === "a",
      onChange: function onChange() {
        return setSelectedEnabled("a");
      },
      value: "a",
      name: "radio button enabled",
      "aria-label": "A",
      icon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "First Radio"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
      checked: selectedEnabled === "b",
      onChange: function onChange() {
        return setSelectedEnabled("b");
      },
      value: "b",
      name: "radio button enabled",
      "aria-label": "B",
      icon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Second Radio"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    disabled: true,
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
      checked: false,
      value: "a",
      name: "radio button disabled",
      "aria-label": "B",
      icon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked Radio"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    disabled: true,
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
      checked: true,
      value: "b",
      name: "radio button disabled",
      "aria-label": "B",
      icon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/_react.default.createElement(_FiberManualRecord.default, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Checked Radio"
  }))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Toggle Buttons")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Switch.default, {
      checked: checkedA,
      onChange: function onChange(event) {
        return setCheckedA(event.target.checked);
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
    label: "Toggle is on"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Switch.default, {
      checked: checkedB,
      onChange: function onChange(event) {
        return setCheckedB(event.target.checked);
      },
      value: "checkedB",
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
    label: "Toggle is off"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space70
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "progress"
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Progress Bars")), /*#__PURE__*/_react.default.createElement(_CustomLinearProgress.default, {
    variant: "determinate",
    color: "primary",
    value: 30
  }), /*#__PURE__*/_react.default.createElement(_CustomLinearProgress.default, {
    variant: "determinate",
    color: "info",
    value: 60
  }), /*#__PURE__*/_react.default.createElement(_CustomLinearProgress.default, {
    variant: "determinate",
    color: "success",
    value: 100,
    style: {
      width: "35%",
      display: "inline-block"
    }
  }), /*#__PURE__*/_react.default.createElement(_CustomLinearProgress.default, {
    variant: "determinate",
    color: "warning",
    value: 100,
    style: {
      width: "20%",
      display: "inline-block"
    }
  }), /*#__PURE__*/_react.default.createElement(_CustomLinearProgress.default, {
    variant: "determinate",
    color: "danger",
    value: 25,
    style: {
      width: "45%",
      display: "inline-block"
    }
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Pagination")), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    pages: [{
      text: 1
    }, {
      text: "..."
    }, {
      text: 5
    }, {
      text: 6
    }, {
      active: true,
      text: 7
    }, {
      text: 8
    }, {
      text: 9
    }, {
      text: "..."
    }, {
      text: 12
    }]
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    pages: [{
      text: "PREV"
    }, {
      text: 1
    }, {
      text: 2
    }, {
      active: true,
      text: 3
    }, {
      text: 4
    }, {
      text: 5
    }, {
      text: "NEXT"
    }],
    color: "info"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    id: "sliders"
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Sliders")), /*#__PURE__*/_react.default.createElement("div", {
    id: "sliderRegular",
    className: "slider-primary"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    id: "sliderDouble",
    className: "slider-info"
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Badges")), /*#__PURE__*/_react.default.createElement(_Badge.default, null, "default"), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "primary"
  }, "primary"), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "info"
  }, "info"), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "success"
  }, "success"), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "warning"
  }, "warning"), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "danger"
  }, "danger"), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    color: "rose"
  }, "rose"))))));
}