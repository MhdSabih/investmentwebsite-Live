import express from "express";
import {
  getAllAdmins,
  getAllUsers,
  getAllUsersStatus,
  updateUserStatus,
} from "../controller/General.js";

const router = express();

router.get("/users", getAllUsers);
router.get("/admins", getAllAdmins);
router.post("/update/status", updateUserStatus);
router.get("/get/users/status", getAllUsersStatus);

export default router;
