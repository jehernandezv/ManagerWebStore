import {Router} from 'express';

import {productController} from '../controllers/productController';

class productRoutes {
    
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',productController.list);
        this.router.get('/:id',productController.getOneProduct);
        this.router.post('/',productController.createProduct);
        this.router.delete('/:id',productController.deleteProduct);
        this.router.put('/:id',productController.updateProduct);
    }

}

const productRouter  = new productRoutes();
export default productRouter.router;