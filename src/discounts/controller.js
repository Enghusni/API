// controllers/discountController.js
import Discount from "./model.js";
import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";

// Function to read all data from the model
export const getAllDiscounts = getAll(Discount);

// Function to read a single data from the model
export const getSingleDiscount = getSingle(Discount);

// Function to create a document
export const createDiscount = createDocument(Discount);

// Function to update a document
export const updateDiscount = updateDocument(Discount);

// Function to delete a document
export const deleteDiscount = deleteDocument(Discount);
