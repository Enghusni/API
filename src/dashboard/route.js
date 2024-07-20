// routes/EmployeeRoutes.js
import express from "express";
const router = express.Router();
import { summery } from "./controller.js";

router.get("/", summery);

export default router;
