const express = require("express");

const {
  addProduct,
  removeProduct,
  singleProduct,
  productList,
  updateProduct,
} = require("../Controllers/ProductControllers");

const router = express.Router();

// Add Product
router.post("/add", addProduct);

// Remove Product
router.delete("/remove/:id", removeProduct);

// Single Product
router.get("/single/:id", singleProduct);

// Product List
router.get("/list", productList);

// Update Product
router.put("/update/:id", updateProduct);

module.exports = router;