// Import model instance
// Importing the model instance from the "model.js" file to interact with the MongoDB database
import CarType from "./model.js";

// Import other packages and files
import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";

// You can create your logic functions here
// You can also utilize generic functions already defined

// For example:
// Function to read all data from the model
export const getAllCarType = getAll(CarType);

// Function to read a single data from the model
export const getSingleCarType = getSingle(CarType);

// Function to create a document
export const createCarType = createDocument(CarType);

// Function to update a document
export const updateCarType = updateDocument(CarType);

// Function to delete a document
export const deleteCarType = deleteDocument(CarType);
