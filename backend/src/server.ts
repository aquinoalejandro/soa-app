import express, { Application} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from 'helmet';
import { connectionDB } from './config/connectionDB';
import { envs } from './environments/environments';


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

    // TODO: veremos despues con el profesor otra forma
    async dbConnect(): Promise<void> {
        await connectionDB();
    }


    middlewares(): void {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(): void {}

    listen(): void {
        this.app.listen( this.port, ()=> {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}

export default Server;
