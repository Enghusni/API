// models/carType.js
import mongoose from "mongoose";
import MongoosePaginate from "mongoose-paginate-v2";

const carTypeSchema = new mongoose.Schema(
  {
    type: {
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
    versionKey: false,
    timestamps: true,
  }
);
carTypeSchema.plugin(MongoosePaginate);

const CarType = mongoose.model("CarType", carTypeSchema);

export default CarType;
