"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _user = _interopRequireDefault(require("slices/user"));

var _crud = _interopRequireDefault(require("slices/crud"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    user: _user.default,
    crud: _crud.default
  },
  devTools: process.env.NODE_ENV !== "production"
});
exports.store = store;