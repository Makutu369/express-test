import express from "express";
import { students } from "./data/data.js";
const app = express();

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

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
