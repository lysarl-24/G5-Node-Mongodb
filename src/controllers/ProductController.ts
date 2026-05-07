import type { Request, Response } from "express";
import ProductService from "../service/Service.ts";

class ProductController {
  // CREATE
  async create(req: Request, res: Response) {
    try {
      const product = await ProductService.createProduct(req.body);

      res.status(201).json({
        message: "Product created",
        data: product,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // GET ALL
  async getAll(req: Request, res: Response) {
    try {
      const products = await ProductService.getProducts();

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // GET ONE
  async getOne(req: Request, res: Response) {
    try {
      const id = String(req.params.id);

      const product = await ProductService.getProductById(id);

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    try {
      const id = String(req.params.id);
      const product = await ProductService.updateProduct(
        id,
        req.body);

      res.status(200).json({
        message: "Updated successfully",
        data: product,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // DELETE
  async delete(req: Request, res: Response) {
    try {
        const id = String(req.params.id);

        await ProductService.deleteProduct(id);

      res.status(200).json({
        message: "Deleted successfully",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ProductController();
