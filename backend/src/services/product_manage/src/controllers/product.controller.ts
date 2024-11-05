
import { ProductModel } from '../models/product.model';
import { Request, Response } from "express";

export class ProductController {
    async createProduct(req: Request, res: Response) {
        const { name, price, description } = req.body;

        const product = {
            name,
            price,
            description
        }        

        await ProductModel.create(product);
    }

    async updateProduct(req: Request, res: Response) {
        const { id } = req.params;

        const { name, price, description } = req.body;

        const product = {
            name,
            price,
            description
        }

        await ProductModel.update(product, { where: { id } })
    }

    async deleteProduct(req: Request, res: Response) {
        const { id } = req.params;

        await ProductModel.destroy({ where: { id } })
    }

    async getProducts(req: Request, res: Response) {
        const products = await ProductModel.findAll();
        
        res.json(products);
    }
}

