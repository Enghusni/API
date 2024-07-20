// controllers/EmployeeController.js
import Employee from "./model.js";
import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";

// Function to read all data from the model
export const getAllEmployees = getAll(Employee);

// Function to read a single data from the model
export const getSingleEmployee = getSingle(Employee);

// Function to create a document
export const createEmployee = createDocument(Employee);

// Function to update a document
export const updateEmployee = updateDocument(Employee);

// Function to delete a document
export const deleteEmployee = deleteDocument(Employee);
