import { Model, DataTypes } from 'sequelize';
import { User } from "../interfaces/user.interface";
import db  from '../config/db';

class UserModel extends Model<User> implements User {
    public id!: number
    public username!: string;
    public email!: string;
    public password!: string;
    public role!: string;
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
    }
}, { sequelize: db, tableName: 'users' });

export { UserModel }