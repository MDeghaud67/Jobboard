"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionNavbars;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _Face = _interopRequireDefault(require("@material-ui/icons/Face"));

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _Explore = _interopRequireDefault(require("@material-ui/icons/Explore"));

var _GridContainer = _interopRequireDefault(require("components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("components/Grid/GridItem.js"));

var _Header = _interopRequireDefault(require("components/Header/Header.js"));

var _CustomInput = _interopRequireDefault(require("components/CustomInput/CustomInput.js"));

var _CustomDropdown = _interopRequireDefault(require("components/CustomDropdown/CustomDropdown.js"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button.js"));

var _bg = _interopRequireDefault(require("assets/img/bg.jpg"));

var _avatar = _interopRequireDefault(require("assets/img/faces/avatar.jpg"));

var _navbarsStyle = _interopRequireDefault(require("assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_navbarsStyle.default);

function SectionNavbars() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Menu")), /*#__PURE__*/_react.default.createElement(_Header.default, {
    brand: "Menu",
    color: "primary",
    leftLinks: /*#__PURE__*/_react.default.createElement(_List.default, {
      className: classes.list
    }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Link")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Link")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_CustomDropdown.default, {
      buttonText: "Dropdown",
      dropdownHeader: "Dropdown Header",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"]
    })))
  })), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Menu with Icons")), /*#__PURE__*/_react.default.createElement(_Header.default, {
    brand: "Icons",
    color: "info",
    rightLinks: /*#__PURE__*/_react.default.createElement(_List.default, {
      className: classes.list
    }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      color: "transparent",
      className: classes.navLink
    }, /*#__PURE__*/_react.default.createElement(_Email.default, {
      className: classes.icons
    }))), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      color: "transparent",
      className: classes.navLink
    }, /*#__PURE__*/_react.default.createElement(_Face.default, {
      className: classes.icons
    }))), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_CustomDropdown.default, {
      left: true,
      hoverColor: "info",
      dropdownHeader: "Dropdown Header",
      buttonIcon: "settings",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"]
    })))
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Navigation"))), /*#__PURE__*/_react.default.createElement("div", {
    id: "navbar",
    className: classes.navbar
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.navigation,
    style: {
      backgroundImage: "url(" + _bg.default + ")"
    }
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    brand: "Brand",
    color: "rose",
    leftLinks: /*#__PURE__*/_react.default.createElement(_List.default, {
      className: classes.list
    }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Link")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Link"))),
    rightLinks: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
      white: true,
      inputRootCustomClasses: classes.inputRootCustomClasses,
      formControlProps: {
        className: classes.formControl
      },
      inputProps: {
        placeholder: "Search",
        inputProps: {
          "aria-label": "Search",
          className: classes.searchInput
        }
      }
    }), /*#__PURE__*/_react.default.createElement(_Button.default, {
      justIcon: true,
      round: true,
      color: "white"
    }, /*#__PURE__*/_react.default.createElement(_Search.default, {
      className: classes.searchIcon
    })))
  }), /*#__PURE__*/_react.default.createElement(_Header.default, {
    brand: "Info Color",
    color: "info",
    rightLinks: /*#__PURE__*/_react.default.createElement(_List.default, {
      className: classes.list
    }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Discover")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Profile")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Settings")))
  }), /*#__PURE__*/_react.default.createElement(_Header.default, {
    brand: "Primary Color",
    color: "primary",
    rightLinks: /*#__PURE__*/_react.default.createElement(_List.default, {
      className: classes.list
    }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, /*#__PURE__*/_react.default.createElement(_Explore.default, {
      className: classes.icons
    }), " Discover")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, /*#__PURE__*/_react.default.createElement(_AccountCircle.default, {
      className: classes.icons
    }), " Profile")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
      className: classes.icons
    }, "settings"), " Settings")))
  }), /*#__PURE__*/_react.default.createElement(_Header.default, {
    brand: "Navbar with notifications",
    color: "dark",
    rightLinks: /*#__PURE__*/_react.default.createElement(_List.default, {
      className: classes.list
    }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Discover")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Wishlist")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      justIcon: true,
      round: true,
      href: "#pablo",
      className: classes.notificationNavLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "rose"
    }, /*#__PURE__*/_react.default.createElement(_Email.default, {
      className: classes.icons
    }))), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_CustomDropdown.default, {
      left: true,
      caret: false,
      hoverColor: "black",
      dropdownHeader: "Dropdown Header",
      buttonText: /*#__PURE__*/_react.default.createElement("img", {
        src: _avatar.default,
        className: classes.img,
        alt: "profile"
      }),
      buttonProps: {
        className: classes.navLink + " " + classes.imageDropdownButton,
        color: "transparent"
      },
      dropdownList: ["Me", "Settings and other stuff", "Sign out"]
    })))
  }), /*#__PURE__*/_react.default.createElement(_Header.default, {
    brand: "Navbar with profile",
    rightLinks: /*#__PURE__*/_react.default.createElement(_List.default, {
      className: classes.list
    }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Discover")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Wishlist")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.registerNavLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "rose",
      round: true
    }, "Register")))
  }), /*#__PURE__*/_react.default.createElement(_Header.default, {
    brand: "Transparent",
    color: "transparent",
    rightLinks: /*#__PURE__*/_react.default.createElement(_List.default, {
      className: classes.list
    }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter"
    }), " ", "Twitter")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook"
    }), " ", "Facebook")), /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram"
    }), " ", "Instagram")))
  }))));
}