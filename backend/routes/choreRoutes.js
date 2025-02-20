// File: backend/routes/choreRoutes.js
const express = require("express");
const Chore = require("../models/Chore");
const router = express.Router();

router.post("/add", async (req, res) => {
    const { name, value, completedBy } = req.body;
    const chore = new Chore({ name, value, completedBy });
    await chore.save();
    res.json({ message: "Chore added" });
  });
  
  router.get("/", async (req, res) => {
    const chores = await Chore.find();
    res.json(chores);
  });
  
  module.exports = router;