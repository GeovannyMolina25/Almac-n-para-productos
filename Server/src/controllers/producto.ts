
import {Response,Request} from 'express'
import Producto from '../models/producto'
export const getProducts = async(req : Request,res: Response) => {
    const listProduct = await Producto.findAll();
    res.json(listProduct);
    
}

export const getProduct = async (req:Request,res: Response )=>{ 
    const {id} = req.params
    const product = await Producto.findByPk(id);
    if(product){
        res.json(product);
    }else{
        res.status(404).json({
            msg: `No existe el producto con el id ${id}`
        })
    }
    
}
export const deleteProduct = async(req: Request, res: Response) => {
    const {id} = req.params;
    const producto = await Producto.findByPk(id);

    if(!producto){
        res.status(404).json({
            msg: `No existe el producto con el id ${id}`
        })
    }else{
        await producto.destroy();
        res.json({
            msg: 'El mproducto fue eliminado con exito'
        })
    }
}

export const postProduct = async (req: Request, res: Response) => {
    const {body} = req;
    try{
        await Producto.create(body);
        res.json({
            msg: `El producto fue agregado con exito`
        })
    }catch(e){
        console.log(e);
        res.json({
            msg: `Ups ha ocurrido un error, comuniquese con soporte`
        })
    }
    
}
export const updateProduct = async(req:Request, res:Response)=>{
    const {id} = req.params;
    const {body} = req;
    const product = await Producto.findByPk(id);
    try{
        if(product){
            await product.update(body);
            res.json({
                msg: 'El producto fue actualizado con exito'
            })
        }else{
            res.status(400).json({
                msg: `No existe el producto con el id ${id}`
            })
        }
    }catch(e){
        console.log(e);
        res.json({
            msg: `Ups ha ocurrido un error, comuniquese con soporte`
        })
    }
    
}