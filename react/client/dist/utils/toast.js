"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeToast;
exports.CRUD_UPDATE = exports.CRUD_CREATE = exports.CRUD_DELETE = exports.LOGOUT = exports.LOGIN_SUCCESSFULL = exports.REGISTER_SUCCESSFULL = exports.NOT_FOUND = void 0;
var NOT_FOUND = "NOT_FOUND";
exports.NOT_FOUND = NOT_FOUND;
var REGISTER_SUCCESSFULL = "REGISTER_SUCCESFULL";
exports.REGISTER_SUCCESSFULL = REGISTER_SUCCESSFULL;
var LOGIN_SUCCESSFULL = "LOGIN_SUCCESSFULL";
exports.LOGIN_SUCCESSFULL = LOGIN_SUCCESSFULL;
var LOGOUT = "LOGOUT";
exports.LOGOUT = LOGOUT;
var CRUD_DELETE = "CRUD_DELETED";
exports.CRUD_DELETE = CRUD_DELETE;
var CRUD_CREATE = "CRUD_CREATE";
exports.CRUD_CREATE = CRUD_CREATE;
var CRUD_UPDATE = "CRUD_UPDATE";
exports.CRUD_UPDATE = CRUD_UPDATE;

function makeToast(type) {
  switch (type) {
    case NOT_FOUND:
      return ["La page n'existe pas", {
        appearance: "error"
      }];

    case REGISTER_SUCCESSFULL:
      return ["Votre compte a bién été créer, vous pouvez maitenant vous connectez.", {
        appearance: "success"
      }];

    case LOGIN_SUCCESSFULL:
      return ["Connexion réussie", {
        appearance: "success"
      }];

    case LOGOUT:
      return ["Déconnexion réussie", {
        appearance: "success"
      }];

    case CRUD_DELETE:
      return ["Entité supprimé", {
        appearance: "success"
      }];

    case CRUD_CREATE:
      return ["Entité créer", {
        appareance: "success"
      }];

    case CRUD_UPDATE:
      return ["Entité Update", {
        appareance: "error"
      }];
  }
}