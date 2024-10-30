import { Router } from "express";

import { ProductController } from "../controllers/product.controller";

const productController = new ProductController();

export const productRoutes = Router()
productRoutes.get('/products/', productController.getProducts);
productRoutes.post('/product/', productController.createProduct);
productRoutes.put('/product/:id', productController.updateProduct);
productRoutes.post('/product/:id', productController.deleteProduct);

