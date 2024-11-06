import { Router } from "express";

import { UserController } from "../controllers/user.controller";

const userController = new UserController();

export const userRoutes = Router()
userRoutes.get('/users/',  userController.getUsers);
userRoutes.post('/user/',  userController.createUser);
userRoutes.put('/user/:id',  userController.updateUser);
userRoutes.post('/user/:id',  userController.deleteUser);

