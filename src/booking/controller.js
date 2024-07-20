// controllers/bookingController.js
import axios from "axios";
import Booking from "./model.js";
import User from "../users/model.js";
import Service from "../services/model.js";

import {
  getAll,
  getSingle,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../utils/query.js";
import Payment from "../payment/model.js";
import mongoose from "mongoose";

// Function to read all data from the model
export const getAllBookings = getAll(Booking);

// Function to read a single data from the model
export const getSingleBooking = getSingle(Booking);

// Function to create a document
export const createBooking = createDocument(Booking);

export const sendApplication = async (req, res, next) => {
  try {
    const { user, service, phoneNumber } = req.body;

    // Check if any of the required fields are missing
    if (!user || !service || !phoneNumber) {
      return res
        .status(400)
        .json({ status: false, message: "Missing required fields" });
    }

    // Validate user and service as valid Object IDs
    if (
      !mongoose.Types.ObjectId.isValid(user) ||
      !mongoose.Types.ObjectId.isValid(service)
    ) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid user or service ID" });
    }

    // Check if user exists
    const userExists = await User.findById(user);
    if (!userExists) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    // Check if service exists
    const serviceExists = await Service.findById(service);
    if (!serviceExists) {
      return res
        .status(404)
        .json({ status: false, message: "Service not found" });
    }
    // make payments
    const response = await payByWaafiPay({
      phone: phoneNumber,
      amount: serviceExists?.price,
    });

    if (response.status) {
      const [booking] = await Booking.create(
        [
          {
            customer: user,
            service: [service],
            amount: serviceExists.price,
            paymentStatus: "paid",
            dateTime: new Date(),
            tn: customer,
          },
        ],
        { session: _session }
      );
      // Creating payment record
      const [payment] = await Payment.create([
        {
          bookingId: booking._id,
          amount: serviceExists.price,
          method: "mobile",
          status: "completed",
        },
      ]);

      return res.status(400).send(booking);
    } else {
      return res.status(400).send({
        status: "failed",
        message: response ?? "Payment Failed Try Again",
      });
    }
    //create booking
  } catch (error) {
    next(error);
  }
};

// Function to update a document
export const updateBooking = updateDocument(Booking);

// Function to delete a document
export const deleteBooking = deleteDocument(Booking);

const formatMerchantPhone = (phone) => {
  phone = phone.toString();

  if (phone.substring(0, 4) === "+252") return phone.slice(1, 13);

  const countryCodeIncluded =
    phone.substring(0, 4) != "+252" && phone.substring(0, 3) != "252";

  if (countryCodeIncluded) return "252" + phone;

  return phone;
};
const payByWaafiPay = async ({ phone, amount }) => {
  try {
    // if (!phone || phone.toString().length < 11)
    //   throw new Error("[MERCHANT-ERROR]::: Phone number is required");

    let sender = formatMerchantPhone(phone);

    const body = {
      schemaVersion: "1.0",
      requestId: "10111331033",
      timestamp: 1590587436057686,
      channelName: "WEB",
      serviceName: "API_PURCHASE",
      serviceParams: {
        merchantUid: process.env.MERCHANT_U_ID,
        apiUserId: process.env.MERCHANT_API_USER_ID,
        apiKey: process.env.MERCHANT_API_KEY,
        paymentMethod: "mwallet_account",
        payerInfo: {
          accountNo: sender,
        },
        transactionInfo: {
          referenceId: "23",
          invoiceId: "1",
          amount: amount,
          currency: "USD",
          description: "sample",
        },
      },
    };

    const { data } = await axios.post(process.env.MERCHANT_URL, body);

    console.log(data);

    if (data.responseMsg !== "RCS_SUCCESS") return data.responseMsg;

    return data;
  } catch (err) {
    throw new Error(err);
  }
};
