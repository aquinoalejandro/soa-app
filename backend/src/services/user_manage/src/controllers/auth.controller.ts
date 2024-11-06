import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import bcryptjs from 'bcryptjs'


export class AuthController {

    async registerUser(req: Request, res: Response) {
        const { username, email, password } = req.body;
        const role = 'user';
        const user = await new AuthService().createUser(username, email, password, role);
    
        res.status(201).json({ role });
    }

    async loginUser(req: Request, res: Response) {
        const { username, password } = req.body;
        const user = await new AuthService().getUserByUsername(username);
        const role = user.role;
        console.log(role);
        if (bcryptjs.compareSync(password, user.password)) {
            res.status(200).json({ role });
        } else {    
            res.status(401).json({ message: 'Credenciales inválidas' });
        }      
    }
}
