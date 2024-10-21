import { Sequelize } from "sequelize";
import { envs } from "../environments/environments";


const {
    DB_NAME,
    DB_USER,
    DB_HOST,
    DB_DIALECT,
    DB_PASSWORD
} = envs;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
});


export default db;