import express from "express";
import { User } from "../models/user.js";

const router = express.Router();

const userController = async (req, res) => {
  const { name, age } = req.body;
  const user = new User({
    name,
    age,
  });
  await user.save();
  res.json({ message: "user saved success" });
};

const getUser = async (req, res) => {
  const user = await User.find({});
  res.json(user);
};

router.post("/", userController);

router.get("/", getUser);

export default router;
