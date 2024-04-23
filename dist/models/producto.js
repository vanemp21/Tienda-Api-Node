"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Producto = connection_1.default.define("Producto", {
    //lo de Producto hay que poner si o si el nombre de la tabla en singular
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    stock: {
        type: sequelize_1.DataTypes.NUMBER,
    },
}, {
    createdAt: false, //son dos columnas que por defecto las lee si no las pongo salta error
    updatedAt: false
});
exports.default = Producto;
