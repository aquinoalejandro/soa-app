import { Request, Response } from 'express';
import { ReviewModel } from '../models/review.model';

export class ReviewController {
    async createReview(req: Request, res: Response) {
        try {
            const { comment, rating, product_id, author } = req.body; 
            const review = { comment, rating, product_id, author };
            const newReview = await ReviewModel.create(review);
            res.status(201).json(newReview);
        } catch (error) {
            res.status(500).json({ error: 'Error creating review' });
        }
    }

    async updateReview(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { comment, rating } = req.body;
            await ReviewModel.update({ comment, rating }, { where: { id } });
            res.status(200).json({ message: 'Review updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error updating review' });
        }
    }

    async deleteReview(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await ReviewModel.destroy({ where: { id } });
            res.status(200).json({ message: 'Review deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting review' });
        }
    }

    async getReviews(req: Request, res: Response) {
        try {
            const reviews = await ReviewModel.findAll();
            res.json(reviews);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching reviews' });
        }
    }
}

