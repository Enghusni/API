// models/payment.js
import mongoose from "mongoose";
import MongoosePaginate from "mongoose-paginate-v2";

const paymentSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    method: {
      type: String,
      required: true,
      enum: ["credit card", "cash", "bank transfer", "mobile"], // Add other methods if necessary
    },
    status: {
      type: String,
      trim: true,
      enum: ["completed", "pending", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

paymentSchema.plugin(MongoosePaginate);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
