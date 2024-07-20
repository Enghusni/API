// routes/notificationRoutes.js
import express from "express";
const router = express.Router();
import {
  getAllNotifications,
  getSingleNotification,
  createNotification,
  updateNotification,
  deleteNotification,
} from "./controller.js";

router.get("/", getAllNotifications);
router.get("/:id", getSingleNotification);
router.post("/", createNotification);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);

export default router;
