import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import MongoosePaginate from "mongoose-paginate-v2";

const customerCareSchema = new mongoose.Schema(
  {
    customer: {
      //type: String,
      //required: true,
      trim: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      trim: true,
      enum: ["open", "in-progress", "resolved"],
      default: "open",
    },
    priority: {
      type: String,
      trim: true,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    resolutionDate: {
      type: Date,
    },
  },
  { timestamps: true }
);


customerCareSchema.plugin(MongoosePaginate);

const CustomerCare = mongoose.model("CustomerCare", customerCareSchema);

export default CustomerCare;
