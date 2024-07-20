// Import model instance
// Importing the model instance from the "model.js" file to interact with the MongoDB database
import Customer from "./model.js";

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
export const getAllCustomers = getAll(Customer);

// Function to read a single data from the model
export const getSingleCustomer = getSingle(Customer);

// Function to create a document
export const createCustomer = createDocument(Customer);

// Function to update a document
export const updateCustomer = updateDocument(Customer);

// Function to delete a document
export const deleteCustomer = deleteDocument(Customer);
