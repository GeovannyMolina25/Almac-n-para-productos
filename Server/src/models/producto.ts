import db from '../db/connection';
import { DataType, DataTypes } from 'sequelize';

const Producto = db.define('Producto', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL
    },
    stock: {
        type: DataTypes.NUMBER
    },
},{
    createdAt:false,
    updatedAt:false
})
export default Producto;