// File: backend/server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const choreRoutes = require("./routes/choreRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/chores", choreRoutes);

mongoose.connect("mongodb://localhost:27017/chores", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => console.log("Server running on port 3000"));