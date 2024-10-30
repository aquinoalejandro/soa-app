// User.services.ts

import { UserModel } from '../models/user.model';
import { User } from '../interfaces/user.interface';

export class UserService {

    async getUsers(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users;
    }

    async createUser(User: User): Promise<User> {
        const newUser = await UserModel.create(User);
        return newUser;
    }

    async updateUser(id: number, User: User): Promise<void> {
        await UserModel.update(User, { where: { id } });
    }

    async deleteUser(id: number): Promise<void> {
        await UserModel.destroy({ where: { id } });
    }
}
