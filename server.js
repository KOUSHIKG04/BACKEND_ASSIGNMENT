import http from "http";
import { connectDB } from "./config/db.js";
import application from "./app.js";

const serever = http.createServer(application);
const PORTNUM = process.env.PORT || 5000;

connectDB()
  .then(() => {
    serever.listen(PORTNUM, () => {
      console.log(`Server running on port ${PORTNUM}!!`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  });
