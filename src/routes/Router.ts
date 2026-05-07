import express from "express";
import ProductController from "../controllers/ProductController.ts";

const router = express.Router();


router.post("/products", ProductController.create); // CREATE
router.get("/products", ProductController.getAll); // GET ALL
router.get("/products/:id", ProductController.getOne); // GET ONE
router.put("/products/:id", ProductController.update); // UPDATE
router.delete("/products/:id", ProductController.delete); // DELETE

export default router;
