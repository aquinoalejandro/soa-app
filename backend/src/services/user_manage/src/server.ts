import express, { Application} from "express";
import morgan from "morgan";
import helmet from 'helmet';
import { connectionDB } from '../src/config/connectionDB';
import { envs } from './environments/environments';
import authRoutes from "./routes/auth.routes";

class Server {

    private app: Application;
    private port: string | undefined;

    constructor() {
        this.app = express();
        this.port = envs.PORT;

        this.dbConnect();
        this.middlewares();
        this.routes();
    }

    async dbConnect(): Promise<void> {
        await connectionDB();
    }


    middlewares(): void {
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use("/api", authRoutes);
    }

    listen(): void {
        this.app.listen( this.port, ()=> {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}

export default Server;
