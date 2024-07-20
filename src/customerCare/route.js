// routes/customerCareRoutes.js
import express from "express";
const router = express.Router();
import {
  getAllCustomerCares,
  getSingleCustomerCare,
  createCustomerCare,
  updateCustomerCare,
  deleteCustomerCare,
} from "./controller.js";

router.get("/", getAllCustomerCares);
router.get("/:id", getSingleCustomerCare);
router.post("/", createCustomerCare);
router.patch("/:id", updateCustomerCare);
router.delete("/:id", deleteCustomerCare);

export default router;
