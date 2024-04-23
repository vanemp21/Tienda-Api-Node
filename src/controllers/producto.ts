import { Request, Response } from "express";
import Producto from "../models/producto";
export const getProducts = async (req: Request, res: Response) => {
  const listProducts = await Producto.findAll();
  res.json(listProducts);
};
export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const producto = await Producto.findByPk(id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({
      msg: `No existe el producto con la id ${id} .`,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const producto = await Producto.findByPk(id);
  if (!producto) {
    res.status(404).json({
      msg: `No se pudo eliminar el producto con la id ${id} .`,
    });
  } else {
    await producto.destroy();
    res.json({
      msg: `Producto eliminado correctamente.`,
    });
  }
};

export const postProduct = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    await Producto.create(body);
    res.json({
      msg: `Producto añadido correctamente.`,
    });
  } catch (error) {
    res.json({
      msg: `Ha ocurrido un error al insertar el producto.`,
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const producto = await Producto.findByPk(id);

  try {
    if (producto) {
        await producto.update(body);
        res.json({
          msg: `Producto actualizado correctamente.`,
        });
      } else {
        res.status(404).json({
          msg: `Error al editar el producto con id ${id}.`,
        });
      }
  }catch (error) {
    res.json({
      msg: `Ha ocurrido un error al insertar el producto.`,
    });
  }
};
