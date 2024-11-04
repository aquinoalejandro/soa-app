import { Review } from '../interface/review.interface.js';
import { ReviewModel } from '../model/review.model.js';

export class ReviewController {
    // Crear una nueva review
    async createReview(req: any, res: any) {
        const { user_id, product_id, comment, rating }: Review = req.body;

        const review: Review = {
            user_id,
            product_id,
            comment,
            rating,
        };

        try {
            const newReview = await ReviewModel.create(review);
            res.status(201).json(newReview);
        } catch (error) {
            res.status(500).json({ error: "Error al crear la review." });
        }
    }

    // Actualizar una review por su ID
    async updateReview(req: any, res: any) {
        const { id } = req.params;
        const { comment, rating }: Partial<Review> = req.body; // Partial para permitir actualizaciones parciales

        const review: Partial<Review> = {
            comment,
            rating,
        };

        try {
            const updatedReview = await ReviewModel.update(review, { where: { id } });
            if (updatedReview[0] === 0) {
                return res.status(404).json({ error: "Review no encontrada." });
            }
            res.status(200).json({ message: "Review actualizada." });
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar la review." });
        }
    }

    // Eliminar una review por su ID
    async deleteReview(req: any, res: any) {
        const { id } = req.params;

        try {
            const deleted = await ReviewModel.destroy({ where: { id } });
            if (deleted === 0) {
                return res.status(404).json({ error: "Review no encontrada." });
            }
            res.status(204).send(); // No content
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la review." });
        }
    }

    // Obtener todas las reviews
    async getAllReviews(_req: any, res: any) {
        try {
            const reviews = await ReviewModel.findAll();
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las reviews." });
        }
    }

    // Obtener una review por su ID
    async getReviewById(req: any, res: any) {
        const { id } = req.params;

        try {
            const review = await ReviewModel.findOne({ where: { id } });
            if (!review) {
                return res.status(404).json({ error: "Review no encontrada." });
            }
            res.status(200).json(review);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener la review." });
        }
    }
}
