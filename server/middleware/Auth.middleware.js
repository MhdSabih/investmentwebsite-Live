import jwt from "jsonwebtoken";
import "dotenv/config.js";

export const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
