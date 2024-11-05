import { Model, DataTypes } from 'sequelize';
import { Review } from "../interfaces/review.interface";
import db  from '../config/db';


/*export interface Review {
    id?: number;
    user_id: number;
    product_id: number;
    comment: string;
    rating: number;
}*/
class ReviewModel extends Model<Review> implements Review {
    public id!: number
    public comment!: string
    public rating!: number
}

ReviewModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comment: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    }
}, { sequelize: db, tableName: 'reviews' });

export { ReviewModel }