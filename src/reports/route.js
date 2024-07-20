// routes/EmployeeRoutes.js
import express from "express";
const router = express.Router();
import { getData } from "./controller.js";

router.get("/booking", getData);

export default router;
