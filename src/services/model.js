// models/service.js
import mongoose from "mongoose";
import MongoosePaginate from "mongoose-paginate-v2";

const serviceSchema = new mongoose.Schema(
  {
    serviceType: {
      type: mongoose.Schema.ObjectId,
      ref: "ServiceType",
      required: true,
    },
    carType: {
      type: mongoose.Schema.ObjectId,
      ref: "CarType",
      required: true,
    },
    price: {
      type: Number,
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

serviceSchema.plugin(MongoosePaginate);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
