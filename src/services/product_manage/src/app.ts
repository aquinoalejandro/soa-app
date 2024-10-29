import express from 'express';
import {productRoutes} from './routes/product.routes';

const app = express();

app.use(express.json());
app.use(productRoutes);

app.listen(3000, () => {
    console.log('Server on http://localhost:3001');
});