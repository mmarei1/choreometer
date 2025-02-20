// File: backend/models/Chore.js
const mongoose = require("mongoose");
const ChoreSchema = new mongoose.Schema({
  name: String,
  value: Number,
  completedBy: String,
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Chore", ChoreSchema);