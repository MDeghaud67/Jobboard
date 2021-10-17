"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createAction = exports.updateAction = exports.deleteAction = exports.hydrate = exports.crudSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  data: {
    users: [],
    jobs: [],
    companies: []
  }
};
var crudSlice = (0, _toolkit.createSlice)({
  name: 'crud',
  initialState: initialState,
  reducers: {
    hydrate: function hydrate(state, action) {
      state.data = action.payload;
    },
    deleteAction: function deleteAction(state, action) {
      if (action.payload.entity == "companies") {
        state.data['jobs'] = state.data['jobs'].filter(function (job) {
          return job.companyId !== action.payload.id;
        });
      }

      state.data[action.payload.entity] = state.data[action.payload.entity].filter(function (user) {
        return user.id !== action.payload.id;
      });
    },
    updateAction: function updateAction(state, action) {
      state.data[action.payload.entity] = state.data[action.payload.entity][state.data[action.payload.entity].findIndex(function (user) {
        return user.id == action.payload.item.id;
      })] = action.payload.item;
    },
    createAction: function createAction(state, action) {
      state.data[action.payload.entity].push(action.payload.data);
    }
  }
}); // Action creators are generated for each case reducer function

exports.crudSlice = crudSlice;
var _crudSlice$actions = crudSlice.actions,
    hydrate = _crudSlice$actions.hydrate,
    deleteAction = _crudSlice$actions.deleteAction,
    updateAction = _crudSlice$actions.updateAction,
    createAction = _crudSlice$actions.createAction;
exports.createAction = createAction;
exports.updateAction = updateAction;
exports.deleteAction = deleteAction;
exports.hydrate = hydrate;
var _default = crudSlice.reducer;
exports.default = _default;