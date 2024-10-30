import express from 'express';
import {reviewRoutes} from './routes/review.routes';
import { envs } from './environments/environments';
import { connectionDB } from './config/connectionDB';

const  { PORT } = envs

const app = express();

app.use(express.json());
app.use('/api',reviewRoutes);

async function reviewServer() {
    await connectionDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
} 

reviewServer();
