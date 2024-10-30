import express from 'express';
import {userRoutes} from './routes/user.routes';
import { envs } from './environments/environments';
import { connectionDB } from './config/connectionDB';

const  { PORT } = envs

const app = express();

app.use(express.json());
app.use('/api',userRoutes);

async function userServer() {
    await connectionDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
} 

userServer();
