import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  status: { type: String, default: "pending" },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" }
});

export default mongoose.model("Task", schema);