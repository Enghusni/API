// models/discount.js
import mongoose from "mongoose";
import MongoosePaginate from "mongoose-paginate-v2";

const discountSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    validFrom: {
      type: Date,
      required: true,
    },
    validTo: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

discountSchema.plugin(MongoosePaginate);

const Discount = mongoose.model("Discount", discountSchema);

export default Discount;
