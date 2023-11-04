"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRotes = void 0;
const userController_1 = require("../controllers/userController");
async function UserRotes(instance, opts, done) {
    instance.get("/user/registration", userController_1.UserController.Registration);
    done();
}
exports.UserRotes = UserRotes;
