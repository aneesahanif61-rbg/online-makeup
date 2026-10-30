const User = require("../Models/UserModels.js"); // Dhayan rakhein agar Models ka M capital hai ya small

// 🚀 REGISTER/CREATE USER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "User creation failed",
      error: error.message,
    });
  }
};

// 🚀 LOGIN USER (Yeh pehle missing tha!)
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Pehle check karein ke user exists karta hai ya nahi
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Password match check karein (Agar aap bcrypt use kar rahe hain toh compare karein, abhi simple check hai)
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

// 🚀 GET ALL USERS (Optional, agar baad me chahiye ho)
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get users",
      error: error.message,
    });
  }
};

// Sahi naamo ke sath exports karein!
module.exports = {
  registerUser,
  loginUser,
  getUsers
};
