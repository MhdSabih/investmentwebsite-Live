import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.DB_URI;

export const connection = () => {
  connect(uri)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.error("MongoDB Connection Error: ", err));
};

export default connection;
