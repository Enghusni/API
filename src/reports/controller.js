import Booking from "../booking/model.js";

export const getData = async (req, res, next) => {
  try {
    // Get the latest 5 bookings and populate the serviceType and carType fields
    const data = await Booking.find()
      .sort({ createdAt: -1 })
      .populate("customer")
      .populate({
        path: "service",
        model: "Service",
        populate: [
          { path: "serviceType", model: "ServiceType" },
          { path: "carType", model: "CarType" },
        ],
      });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
