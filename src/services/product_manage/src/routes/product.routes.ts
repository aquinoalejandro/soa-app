import { Router } from "express";

import { ProductController } from "../controllers/product.controller";

const productController = new ProductController();

export const productRoutes = Router()
productRoutes.get('/', productController.getProducts);
productRoutes.post('/', productController.createProduct);
productRoutes.put('/:id', productController.updateProduct);
productRoutes.post('/:id', productController.deleteProduct);

