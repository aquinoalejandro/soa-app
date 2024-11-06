import { Router } from 'express';
import { ReviewController } from '../controllers/review.controller';

const reviewController = new ReviewController();
export const reviewRoutes = Router();

reviewRoutes.get('/reviews/', (req, res) => reviewController.getReviews(req, res));
reviewRoutes.post('/review/', (req, res) => reviewController.createReview(req, res));
reviewRoutes.put('/review/:id', (req, res) => reviewController.updateReview(req, res));
reviewRoutes.delete('/review/:id', (req, res) => reviewController.deleteReview(req, res));
