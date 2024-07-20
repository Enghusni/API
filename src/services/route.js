// routes/serviceRoutes.js
import express from "express";
const router = express.Router();
import {
  getAllServices,
  getSingleService,
  createService,
  updateService,
  deleteService,
} from "./controller.js";

router.get("/", getAllServices);
router.get("/:id", getSingleService);
router.post("/", createService);
router.patch("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
