// users/login/route.js
import express from "express";
import { loginUser } from "./controller.js";

const router = express.Router();

// Login route
router.post("/", loginUser);

export default router;
