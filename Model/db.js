"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const sequelize_1 = require("sequelize");
const client = new sequelize_1.Sequelize(global.config.DB_URL);
exports.Client = client;
