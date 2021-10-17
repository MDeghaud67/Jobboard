"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.logout = exports.update = exports.onLogin = exports.userSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  authentificated: false,
  data: {}
};
var userSlice = (0, _toolkit.createSlice)({
  name: 'user',
  initialState: initialState,
  reducers: {
    onLogin: function onLogin(state, action) {
      state.authentificated = true;
      state.data = action.payload;
    },
    update: function update(state, action) {
      state.data = action.payload;
    },
    logout: function logout(state, action) {
      state.authentificated = false;
      state.data = {};
    }
  }
}); // Action creators are generated for each case reducer function

exports.userSlice = userSlice;
var _userSlice$actions = userSlice.actions,
    onLogin = _userSlice$actions.onLogin,
    update = _userSlice$actions.update,
    logout = _userSlice$actions.logout;
exports.logout = logout;
exports.update = update;
exports.onLogin = onLogin;
var _default = userSlice.reducer;
exports.default = _default;