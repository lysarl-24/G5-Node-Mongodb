"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const router = express_1.default.Router();
router.post("/products", ProductController_1.default.create); // CREATE
router.get("/products", ProductController_1.default.getAll); // GET ALL
router.get("/products/:id", ProductController_1.default.getOne); // GET ONE
router.put("/products/:id", ProductController_1.default.update); // UPDATE
router.delete("/products/:id", ProductController_1.default.delete); // DELETE
exports.default = router;
