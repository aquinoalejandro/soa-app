// import express from 'express';
// import {productRoutes} from './routes/product.routes';
// import { envs } from './environments/environments';
// import { connectionDB } from './config/connectionDB';

// const  { PORT } = envs

// const app = express();

// app.use(express.json());
// app.use('/api',productRoutes);

// async function productServer() {
//     await connectionDB();

//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// } 

// productServer();


import Server from "./server";


const sever = new Server();

sever.listen();