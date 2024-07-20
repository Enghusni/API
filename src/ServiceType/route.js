// routes/serviceRoutes.js
import express from "express";
const router = express.Router();
import {
  createServiceType,
  deleteServiceType,
  getAllServiceTypes,
  getSingleServiceType,
  updateServiceType,
} from "./controller.js";

router.get("/", getAllServiceTypes);
router.get("/:id", getSingleServiceType);
router.post("/", createServiceType);
router.patch("/:id", updateServiceType);
router.delete("/:id", deleteServiceType);

export default router;
