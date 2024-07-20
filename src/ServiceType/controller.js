// controllers/serviceController.js
import ServiceType from "./model.js";
import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";

// Function to read all data from the model
export const getAllServiceTypes = getAll(ServiceType);

// Function to read a single data from the model
export const getSingleServiceType = getSingle(ServiceType);

// Function to create a document
export const createServiceType = createDocument(ServiceType);

// Function to update a document
export const updateServiceType = updateDocument(ServiceType);

// Function to delete a document
export const deleteServiceType = deleteDocument(ServiceType);
