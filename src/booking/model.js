// models/booking.js
import mongoose from "mongoose";
import MongoosePaginate from "mongoose-paginate-v2";

const bookingSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    service: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true,
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      default: "unpaid",
    },
    dateTime: {
      type: Date,
      required: true,
    },
    tn: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      trim: true,
      enum: ["pending", "approved", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

bookingSchema.plugin(MongoosePaginate);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
