import Product from "../models/Product.ts";

class ProductService {
  // CREATE
  async createProduct(data: any) {
    return await Product.create(data);
  }

  // GET ALL
  async getProducts() {
    return await Product.find();
  }

  // GET ONE
  async getProductById(id: string) {
    return await Product.findById(id);
  }

  // UPDATE
  async updateProduct(id: string, data: any) {
    return await Product.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  // DELETE
  async deleteProduct(id: string) {
    return await Product.findByIdAndDelete(id);
  }
}

export default new ProductService();
