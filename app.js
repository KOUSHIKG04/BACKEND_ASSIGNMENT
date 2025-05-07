import express from "express";
import "dotenv/config";
import cors from "cors";


const application = express();

application.use(cors());
application.use(express.json());



export default application;
