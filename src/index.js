import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

// Import MongoDB connection function
import { connectMongodb } from "./db/mongodb.js";

// Import authentication middleware
import { protect } from "./middleware/auth.js";

// Import routers
import userRouter from "./users/route.js";
import authRouter from "./users/auth/route.js";
import customerRouter from "./customers/route.js";
import paymentRouter from "./payment/route.js";
import bookingRouter from "./booking/route.js";
import serviceRouter from "./services/route.js";
import serviceTypeRouter from "./ServiceType/route.js";
import customerCareRouter from "./customerCare/route.js";
import notificationRouter from "./notifications/route.js";
import reviewRouter from "./reviews/route.js";
import discountRouter from "./discounts/route.js";
import employeesRouter from "./employees/route.js";
import carTypeRouter from "./carTypes/route.js";
import dashboardRouter from "./dashboard/route.js";
import reportsRouter from "./reports/route.js";

// Import ErrorHandler middleware
import ErrorHandler from "./middleware/ErrorHandler.js";

// Initialize express app
const app = express();

// Middleware Configurations
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors({
  credentials: true,
  origin: ["http://localhost:5173", "http://localhost:3000"],
}));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cookieParser());
app.use(fileUpload());
app.use("/uploads", express.static("public/uploads"));

// Default route
app.get("/", (req, res) => {
  res.send("Hello");
});

// API routes
app.use("/api/dashboard", dashboardRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter); // Authentication routes
app.use("/api/customer", customerRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/services", serviceRouter);
app.use("/api/service-types", serviceTypeRouter);
app.use("/api/customer-care", customerCareRouter);
app.use("/api/notifications", notificationRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/discounts", discountRouter);
app.use("/api/employees", employeesRouter);
app.use("/api/car-types", carTypeRouter);
app.use("/api/reports", reportsRouter);

// Route for handling incorrect URLs
app.use("/*", (req, res) => {
  res.status(404).json({ status: false, message: "Incorrect URL Destination" });
});

// Error handler middleware
app.use(ErrorHandler);

// Load environment variables from .env file
dotenv.config();

// Set server port
const PORT = process.env.PORT || 3000;

// MongoDB connection URL
const URL = process.env.MONGO_URL;

// Connect to MongoDB
connectMongodb(URL);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
