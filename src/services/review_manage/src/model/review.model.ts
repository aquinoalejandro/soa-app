import { DataTypes, Model } from "../../node_modules/sequelize/types/index";
import { Review } from "../interface/review.interface.js";
import db from "../config/db.js";

class ReviewModel extends Model<Review> implements Review {
    public id!: number
    public user_id!: number
    public product_id!: number
    public comment!: string
    public rating!: number
}

ReviewModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    product_id: {
        type: DataTypes.INTEGER
    },
    comment: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    }
}, { sequelize: db, tableName: 'reviews' });

export { ReviewModel }