import Activity from "../models/Activity.js";
import Booking from "../models/Booking.js";
import { validationResult } from "express-validator";

export const createActivity = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, description, location, datetime } = req.body;
    const activity = new Activity({ title, description, location, datetime });
    await activity.save();
    res
      .status(201)
      .json({ message: "Activity created successfully", activity });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    const formatted = activities.map((activity) => ({
      id: activity._id,
      title: activity.title,
      description: activity.description,
      location: activity.location,
      datetime: activity.datetime,
    }));

    res.status(200).json({ activities: formatted });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const bookActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity)
      return res.status(404).json({ message: "Activity not found" });

    const alreadyBooked = await Booking.findOne({
      user: req.user,
      activity: req.params.id,
    });

    if (alreadyBooked) {
      return res.status(400).json({ message: "Activity already booked" });
    }

    const booking = new Booking({
      user: req.user,
      activity: req.params.id,
    });

    await booking.save();

    res.status(201).json({
      message: "Activity booked successfully",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user }).populate(
      "activity"
    );
    const formatted = bookings.map((booking) => ({
      activityId: booking.activity._id,
      title: booking.activity.title,
      description: booking.activity.description,
      location: booking.activity.location,
      datetime: booking.activity.datetime,
      bookedAt: booking.bookedAt,
    }));
    res.status(200).json({ bookings: formatted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
