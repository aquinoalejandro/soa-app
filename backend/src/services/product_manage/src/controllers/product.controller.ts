import { Request, Response } from 'express';
import { ProductModel } from '../models/product.model';

export class ProductController {
    async createProduct(req: Request, res: Response) {
        try {
            const { name, price, description } = req.body;
            const product = { name, price, description };
            const newProduct = await ProductModel.create(product);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: 'Error creating product' });
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, price, description } = req.body;
            await ProductModel.update({ name, price, description }, { where: { id } });
            res.status(200).json({ message: 'Product updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error updating product' });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await ProductModel.destroy({ where: { id } });
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting product' });
        }
    }

    async getProducts(req: Request, res: Response) {
        try {
            const products = await ProductModel.findAll();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching products' });
        }
    }
}
