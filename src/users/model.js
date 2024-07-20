// users/model.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import MongoosePaginate from "mongoose-paginate-v2";

const userSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
    trim: true,
  },
  photo: {
    type: String,
    trim: true,
    default: null,
  },
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },
  status: {
    type: String,
    trim: true,
    enum: ["active", "inactive"],
    default: "active",
  },
}, {
  versionKey: false,
  timestamps: true,
});

// Middleware to hash password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

// Method to check password
userSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Method to generate JWT token
userSchema.methods.generateToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};

// Add pagination functionality
userSchema.plugin(MongoosePaginate);

// Create User model
const User = mongoose.model("User", userSchema);

export default User;
