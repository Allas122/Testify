"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const userRoute_1 = require("./userRoute");
async function allRoutes(instance, opts, done) {
    instance.register(userRoute_1.UserRotes);
    done();
}
exports.allRoutes = allRoutes;
