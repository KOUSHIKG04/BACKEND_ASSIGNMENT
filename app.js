import express from "express";
import "dotenv/config";
import cors from "cors";

const application = express();

application.use(cors());application.use(express.json());


import authRoutes from "./routes/authRoutes.js";
import activityRoutes from "./routes/activityRoutes.js"
application.use("/api/users", authRoutes);
application.use("/api/activities", activityRoutes);


application.get("/", (req, res) => {
  res.send("Activity Booking API is running");
});

export default application;
