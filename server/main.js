import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import connection from "./db/db.js";
import AuthRoute from "./route/Auth.js";
import GeneralRoute from "./route/General.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const Production_URL = process.env.PRODUCTION_URL;

// CORS options
const corsOptions = {
  origin: Production_URL,
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Connect to the database
connection();

// API Routes
app.use("/api", AuthRoute);
app.use("/api", GeneralRoute);
app.get("/api", (req, res) => {
  res.send("Hello from the investment website's backend!");
});

// Serve static files from React app
app.use(express.static(path.join(path.resolve(), "../client/dist")));

// Handle all other routes to serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "../client/dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}/api`);
});
