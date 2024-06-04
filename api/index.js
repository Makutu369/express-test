import express from "express";
import { students } from "../data/data.js";
import mongoose from "mongoose";
import userRoute from "../routes/userRoute.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 3000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected successfuly"))
  .catch((e) => console.log(e));

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
app.listen(PORT, () =>
  console.log(`Server ready on port http://localhost:${PORT}`)
);

export default app;
