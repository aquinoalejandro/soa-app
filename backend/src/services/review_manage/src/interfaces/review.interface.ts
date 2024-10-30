export interface Review {
    id?: number;
    user_id: number;
    product_id: number;
    comment: string;
    rating: number;
}