"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _reactRouterDom = require("react-router-dom");

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _headerStyle = _interopRequireDefault(require("assets/jss/material-kit-react/components/headerStyle.js"));

var _HeaderLinks = _interopRequireDefault(require("./HeaderLinks"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_headerStyle.default);

function Header(props) {
  var _classNames;

  var classes = useStyles();
  var location = (0, _reactRouter.useLocation)();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isScrolled = _React$useState4[0],
      setIsScrolled = _React$useState4[1];

  _react.default.useEffect(function () {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  var headerColorChange = function headerColorChange() {
    var color = props.color,
        changeColorOnScroll = props.changeColorOnScroll;
    var windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      setIsScrolled(true);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      setIsScrolled(false);
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  var color = props.color,
      leftLinks = props.leftLinks,
      brand = props.brand,
      fixed = props.fixed,
      absolute = props.absolute;
  var appBarClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.appBar, true), _defineProperty(_classNames, classes[color], color), _defineProperty(_classNames, classes.absolute, absolute), _defineProperty(_classNames, classes.fixed, !location.pathname.includes("job")), _classNames));

  var brandComponent = /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    style: {
      textDecoration: 'none',
      color: isScrolled ? "black" : "white"
    }
  }, " ", /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.title
  }, brand), " ");

  return /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    className: appBarClasses
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    className: classes.container
  }, leftLinks !== undefined ? brandComponent : null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.flex
  }, leftLinks !== undefined ? /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    smDown: true,
    implementation: "css"
  }, leftLinks) : brandComponent), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    smDown: true,
    implementation: "css"
  }, /*#__PURE__*/_react.default.createElement(_HeaderLinks.default, {
    isScrolled: isScrolled
  })), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    mdUp: true
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle
  }, /*#__PURE__*/_react.default.createElement(_Menu.default, null)))), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    mdUp: true,
    implementation: "js"
  }, /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.appResponsive
  }, /*#__PURE__*/_react.default.createElement(_HeaderLinks.default, {
    isScrolled: isScrolled
  })))));
}

Header.defaultProp = {
  color: "white"
};
Header.propTypes = {
  color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  leftLinks: _propTypes.default.node,
  brand: _propTypes.default.string,
  fixed: _propTypes.default.bool,
  absolute: _propTypes.default.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: _propTypes.default.shape({
    height: _propTypes.default.number.isRequired,
    color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]).isRequired
  })
};