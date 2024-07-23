import { UserModel } from "../model/User.model.js";
import bcrypt from "bcryptjs";
import { generateToken, setTokenAsCookies } from "../utils/jwt.helper.js";

export const SignUp = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password." });
    }
    const existedUser = await UserModel.findOne({ email });
    if (existedUser) {
      return res.status(400).send({ message: "Email already exists." });
    }
    const hashedPW = await bcrypt.hash(password, 15);

    const user = new UserModel({ email, password: hashedPW, role });
    await user.save();

    res.status(201).send({ message: "Sign up successful" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Email and password are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const accessToken = generateToken(user.id);

    setTokenAsCookies(res, accessToken);

    res.status(200).send({ message: { user, accessToken } });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await UserModel.findOne({ email });
    if (admin.role !== "ADMIN") {
      return res.status(403).send({ message: "You are not an admin" });
    }
    const isValidPassword = await bcrypt.compare(password, admin.password);
    if (!isValidPassword) {
      return res.status(401).send({ message: "Invalid credentials" });
    }
    const accessToken = generateToken(admin.id);
    setTokenAsCookies(res, accessToken);

    res.status(200).send({ message: { admin, accessToken } });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
