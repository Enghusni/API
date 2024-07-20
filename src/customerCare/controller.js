import Customer from "./model.js";
import bcrypt from "bcrypt";
// controllers/customerCareController.js
import CustomerCare from "./model.js";
import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";

// Function to read all data from the model
export const getAllCustomerCares = getAll(CustomerCare);

// Function to read a single data from the model
export const getSingleCustomerCare = getSingle(CustomerCare);

// Function to create a document
export const createCustomerCare = createDocument(CustomerCare);

// Function to update a document
export const updateCustomerCare = updateDocument(CustomerCare);

// Function to delete a document
export const deleteCustomerCare = deleteDocument(CustomerCare);
