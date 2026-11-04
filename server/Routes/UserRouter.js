
const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers
} = require("../Controllers/UserControllers");

// Test Route
router.get("/", (req, res) => {
  res.send("User Route Working Successfully!");
});

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Get All Users
router.get("/all", getUsers);

module.exports = router;
