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

// CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend origin
  credentials: true,
};

// Apply CORS middleware with options
app.use(cors(corsOptions));

// Other middlewares
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
  console.log(`Backend server is running on http://localhost:${PORT}/api`);
});
