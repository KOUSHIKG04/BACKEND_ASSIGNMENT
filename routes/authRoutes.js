import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    body("name")
      .isLength({ min: 4 })
      .withMessage("name must be at least 4 characters long"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("password must beat least 8 characters long"),
  ],
  register
);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("password must beat least 8 characters long"),
  ],
  login
);

export default router;
