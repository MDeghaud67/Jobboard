"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionCarousel;

var _react = _interopRequireDefault(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _styles = require("@material-ui/core/styles");

var _LocationOn = _interopRequireDefault(require("@material-ui/icons/LocationOn"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Card = _interopRequireDefault(require("components/Card/Card.js"));

var _bg = _interopRequireDefault(require("assets/img/bg.jpg"));

var _bg2 = _interopRequireDefault(require("assets/img/bg2.jpg"));

var _bg3 = _interopRequireDefault(require("assets/img/bg3.jpg"));

var _carouselStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/carouselStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// react component for creating beautiful carousel
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_carouselStyle.default);

function SectionCarousel() {
  var classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8,
    className: classes.marginAuto
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    carousel: true
  }, /*#__PURE__*/_react.default.createElement(_reactSlick.default, settings, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _bg.default,
    alt: "First slide",
    className: "slick-image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "slick-caption"
  }, /*#__PURE__*/_react.default.createElement("h4", null, /*#__PURE__*/_react.default.createElement(_LocationOn.default, {
    className: "slick-icons"
  }), "Yellowstone National Park, United States"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _bg2.default,
    alt: "Second slide",
    className: "slick-image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "slick-caption"
  }, /*#__PURE__*/_react.default.createElement("h4", null, /*#__PURE__*/_react.default.createElement(_LocationOn.default, {
    className: "slick-icons"
  }), "Somewhere Beyond, United States"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _bg3.default,
    alt: "Third slide",
    className: "slick-image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "slick-caption"
  }, /*#__PURE__*/_react.default.createElement("h4", null, /*#__PURE__*/_react.default.createElement(_LocationOn.default, {
    className: "slick-icons"
  }), "Yellowstone National Park, United States")))))))));
}