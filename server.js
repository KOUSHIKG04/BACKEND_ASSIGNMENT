import http from "http";
import { connectDB } from "./config/db.js";
import application from "./app.js";

const serever = http.createServer(application);
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    serever.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!!`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  });
