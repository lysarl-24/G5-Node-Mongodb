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
const Service_1 = __importDefault(require("../service/Service"));
class ProductController {
    // CREATE
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Service_1.default.createProduct(req.body);
                res.status(201).json({
                    message: "Product created",
                    data: product,
                });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    // GET ALL
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield Service_1.default.getProducts();
                res.status(200).json(products);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    // GET ONE
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = String(req.params.id);
                const product = yield Service_1.default.getProductById(id);
                res.status(200).json(product);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    // UPDATE
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = String(req.params.id);
                const product = yield Service_1.default.updateProduct(id, req.body);
                res.status(200).json({
                    message: "Updated successfully",
                    data: product,
                });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    // DELETE
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = String(req.params.id);
                yield Service_1.default.deleteProduct(id);
                res.status(200).json({
                    message: "Deleted successfully",
                });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = new ProductController();
