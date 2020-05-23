"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
class productRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productController_1.productController.list);
        this.router.get('/:id', productController_1.productController.getOneProduct);
        this.router.post('/', productController_1.productController.createProduct);
        this.router.delete('/:id', productController_1.productController.deleteProduct);
        this.router.put('/:id', productController_1.productController.updateProduct);
    }
}
const productRouter = new productRoutes();
exports.default = productRouter.router;
