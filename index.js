"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Config");
const Model_1 = require("./Model");
require("./Model");
const fastify_1 = __importDefault(require("fastify"));
const routers_1 = require("./routers");
const contentParsers_1 = require("./contentParsers");
async function start(err, address) {
    console.log("..Trying to connect to db..");
    await Model_1.Client.authenticate();
    await Model_1.Client.sync({ force: true });
    if (err) {
        throw err;
    }
    console.log(`Server is started on addres: ${address}`);
}
const server = (0, fastify_1.default)({ logger: true });
server.register(routers_1.allRoutes);
server.register(contentParsers_1.addAllContentTypes);
server.listen({ host: global.config.HOST, port: global.config.PORT }, (err, address) => {
    start(err, address);
});
