// models/service.js
import mongoose from "mongoose";
import MongoosePaginate from "mongoose-paginate-v2";

const serviceTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
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
  {
    timestamps: true,
    versionKey: false,
  }
);

serviceTypeSchema.plugin(MongoosePaginate);

const ServiceType = mongoose.model("ServiceType", serviceTypeSchema);

export default ServiceType;
