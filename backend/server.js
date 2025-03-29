const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const MongoDB = require("./config/db");
const authRouter = require("./router/authRouter");

const app = express();
app.use(express.json());

// 🛑 CORS middleware sabse pehle lagao
app.use(
  cors({
    origin: "http://localhost:5173", // React ka origin allow karo
    credentials: true, // Cookies aur authentication headers allow karega
  })
);

// 🛑 Manually CORS headers bhi set karo
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// ✅ Ab Router use karo (CORS ke baad)
app.use("/auth", authRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  MongoDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
