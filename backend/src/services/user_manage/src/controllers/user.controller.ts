
import { UserModel } from '../models/user.model';



/* 
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
*/
export class UserController {
    async createUser(req: any, res: any) {
        const {  
            name,
            username,
            email,
            password
        } = req.body;

        const user = {
            name,
            username,
            email,
            password
        }        

        await UserModel.create(user);
    }

    async updateUser(req: any, res: any) {
        const { id } = req.params;

        const { name, username, email, password } = req.body;

        const user = {
            name,
            username,
            email,
            password
        }

        await UserModel.update(user, { where: { id } })
    }

    async deleteUser(req: any, res: any) {
        const { id } = req.params;

        await UserModel.destroy({ where: { id } })
    }

    async getUsers(req: any, res: any) {
        const users = await UserModel.findAll();
        
        res.json(users);
    }
}

