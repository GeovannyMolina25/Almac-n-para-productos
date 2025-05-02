
import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routeProductos from '../routes/producto'
import db from '../db/connection';
class Server{

    private app: Application;
    private port:string;
    constructor(){
        
        this.app=express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect()
    }
    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Apicacion corriendo en el puerto ${this.port}` )
        } );
    }
    routes(){
        this.app.get('/',(req : Request,res : Response) =>{
            res.json({
                msg:'API Working'
            })
        })
        this.app.use('/api/productos',routeProductos)
    }
    midlewares(){
        //pasamos el body
        this.app.use(express.json());
        //cors
        this.app.use(cors());
    }

    async dbConnect(){
        await db.authenticate();
        console.log("Base de datos conectada ");
    }

}
export default Server;