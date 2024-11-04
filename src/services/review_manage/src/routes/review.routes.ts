import { Router } from "express";
import { ReviewController } from "../controllers/review.controllers.js";

const reviewRouter = Router();
const reviewController = new ReviewController();

// Obtener todas las reviews
reviewRouter.get("/", reviewController.getAllReviews);

// Obtener una review por ID
reviewRouter.get("/:id", reviewController.getReviewById);

// Crear una nueva review
reviewRouter.post("/", reviewController.createReview);

// Actualizar una review por ID
reviewRouter.put("/:id", reviewController.updateReview);

// Eliminar una review por ID
reviewRouter.delete("/:id", reviewController.deleteReview);

export default reviewRouter;
