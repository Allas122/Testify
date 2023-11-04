"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = exports.UserModel = exports.Client = void 0;
var db_1 = require("./db");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return db_1.Client; } });
var userModel_1 = require("./userModel");
Object.defineProperty(exports, "UserModel", { enumerable: true, get: function () { return userModel_1.UserModel; } });
var testModel_1 = require("./testModel");
Object.defineProperty(exports, "TestModel", { enumerable: true, get: function () { return testModel_1.TestModel; } });
