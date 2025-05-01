"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('almacen', 'Nelson', '123456', {
    host: 'DESKTOP-SGA0PI5',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    }
});
exports.default = sequelize;
