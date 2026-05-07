import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
    },
    category: {
      type: String,
    },
    brand: {
      type: String,
    },
    stock: {
      type: Number,
    },
    images: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);