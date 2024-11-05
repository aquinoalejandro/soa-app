import { Dialect, Sequelize } from "sequelize";
import { envs } from "../environments/environments";


const {
    DB_NAME,
    DB_USER,
    DB_HOST,
    DB_DIALECT,
    DB_PASSWORD,
    DB_PORT
} = envs;


const db = new Sequelize(
    DB_NAME as string, 
    DB_USER as string, 
    DB_PASSWORD as string, 
    {
    host: DB_HOST,
    port: DB_PORT ? Number(DB_PORT) : undefined,
    dialect: DB_DIALECT as Dialect,
});

export default db;