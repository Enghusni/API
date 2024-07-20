import User from "../model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//* LOGGING IN
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ status: false, message: "Email and password are required" });

    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ status: false, message: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(403)
        .json({ status: false, message: "Invalid credentials" });

    if (user.status !== "active")
      return res.status(403).json({
        status: false,
        message: "Not allowed to access, please contact the admins",
      });

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' });

    res.status(200).json({
      status: true,
      message: "Logged in successfully",
      data: {
        name: user.name,
        email: user.email,
        token
      },
    });
  } catch (err) {
    next(err);
  }
};

//* REGISTER USER
export const register = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    const newUser = new User({
      name,
      email,
      phone,
      password,
    });

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, 'your_jwt_secret_key', { expiresIn: '1h' });

    res.status(201).json({
      status: true,
      message: "Registered successfully",
      data: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        phone: savedUser.phone,
        token
      },
    });
  } catch (err) {
    next(err);
  }
};

//* LOGOUT
export const logout = async (req, res) => {
  try {
    res.status(200).json({ status: true, message: "User logged out" });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
