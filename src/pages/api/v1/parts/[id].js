// pages/api/v1/products/[id].js
import { connectMongoDB } from "@/lib/mongodb";
import Product from "@/models/test";

connectMongoDB();

export default async function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      await handleGet(req, res, id);
      break;
    case "PUT":
      await handlePut(req, res, id);
      break;
    case "DELETE":
      await handleDelete(req, res, id);
      break;
    default:
      res.status(405).json({ error: `Method ${req.method} not allowed` });
      break;
  }
}

async function handleGet(req, res, id) {
  try {
    console.log("get", id);
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handlePut(req, res, id) {
  const { name, price } = req.body;
  console.log("update", name, id);
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error updating product" });
  }
}

async function handleDelete(req, res, id) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Error deleting product" });
  }
}
