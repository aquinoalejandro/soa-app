import 'dotenv/config'
// import * as env from "env-var";
// import { Dialect } from 'sequelize';
import { Environments } from '../interface/interface.config';



export const envs: Environments<string | undefined> = {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_SECRET: process.env.DB_SECRET,
    DB_NAME: process.env.DB_NAME,
    DB_DIALECT: process.env.DB_DIALECT
}