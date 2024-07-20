// Importing the 'express' module to create a router
import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "./controller.js";

// Creating a new instance of the express Router
const router = express.Router();

// The router variable now holds an instance of an Express router, which can be used to define routes for different HTTP methods such as GET, POST, PUT, DELETE, etc.

// Routes can be defined here using the router instance. For example:
router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

// This file exports the router instance, making it available for use in other parts of the application.

// Exporting the router instance to be used in other files
export default router;
