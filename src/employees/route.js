// routes/EmployeeRoutes.js
import express from "express";
const router = express.Router();
import {
  getAllEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "./controller.js";

router.get("/", getAllEmployees);
router.get("/:id", getSingleEmployee);
router.post("/", createEmployee);
router.patch("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
