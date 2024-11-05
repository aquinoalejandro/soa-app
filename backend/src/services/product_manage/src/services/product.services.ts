// product.services.ts

import { ProductModel } from '../models/product.model';
import { Product } from '../interfaces/product.interface';

export class ProductService {

    async getProducts(): Promise<Product[]> {
        const products = await ProductModel.findAll();
        return products;
    }

    async createProduct(product: Product): Promise<Product> {
        const newProduct = await ProductModel.create(product);
        return newProduct;
    }

    async deleteProduct(id: number): Promise<void> {
        await ProductModel.destroy({ where: { id } });
    }
}
