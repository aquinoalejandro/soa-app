export interface Review {
    id?: number;
    product_id: number; // Asegúrate de que esto esté presente
    comment: string;
    rating: number;
}
