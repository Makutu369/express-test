import mongoose from "mongoose";

const Schools = mongoose.model(
  "Universities",
  new mongoose.Schema({
    school: String,
    region: String,
  })
);

export { Schools };
