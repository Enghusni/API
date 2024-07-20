// routes/bookingRoutes.js
import express from "express";
const router = express.Router();
import {
  getAllBookings,
  getSingleBooking,
  createBooking,
  updateBooking,
  deleteBooking,
  sendApplication,
} from "./controller.js";

router.get("/", getAllBookings);
router.get("/:id", getSingleBooking);
router.post("/", createBooking);
router.post("/send", sendApplication);
router.patch("/:id", updateBooking);
router.delete("/:id", deleteBooking);

export default router;
