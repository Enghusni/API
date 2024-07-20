// controllers/reviewController.js
import Review from "./model.js";
import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";

// Function to read all data from the model
export const getAllReviews = getAll(Review);

// Function to read a single data from the model
export const getSingleReview = getSingle(Review);

// Function to create a document
export const createReview = createDocument(Review);

// Function to update a document
export const updateReview = updateDocument(Review);

// Function to delete a document
export const deleteReview = deleteDocument(Review);
