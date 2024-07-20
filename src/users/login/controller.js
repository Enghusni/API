// login controller
import User from "../model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ status: false, message: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: false, message: "Invalid credentials" });
    }

    // Generate and send JWT token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' }); // Use your JWT secret key

    res.status(200).json({
      status: true,
      token,
      name: user.name,    // Include name in the response
      email: user.email   // Include email in the response
    });

  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
