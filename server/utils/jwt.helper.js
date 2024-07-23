import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const ACCESS_TOKEN_EXPIRY = 7 * 24 * 60 * 60;
const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET;

export const generateToken = (user) => {
  const token = jwt.sign({ id: user }, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });

  return token;
};

export const setTokenAsCookies = (res, accessToken) => {
  res.cookie("accessToken", accessToken, {
    expires: new Date(Date.now() + parseInt(ACCESS_TOKEN_EXPIRY)),
    httpOnly: true,
  });
};
// export default generateToken;
