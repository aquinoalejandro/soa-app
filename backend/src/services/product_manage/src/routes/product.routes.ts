import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';

const productController = new ProductController();
export const productRoutes = Router();

productRoutes.get('/products/', (req, res) => productController.getProducts(req, res));
productRoutes.post('/product/', (req, res) => productController.createProduct(req, res));
productRoutes.put('/product/:id', (req, res) => productController.updateProduct(req, res));
productRoutes.delete('/product/:id', (req, res) => productController.deleteProduct(req, res));
