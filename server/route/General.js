import express from "express";
import {
  getAllAdmins,
  getAllUsers,
  updateUserStatus,
} from "../controller/General.js";

const router = express();

router.get("/users", getAllUsers);
router.get("/admins", getAllAdmins);
router.post("/update/status", updateUserStatus);

export default router;
