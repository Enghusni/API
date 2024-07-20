// models/notification.js
import mongoose from "mongoose";
import MongoosePaginate from "mongoose-paginate-v2";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      trim: true,
      enum: ["unread", "read"],
      default: "unread",
    },
  },
  { timestamps: true }
);

notificationSchema.plugin(MongoosePaginate);

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
