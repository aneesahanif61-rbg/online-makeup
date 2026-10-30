// 1. Sab se pehle dotenv load karein takay baqi files ko variables mil sakein
const dotenv = require("dotenv");
// Aapka .env file server ki root directory mein hai, isliye seedha path denge
dotenv.config({ path: "./.env" }); 

// 2. Express aur baqi required packages ke imports
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // Aapke server/config/db.js ka path

// 3. Routes ke imports (Aapki pic mein 'Routes' ka 'R' capital hai)
const productRoutes = require("./Routes/ProductRouter");
const userRoutes = require("./Routes/UserRouter");

// 4. App initialization
const app = express();

// 5. Middlewares
app.use(cors());
app.use(express.json()); // JSON data handle karne ke liye

// 6. Database Connection (Dotenv load hone ke BAAD call karna zaroori hai)
connectDB(); 

// 7. API Routes Mapping
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// 8. Test Route (Check karne ke liye ke server chal raha hai)
app.get("/", (req, res) => {
    res.send("API is running successfully...");
});

// 9. Server Port setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
