"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomTabs;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Card = _interopRequireDefault(require("components/Card/Card.js"));

var _CardBody = _interopRequireDefault(require("components/Card/CardBody.js"));

var _CardHeader = _interopRequireDefault(require("components/Card/CardHeader.js"));

var _customTabsStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/customTabsStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_customTabsStyle.default);

function CustomTabs(props) {
  var _classNames;

  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, value) {
    setValue(value);
  };

  var classes = useStyles();
  var headerColor = props.headerColor,
      plainTabs = props.plainTabs,
      tabs = props.tabs,
      title = props.title,
      rtlActive = props.rtlActive;
  var cardTitle = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.cardTitle, true), _defineProperty(_classNames, classes.cardTitleRTL, rtlActive), _classNames));
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    plain: plainTabs
  }, /*#__PURE__*/_react.default.createElement(_CardHeader.default, {
    color: headerColor,
    plain: plainTabs
  }, title !== undefined ? /*#__PURE__*/_react.default.createElement("div", {
    className: cardTitle
  }, title) : null, /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    value: value,
    onChange: handleChange,
    classes: {
      root: classes.tabsRoot,
      indicator: classes.displayNone
    }
  }, tabs.map(function (prop, key) {
    var icon = {};

    if (prop.tabIcon) {
      icon = {
        icon: typeof prop.tabIcon === "string" ? /*#__PURE__*/_react.default.createElement(_Icon.default, null, prop.tabIcon) : /*#__PURE__*/_react.default.createElement(prop.tabIcon, null)
      };
    }

    return /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({
      classes: {
        root: classes.tabRootButton,
        label: classes.tabLabel,
        selected: classes.tabSelected,
        wrapper: classes.tabWrapper
      },
      key: key,
      label: prop.tabName
    }, icon));
  }))), /*#__PURE__*/_react.default.createElement(_CardBody.default, null, tabs.map(function (prop, key) {
    if (key === value) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: key
      }, prop.tabContent);
    }

    return null;
  })));
}

CustomTabs.propTypes = {
  headerColor: _propTypes.default.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  title: _propTypes.default.string,
  tabs: _propTypes.default.arrayOf(_propTypes.default.shape({
    tabName: _propTypes.default.string.isRequired,
    tabIcon: _propTypes.default.object,
    tabContent: _propTypes.default.node.isRequired
  })),
  rtlActive: _propTypes.default.bool,
  plainTabs: _propTypes.default.bool
};