"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfile = getProfile;
exports.login = login;
exports.register = register;
exports.getJobs = getJobs;
exports.getJob = getJob;
exports.getJobsByCompany = getJobsByCompany;
exports.getCompanyImage = getCompanyImage;
exports.getAdminsData = getAdminsData;
exports.createUser = createUser;
exports.deleteUser = deleteUser;
exports.deleteJob = deleteJob;
exports.deleteCompany = deleteCompany;

var _jwt = require("./jwt");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var apiLocation = process.env.REACT_APP_APILOCATION; // Token functions

function setHeaderToken() {
  return {
    'Authorization': 'Bearer ' + (0, _jwt.getAuthToken)()
  };
}

;

function getProfile() {
  return get("/auth", true);
}

function login(body) {
  return post("/auth/login", body);
}

function register(body) {
  return post("/auth/register", body);
}

function getJobs() {
  return get("/jobs");
}

function getJob(id) {
  return get("/job/".concat(id));
}

function getJobsByCompany(company) {
  return get("/job/company/".concat(company));
}

function getCompanyImage(name) {
  return "".concat(apiLocation, "/file/company-image/").concat(name);
}

function getAdminsData() {
  return get("/datas", true);
} // CRUD


function createUser(body) {
  return post("/user", body, true);
}

function deleteUser(id) {
  return deleteRequest("/user/".concat(id), null, true);
}

function deleteJob(id) {
  return deleteRequest("/job/".concat(id), null, true);
}

function deleteCompany(id) {
  return deleteRequest("/company/".concat(id), null, true);
}

function get(path) {
  var needAuth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var defaultOptions = {
    headers: {}
  };

  if (needAuth) {
    defaultOptions.headers = _objectSpread(_objectSpread({}, defaultOptions.headers), setHeaderToken());
  }

  return fetch("".concat(apiLocation).concat(path), defaultOptions).then( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
      var errors;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!res.ok) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", res.json());

            case 2:
              _context.next = 4;
              return new Promise(function (resolve, reject) {
                res.json().then(function (res) {
                  resolve(res);
                });
              });

            case 4:
              errors = _context.sent;
              throw new Error(JSON.stringify(errors === null || errors === void 0 ? void 0 : errors.message));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

function post(path, body) {
  var needAuth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return request('POST', path, body, needAuth ? setHeaderToken() : {});
}

function deleteRequest(path, body) {
  var needAuth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return request("DELETE", path, body, needAuth ? setHeaderToken() : {});
}

function postFormData(path, body) {
  var needAuth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return formDataRequest('POST', path, body, needAuth ? setHeaderToken() : {});
}

function request(method, path, body) {
  var optHeaders = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = {
    method: method,
    headers: _objectSpread({}, optHeaders)
  };

  if (method !== "DELETE") {
    options = _objectSpread(_objectSpread({}, options), {}, {
      headers: _objectSpread({
        "Content-type": 'application/json'
      }, options.headers),
      body: JSON.stringify(body)
    });
  }

  return fetch("".concat(apiLocation).concat(path), options).then( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
      var errors;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!res.ok) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", res.json());

            case 2:
              _context2.next = 4;
              return new Promise(function (resolve, reject) {
                res.json().then(function (res) {
                  resolve(res);
                });
              });

            case 4:
              errors = _context2.sent;
              throw new Error(JSON.stringify(errors === null || errors === void 0 ? void 0 : errors.message));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
}

function formDataRequest(method, path, formData) {
  var optHeaders = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = {
    method: method,
    headers: _objectSpread({}, optHeaders),
    body: formData
  };
  return fetch("".concat(apiLocation).concat(path), options).then( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(res) {
      var errors;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!res.ok) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", res.json());

            case 2:
              _context3.next = 4;
              return new Promise(function (resolve, reject) {
                res.json().then(function (res) {
                  resolve(res);
                });
              });

            case 4:
              errors = _context3.sent;
              throw new Error(JSON.stringify(errors === null || errors === void 0 ? void 0 : errors.message));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
}