import { Sequelize } from "sequelize";

const client =new Sequelize(global.config.DB_URL)

export var Client = client;

