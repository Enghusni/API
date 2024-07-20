import Service from "../services/model.js";
import Customer from "../customers/model.js";
import Employee from "../employees/model.js";
import User from "../users/model.js";
import Booking from "../booking/model.js";

export const summery = async (req, res, next) => {
  try {
    const serviceCount = await Service.countDocuments();
    const customerCount = await Customer.countDocuments();
    const employeeCount = await Employee.countDocuments();
    const userCount = await User.countDocuments();

    // Get the latest 5 bookings and populate the serviceType and carType fields
    const latestBookings = await Booking.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("customer")
      .populate({
        path: "service",
        model: "Service",
        populate: [
          { path: "serviceType", model: "ServiceType" },
          { path: "carType", model: "CarType" },
        ],
      });

    res.json({
      summary: [
        { title: "Services", value: serviceCount },
        { title: "Customers", value: customerCount },
        { title: "Employees", value: employeeCount },
        { title: "Users", value: userCount },
      ],
      latestBookings: latestBookings,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
