// routes/paymentRoutes.js
import express from "express";
const router = express.Router();
import {
  getAllPayments,
  getSinglePayment,
  createPayment,
  updatePayment,
  deletePayment,
} from "./controller.js";

router.get("/", getAllPayments);
router.get("/:id", getSinglePayment);
router.post("/", createPayment);
router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);

export default router;
