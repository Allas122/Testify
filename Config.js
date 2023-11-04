"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
require("dotenv/config");
class Config {
    constructor(HOST = "0.0.0.0", DB_URL, port = 8080) {
        this.HOST = HOST;
        if (!DB_URL) {
            throw Error("DB_URL is not exists !");
        }
        this.DB_URL = DB_URL;
        this.PORT = 8080;
    }
}
exports.Config = Config;
global.config = new Config(process.env.HOST, process.env.DB_URL);
