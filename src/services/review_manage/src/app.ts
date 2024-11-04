import express from 'express';
import reviewRouter from './routes/review.routes.js';
import { envs } from './environments/environments.js';

const app = express();

app.use(express.json());
app.use(reviewRouter);

const PORT = envs.PORT;

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});