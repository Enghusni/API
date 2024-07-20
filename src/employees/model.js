// models/Employee.js
import mongoose from "mongoose";
import MongoosePaginate from "mongoose-paginate-v2";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      trim: true,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

employeeSchema.plugin(MongoosePaginate);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
