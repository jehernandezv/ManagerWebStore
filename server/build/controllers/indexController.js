"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({
            text: 'Pagina de Inicio'
        });
    }
}
exports.indexController = new IndexController();
