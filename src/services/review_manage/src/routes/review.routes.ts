import { Router } from "express";

import { ReviewController } from "../controllers/review.controller";

const reviewController = new ReviewController();

export const reviewRoutes = Router()
reviewRoutes.get('/reviews/', reviewController.getReviews);
reviewRoutes.post('/review/', reviewController.createReview);
reviewRoutes.put('/review/:id', reviewController.updateReview);
reviewRoutes.post('/review/:id', reviewController.deleteReview);

