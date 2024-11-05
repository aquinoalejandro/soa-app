
import { ReviewModel } from '../models/review.model';

/*export interface Review {
    id?: number;
    user_id: number;
    product_id: number;
    comment: string;
    rating: number;
}*/


export class ReviewController {
    async createReview(req: any, res: any) {
        const {  comment, rating } = req.body; 

        const review = {
            comment,
            rating
        }        

        await ReviewModel.create(review);
    }

    async updateReview(req: any, res: any) {
        const { id } = req.params;

        const {  comment, rating } = req.body;

        const review = {
            comment,
            rating
        }

        await ReviewModel.update(review, { where: { id } })
    }

    async deleteReview(req: any, res: any) {
        const { id } = req.params;

        await ReviewModel.destroy({ where: { id } })
    }

    async getReviews(req: any, res: any) {
        const reviews = await ReviewModel.findAll();
        
        res.json(reviews);
    }
}

