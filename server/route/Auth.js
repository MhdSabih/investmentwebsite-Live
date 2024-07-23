import express from "express";
import { adminLogin, Login, SignUp } from "../controller/Auth.js";

const router = express();

router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/admin/login", adminLogin);

export default router;
