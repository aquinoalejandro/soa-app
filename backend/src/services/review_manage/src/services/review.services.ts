// product.services.ts

import { ReviewModel } from '../models/review.model';
import { Review } from '../interfaces/review.interface';

export class ProductService {

    async getReviews(): Promise<Review[]> {
        const reviews = await ReviewModel.findAll();
        return reviews;
    }

    async createProduct(review: Review): Promise<Review> {
        const newReview = await ReviewModel.create(review);
        return newReview;
    }

    async deleteReview(id: number): Promise<void> {
        await ReviewModel.destroy({ where: { id } });
    }
}
