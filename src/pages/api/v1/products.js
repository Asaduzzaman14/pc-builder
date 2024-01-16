// pages/api/v1/products.js

const productsData = [
  { id: 1, name: "Product 1", price: 20.99 },
  { id: 2, name: "Product 2", price: 30.49 },
  // Add more product data as needed
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    res.status(200).json(productsData);
  } else {
    // Handle other HTTP methods
    res.status(405).json({ error: "Method not allowed" });
  }
}
