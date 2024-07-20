import express from "express";
import MongoosePaginate from "mongoose-paginate-v2";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// Import Packages here

// Create a schema instance for defining the structure of your MongoDB documents
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Add pagination functionality to the schema instance using the Mongoose Paginate plugin
customerSchema.plugin(MongoosePaginate);

// Create a model instance to interact with MongoDB using Mongoose
// The model represents a collection in the MongoDB database
const Customer = mongoose.model("Customer", customerSchema);

// Export the model instance to make it available for use in other parts of your application
export default Customer;
