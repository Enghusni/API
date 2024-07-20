// routes/reviewRoutes.js
import express from "express";
const router = express.Router();
import {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
} from "./controller.js";

router.get("/", getAllReviews);
router.get("/:id", getSingleReview);
router.post("/", createReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;
