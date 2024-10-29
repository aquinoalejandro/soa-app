
import { ProductModel } from '../models/product.model';

export class ProductController {
    async createProduct(req: any, res: any) {
        const { name, category, price, description } = req.body;

        const product = {
            name,
            category,
            price,
            description
        }        
    }

    async updateProduct(req: any, res: any) {
        const { id } = req.params;
        const { name, category, price, description } = req.body;

        const product = {
            name,
            category,
            price,
            description
        }        
    }

    async deleteProduct(req: any, res: any) {
        const { id } = req.params;
    }

    async getProducts(req: any, res: any) {
        const products = await ProductModel.findAll();
        res.json(products);
    }
}

