"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAllContentTypes = void 0;
const json_1 = require("./json");
async function addAllContentTypes(instance, opts, done) {
    instance.register(json_1.jsonParsePlugin);
}
exports.addAllContentTypes = addAllContentTypes;
