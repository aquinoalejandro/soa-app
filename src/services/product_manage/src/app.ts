import express from 'express';
import {productRoutes} from './routes/product.routes';
import { envs } from './environments/environments';

const  { PORT } = envs

const app = express();

app.use(express.json());
app.use('/api',productRoutes);

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});