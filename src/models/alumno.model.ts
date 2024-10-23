import { Model, DataTypes } from 'sequelize';
import { Alumno } from "../interfaces/alumno.interface";
import db  from '../config/db';

class AlumnoModel extends Model<Alumno> implements Alumno {
    public id!: number
    public name!: string
}

AlumnoModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, { sequelize: db, tableName: 'brands' });

export { AlumnoModel }