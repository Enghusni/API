// routes/discountRoutes.js
import express from "express";
const router = express.Router();
import {
  getAllDiscounts,
  getSingleDiscount,
  createDiscount,
  updateDiscount,
  deleteDiscount,
} from "./controller.js";

router.get("/", getAllDiscounts);
router.get("/:id", getSingleDiscount);
router.post("/", createDiscount);
router.patch("/:id", updateDiscount);
router.delete("/:id", deleteDiscount);

export default router;
