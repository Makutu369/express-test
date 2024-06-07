import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Schools } from "./models/university.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((e) => console.log(e));

const app = express();
app.use(cors());
const PORT = 35000;
const students = [
  {
    name: "Alice Johnson",
    age: 14,
    class: "9A",
  },
  {
    name: "Bob Smith",
    age: 15,
    class: "10B",
  },
  {
    name: "Charlie Brown",
    age: 13,
    class: "8C",
  },
  {
    name: "Daisy Miller",
    age: 14,
    class: "9A",
  },
  {
    name: "Ethan Davis",
    age: 16,
    class: "11A",
  },
  {
    name: "Fiona Clark",
    age: 15,
    class: "10C",
  },
  {
    name: "George White",
    age: 13,
    class: "8B",
  },
  {
    name: "Hannah Lewis",
    age: 14,
    class: "9B",
  },
  {
    name: "Ian Walker",
    age: 15,
    class: "10A",
  },
  {
    name: "Jenny Hall",
    age: 16,
    class: "11C",
  },
  {
    name: "Kevin Young",
    age: 13,
    class: "8A",
  },
  {
    name: "Laura King",
    age: 14,
    class: "9C",
  },
  {
    name: "Mike Turner",
    age: 15,
    class: "10B",
  },
  {
    name: "Nina Scott",
    age: 16,
    class: "11B",
  },
  {
    name: "Oscar Green",
    age: 13,
    class: "8C",
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  res.status(202).json(students);
});

app.get("/universities", async (req, res) => {
  const school = await Schools.find({});
  res.json(school);
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
