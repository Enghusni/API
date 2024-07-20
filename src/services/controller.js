// controllers/serviceController.js
import Service from "./model.js";
import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";

// Function to read all data from the model
export const getAllServices = getAll(Service);

// Function to read a single data from the model
export const getSingleService = getSingle(Service);

// Function to create a document
export const createService = createDocument(Service);

// Function to update a document
export const updateService = updateDocument(Service);

// Function to delete a document
export const deleteService = deleteDocument(Service);
