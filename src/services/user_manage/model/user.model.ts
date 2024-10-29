import { Model, DataTypes } from 'sequelize';
import { User } from "../interface/user.interface";
import db  from '../../../config/db';

class UserModel extends Model<User> implements User {
    public id!: number
    public name!: string
    public username!: string;
    public email!: string;
    public password!: string;
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize: db, tableName: 'users' });

export { UserModel }