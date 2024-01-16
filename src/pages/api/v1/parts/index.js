// pages/api/v1/products/index.js

import { connectMongoDB } from "@/lib/mongodb";
import Product from "@/models/test";

connectMongoDB();

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;
    case "POST":
      await handlePost(req, res);
      break;
    default:
      res.status(405).json({ error: `Method ${req.method} not allowed` });
      break;
  }
}

async function handleGet(req, res) {
  try {
    console.log("111");
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handlePost(req, res) {
  const { name, price } = req.body;
  console.log("post", name);
  try {
    const newProduct = await new Product({ name, price }).save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error creating product" });
  }
}
