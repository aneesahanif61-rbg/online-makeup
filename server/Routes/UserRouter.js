const express = require("express");
const router = express.Router();

// Controllers ko sahi se import karein (Bina .js extension ke)
const { registerUser, loginUser } = require("../Controllers/UserControllers");

// Test route
router.get("/", (req, res) => {
  res.send("User Route Working!");
});

// REGISTER ROUTE
router.post("/register", registerUser);

// LOGIN ROUTE
router.post("/login", loginUser);

module.exports = router;
