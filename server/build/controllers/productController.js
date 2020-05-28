"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const Product_1 = __importDefault(require("../models/Product"));
class ProductController {
    /**
     * Esta funcion lista todos los productos almacenados en mongodb
     * @param req
     * @param res
     */
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield Product_1.default.find();
            if (products.length > 0) {
                res.json(products);
            }
            else {
                res.status(404).send('No se encontraron registros en la base de datos');
            }
        });
    }
    /**
     * Este metodo trae un producto de la base de datos por medio de POST usando con un argumento que es el id del producto
     * @param req peticion por el cliente
     * @param res respues por parte del servidor
     */
    getOneProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield Product_1.default.find({ _id: req.params.id });
            if (product.length > 0) {
                res.json(product);
            }
            else {
                res.status(404).send('No se ha podido encontrar el producto');
            }
        });
    }
    /**
     * Esta funcion inserta un producto en mongodb
     * @param req
     * @param res
     */
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, cant } = req.body;
            const date = new Date();
            const product = new Product_1.default({ name, cant, date });
            yield product.save();
            res.json({ text: 'producto creado' });
        });
    }
    /**
     * Elimina un producto de mongodb por medio de su _id
     * @param req
     * @param res
     */
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Product_1.default.remove({ _id: req.params.id });
            res.json({ text: 'producto borrado: ' + req.params.id });
        });
    }
    /**
     * Actualiza un producto por medio de su _id y tambien el campo name del producto
     * @param req
     * @param res
     */
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Product_1.default.updateOne({ _id: req.params.id }, req.body);
            console.log(req.body);
            res.status(200).json({
                text: 'Producto actualizado'
            });
        });
    }
}
//Exportamos el modulo de productController
exports.productController = new ProductController();
