import db from "../db/connection";
import { DataTypes } from "sequelize";

const Producto = db.define("Producto", {
  //lo de Producto hay que poner si o si el nombre de la tabla en singular
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  stock: {
    type: DataTypes.NUMBER,
  },
}, {
    createdAt:false, //son dos columnas que por defecto las lee si no las pongo salta error
    updatedAt: false
});
export default Producto;
