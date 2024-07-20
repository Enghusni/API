// controllers/notificationController.js
import Notification from "./model.js";
import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";

// Function to read all data from the model
export const getAllNotifications = getAll(Notification);

// Function to read a single data from the model
export const getSingleNotification = getSingle(Notification);

// Function to create a document
export const createNotification = createDocument(Notification);

// Function to update a document
export const updateNotification = updateDocument(Notification);

// Function to delete a document
export const deleteNotification = deleteDocument(Notification);
