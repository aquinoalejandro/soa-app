import { Sequelize } from "sequelize";
import { envs } from "../environments/environments";


const {
    DB_NAME,
    DB_USER,
    DB_HOST,
    DB_DIALECT,
    DB_PASSWORD,
    DB_PORT
} = envs;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
});


export default db;