"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionTypography;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Small = _interopRequireDefault(require("components/Typography/Small.js"));

var _Danger = _interopRequireDefault(require("components/Typography/Danger.js"));

var _Warning = _interopRequireDefault(require("components/Typography/Warning.js"));

var _Success = _interopRequireDefault(require("components/Typography/Success.js"));

var _Info = _interopRequireDefault(require("components/Typography/Info.js"));

var _Primary = _interopRequireDefault(require("components/Typography/Primary.js"));

var _Muted = _interopRequireDefault(require("components/Typography/Muted.js"));

var _Quote = _interopRequireDefault(require("components/Typography/Quote.js"));

var _avatar = _interopRequireDefault(require("assets/img/faces/avatar.jpg"));

var _typographyStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/typographyStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_typographyStyle.default);

function SectionTypography() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "typography"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Typography")), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Header 1"), /*#__PURE__*/_react.default.createElement("h1", null, "The Life of Material Kit")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Header 2"), /*#__PURE__*/_react.default.createElement("h2", null, "The Life of Material Kit")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Header 3"), /*#__PURE__*/_react.default.createElement("h3", null, "The Life of Material Kit")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Header 4"), /*#__PURE__*/_react.default.createElement("h4", null, "The Life of Material Kit")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Header 5"), /*#__PURE__*/_react.default.createElement("h5", null, "The Life of Material Kit")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Header 6"), /*#__PURE__*/_react.default.createElement("h6", null, "The Life of Material Kit")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Header 1"), /*#__PURE__*/_react.default.createElement("h1", {
    className: classes.title
  }, "The Life of Material Kit")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Header 2"), /*#__PURE__*/_react.default.createElement("h2", {
    className: classes.title
  }, "The Life of Material Kit")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Header 3"), /*#__PURE__*/_react.default.createElement("h3", {
    className: classes.title
  }, "The Life of Material Kit")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Header 4"), /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.title
  }, "The Life of Material Kit")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Paragraph"), /*#__PURE__*/_react.default.createElement("p", null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Quote"), /*#__PURE__*/_react.default.createElement(_Quote.default, {
    text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
    author: " Kanye West, Musician"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Muted Text"), /*#__PURE__*/_react.default.createElement(_Muted.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Primary Text"), /*#__PURE__*/_react.default.createElement(_Primary.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Info Text"), /*#__PURE__*/_react.default.createElement(_Info.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Success Text"), /*#__PURE__*/_react.default.createElement(_Success.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Warning Text"), /*#__PURE__*/_react.default.createElement(_Warning.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Danger Text"), /*#__PURE__*/_react.default.createElement(_Danger.default, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.note
  }, "Small Tag"), /*#__PURE__*/_react.default.createElement("h2", null, "Header with small subtitle", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Small.default, null, "Use ", '"Small"', " tag for the headers"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space50
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "images"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Images")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 2
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Rounded Image"), /*#__PURE__*/_react.default.createElement("img", {
    src: _avatar.default,
    alt: "...",
    className: classes.imgRounded + " " + classes.imgFluid
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 2,
    className: classes.marginLeft
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Circle Image"), /*#__PURE__*/_react.default.createElement("img", {
    src: _avatar.default,
    alt: "...",
    className: classes.imgRoundedCircle + " " + classes.imgFluid
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 2,
    className: classes.marginLeft
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Rounded Raised"), /*#__PURE__*/_react.default.createElement("img", {
    src: _avatar.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 2,
    className: classes.marginLeft
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Circle Raised"), /*#__PURE__*/_react.default.createElement("img", {
    src: _avatar.default,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
  }))), /*#__PURE__*/_react.default.createElement(_GridContainer.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.space50
  })));
}