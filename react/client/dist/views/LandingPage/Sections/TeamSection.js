"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TeamSection;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _Card = _interopRequireDefault(require("components/Card/Card.js"));

var _CardBody = _interopRequireDefault(require("components/Card/CardBody.js"));

var _CardFooter = _interopRequireDefault(require("components/Card/CardFooter.js"));

var _teamStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"));

var _avatar = _interopRequireDefault(require("assets/img/faces/avatar.jpg"));

var _christian = _interopRequireDefault(require("assets/img/faces/christian.jpg"));

var _kendall = _interopRequireDefault(require("assets/img/faces/kendall.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// nodejs library that concatenates classes
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_teamStyle.default);

function TeamSection() {
  var classes = useStyles();
  var imageClasses = (0, _classnames.default)(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: classes.title
  }, "Here is our team"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    plain: true
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _avatar.default,
    alt: "...",
    className: imageClasses
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.cardTitle
  }, "Gigi Hadid", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("small", {
    className: classes.smallTitle
  }, "Model")), /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement("p", {
    className: classes.description
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", /*#__PURE__*/_react.default.createElement("a", {
    href: "#pablo"
  }, "links"), " for people to be able to follow them outside the site.")), /*#__PURE__*/_react.default.createElement(_CardFooter.default, {
    className: classes.justifyCenter
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-twitter"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-instagram"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-facebook"
  }))))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    plain: true
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _christian.default,
    alt: "...",
    className: imageClasses
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.cardTitle
  }, "Christian Louboutin", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("small", {
    className: classes.smallTitle
  }, "Designer")), /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement("p", {
    className: classes.description
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", /*#__PURE__*/_react.default.createElement("a", {
    href: "#pablo"
  }, "links"), " for people to be able to follow them outside the site.")), /*#__PURE__*/_react.default.createElement(_CardFooter.default, {
    className: classes.justifyCenter
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-twitter"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-linkedin"
  }))))), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    plain: true
  }, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _kendall.default,
    alt: "...",
    className: imageClasses
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.cardTitle
  }, "Kendall Jenner", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("small", {
    className: classes.smallTitle
  }, "Model")), /*#__PURE__*/_react.default.createElement(_CardBody.default, null, /*#__PURE__*/_react.default.createElement("p", {
    className: classes.description
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", /*#__PURE__*/_react.default.createElement("a", {
    href: "#pablo"
  }, "links"), " for people to be able to follow them outside the site.")), /*#__PURE__*/_react.default.createElement(_CardFooter.default, {
    className: classes.justifyCenter
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-twitter"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-instagram"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: classes.socials + " fab fa-facebook"
  }))))))));
}