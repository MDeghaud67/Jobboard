"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDataTableComponent = _interopRequireDefault(require("react-data-table-component"));

var _Button = _interopRequireDefault(require("components/CustomButtons/Button"));

var _GridContainer = _interopRequireDefault(require("./Grid/GridContainer"));

var _GridItem = _interopRequireDefault(require("./Grid/GridItem"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _styles = require("@material-ui/core/styles");

var _components = _interopRequireDefault(require("assets/jss/material-kit-react/views/components.js"));

var _ajax = require("utils/ajax");

var _reactToastNotifications = require("react-toast-notifications");

var _toast = _interopRequireWildcard(require("utils/toast"));

var _reactRedux = require("react-redux");

var _crud = require("slices/crud");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Transition = /*#__PURE__*/_react.default.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/_react.default.createElement(_Slide.default, _extends({
    direction: "down",
    ref: ref
  }, props));
});

var useStyles = (0, _styles.makeStyles)(_components.default);

var CompanyCrud = function CompanyCrud(_ref) {
  var companies = _ref.companies;
  var classes = useStyles();

  var _useToasts = (0, _reactToastNotifications.useToasts)(),
      addToast = _useToasts.addToast;

  var dispatch = (0, _reactRedux.useDispatch)();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      classicModal = _React$useState2[0],
      setClassicModal = _React$useState2[1];

  var _React$useState3 = _react.default.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      companySelected = _React$useState4[0],
      setCompanySelected = _React$useState4[1];

  var confirmDelete = function confirmDelete(row) {
    setCompanySelected(row);
    setClassicModal(true);
  };

  var handleUpdate = function handleUpdate(row) {};

  var handleDelete = function handleDelete() {
    setClassicModal(false);
    (0, _ajax.deleteCompany)(companySelected.id).then(function (res) {
      addToast.apply(void 0, _toConsumableArray((0, _toast.default)(_toast.CRUD_DELETE)));
      dispatch((0, _crud.deleteAction)({
        entity: 'companies',
        id: companySelected.id
      }));
    }).catch(function (err) {
      console.log(err);
    });
  };

  var columns = [{
    name: 'Id',
    selector: function selector(row) {
      return row.id;
    }
  }, {
    name: 'Name',
    selector: function selector(row) {
      return row.name;
    }
  }, {
    name: 'Image',
    selector: function selector(row) {
      return /*#__PURE__*/_react.default.createElement("img", {
        src: (0, _ajax.getCompanyImage)(row.image),
        alt: "..."
      });
    }
  }, {
    name: 'Description',
    selector: function selector(row) {
      return row.description;
    }
  }, {
    name: "Action",
    selector: function selector(row) {
      return /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_GridItem.default, {
        sm: 6
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        color: "info",
        onClick: function onClick() {
          return handleUpdate(row);
        }
      }, "Edit")), /*#__PURE__*/_react.default.createElement(_GridItem.default, {
        sm: 6
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        color: "danger",
        onClick: function onClick() {
          return confirmDelete(row);
        }
      }, "Delete")));
    }
  }];
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "success"
  }, "Create")), /*#__PURE__*/_react.default.createElement(_reactDataTableComponent.default, {
    columns: columns,
    data: companies
  }), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    classes: {
      root: classes.center,
      paper: classes.modal
    },
    open: classicModal,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: function onClose() {
      return setClassicModal(false);
    },
    "aria-labelledby": "classic-modal-slide-title",
    "aria-describedby": "classic-modal-slide-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "classic-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    color: "inherit",
    onClick: function onClick() {
      return setClassicModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_Close.default, {
    className: classes.modalClose
  })), /*#__PURE__*/_react.default.createElement("h4", {
    className: classes.modalTitle
  }, "Voulez vous vraiment cet entreprise  ", companySelected === null || companySelected === void 0 ? void 0 : companySelected.name, " (tout les offres concernant cette entreprise seront aussi supprim\xE9)")), /*#__PURE__*/_react.default.createElement(_DialogContent.default, {
    id: "classic-modal-slide-description",
    className: classes.modalBody
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: handleDelete,
    color: "success"
  }, "Oui")), /*#__PURE__*/_react.default.createElement(_DialogActions.default, {
    className: classes.modalFooter
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick() {
      return setClassicModal(false);
    },
    color: "danger",
    simple: true
  }, "Annuler"))));
};

var _default = CompanyCrud;
exports.default = _default;