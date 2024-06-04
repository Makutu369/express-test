import express from "express";
import { students } from "./data/data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected successfuly"))
  .catch((e) => console.log(e));

const PORT = 35000;
app.use(express.json());
app.get("/", (req, res) => {
  res.status(202).json(students);
});

const envs = {
  firstone: process.env.myname,
  secondOne: process.env.lastname,
};

const envController = (req, res) => {
  res.json(envs);
};
app.get("/env", envController);
app.use("/user", userRoute);
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
