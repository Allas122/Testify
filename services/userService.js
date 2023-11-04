"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const Model_1 = require("../Model");
const argon2_1 = require("argon2");
async function Register(params) {
    try {
        params.password = await (0, argon2_1.hash)(params.password);
        return await Model_1.UserModel.create(params);
    }
    catch (e) {
        throw e;
    }
}
exports.Register = Register;
