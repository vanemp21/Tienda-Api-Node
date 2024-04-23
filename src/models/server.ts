import express, { Application, Request, Response } from "express";
import cors from 'cors';
import routesProducto from "../routes/producto";
import db from "../db/connection";
class Server {
  private app: Application;
  private port: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.midlewares(); //hay que ponerlo antes de los routes
    this.routes();
    this.dbConnect();
  }
  listen() {
    this.app.listen(this.port, () => {});
  }
  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        msg: "API Working",
      });
    });
    this.app.use("/api/productos", routesProducto);
    //Cuando ingrese a la ruta api productos y el verbo sea get, voy a ejecutar el getProducts de producto.ts que
    //posteriormente se va a estar comunicando con la db
  }

  midlewares() {
    //Parseamos el body a un objeto
    this.app.use(express.json());
    //cors
    this.app.use(cors());
  }

  async dbConnect() {
    try{
        await db.authenticate();
        console.log("Conexión establecida");
    }catch(error){
        console.log('Error al conectarse a la db')
    }
    
  }
}

export default Server;
