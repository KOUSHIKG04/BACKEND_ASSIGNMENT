import express from "express";
import {
  listActivities,
  bookActivity,
  getMyBookings,
  createActivity,
} from "../controllers/activity.controller.js";
import auth from "../middleware/auth.js";
import { param, body } from "express-validator";

const router = express.Router();

router.post(
  "/add-activity",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("location").notEmpty().withMessage("Location is required"),
    body("datetime").isISO8601().withMessage("Valid date and time required"),
  ],
  createActivity
);

router.get("/", listActivities);

router.post(
  "/:id/book",
  auth,
  [param("id").isMongoId().withMessage("Invalid activity ID")],
  bookActivity
);

router.get("/my-bookings", auth, getMyBookings);

export default router;
