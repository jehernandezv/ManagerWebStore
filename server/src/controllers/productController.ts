import {Request,Response} from 'express';
import Product from '../models/Product';

class ProductController {

    /**
     * Esta funcion lista todos los productos almacenados en mongodb
     * @param req 
     * @param res 
     */
    public async list (req:Request, res:Response):Promise<void> {
        const products = await Product.find();
        if(products.length > 0){
            res.json(products);
        }else{
            res.status(404).send('No se encontraron registros en la base de datos');
        }
        
    }

    /**
     * Este metodo trae un producto de la base de datos por medio de POST usando con un argumento que es el id del producto
     * @param req peticion por el cliente
     * @param res respues por parte del servidor
     */
    public async getOneProduct(req:Request,res:Response):Promise<void>{
        const product = await Product.find({_id:req.params.id});
            if(product.length > 0){
                res.json(product);
            }else{
                res.status(404).send('No se ha podido encontrar el producto');
            }
    }
    /**
     * Esta funcion inserta un producto en mongodb
     * @param req 
     * @param res 
     */
    public async createProduct(req:Request,res:Response) : Promise<void>{
        const {name, cant} = req.body;
        const date = new Date();
        const product = new Product({name,cant,date});
        await product.save();
        res.json({text: 'producto creado'});
    }

    /**
     * Elimina un producto de mongodb por medio de su _id
     * @param req 
     * @param res 
     */
    public async deleteProduct(req:Request,res:Response):Promise<void>{
        await Product.remove({_id:req.params.id});
        res.json({text: 'producto borrado: ' + req.params.id});
    }

    /**
     * Actuliza un producto por medio de su _id y actualiza el campo name del producto
     * @param req 
     * @param res 
     */
    public async updateProduct(req:Request,res:Response):Promise<void>{
        await Product.update({_id:req.params.id},{$set:{name:req.body.name}});
        res.status(200).send('Producto actualizado');
    }
}

//Exportamos el modulo de productController
export const productController = new ProductController();