import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connection from "./db/db.js";
import AuthRoute from "./route/Auth.js";
import GeneralRoute from "./route/General.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, // to allow cookies from the frontend
};

// Middlewares
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// DB Call here
connection();

// Define your API routes here
app.use("/api", AuthRoute);
app.use("/api", GeneralRoute);
app.get("/api", (req, res) => {
  res.send("Hello from the investment website's backend!");
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
