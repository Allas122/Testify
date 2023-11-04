"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("./db");
exports.TestModel = db_1.Client.define("Tests", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    creatorId: {
        type: sequelize_1.DataTypes.INTEGER
    },
    likes: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    },
    dislikes: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    }
});
