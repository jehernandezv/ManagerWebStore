import {Request,Response} from 'express';

class IndexController {

    public index (req:Request, res:Response) {
        res.json({
            text:'Pagina de Inicio'
        });
    }
}

export const indexController = new IndexController();