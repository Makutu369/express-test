import express from "express";

const app = express();

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
app.get("/news", (req, res) => {
  res.status(202).json(students);
});

const envs = {
  firstone: process.env.myname,
  secondOne: process.env.lastname,
};

const envController = (req, res) => {
  res.json(envs);
};
app.get("/env");
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
