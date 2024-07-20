// Import model instance
// Importing the model instance from the "model.js" file to interact with the MongoDB database
import User from "./model.js";
import bcrypt from "bcrypt";

// Import other packages and files
import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";
import { isValidObjectId } from "mongoose";

// You can create your logic functions here
// You can also utilize generic functions already defined

// For example:
// Function to read all data from the model
export const getAllUsers = getAll(User);

// Function to read a single data from the model
export const getSingleUser = getSingle(User);

// Function to create a document
export const createUser = createDocument(User);

// Function to update a document
// export const updateUser = updateDocument(User);

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid User id" });
    }

    const updates = { ...req.body };

    // Check if password is being updated
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });

    res.status(201).send({
      status: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

// Function to delete a document
export const deleteUser = deleteDocument(User);
