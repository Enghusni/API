// controllers/paymentController.js
import Payment from "./model.js";
import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";

// Function to read all data from the model
export const getAllPayments = getAll(Payment);

// Function to read a single data from the model
export const getSinglePayment = getSingle(Payment);

// Function to create a document
export const createPayment = createDocument(Payment);

// Function to update a document
export const updatePayment = updateDocument(Payment);

// Function to delete a document
export const deletePayment = deleteDocument(Payment);
