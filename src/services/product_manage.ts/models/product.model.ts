import { Model, DataTypes } from 'sequelize';
import { Product } from "../interfaces/product.interface";
import db  from '../../../config/db';

class ProductModel extends Model<Product> implements Product {
    public id!: number
    public name!: string
    public category!: string
    public price!: number
    public description!: string
}

ProductModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
}, { sequelize: db, tableName: 'products' });

export { ProductModel }