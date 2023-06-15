const express = require("express");
const router = express.Router();
const Dish = require('../models/dishModel')

router.get("/getdishes", async (req, res) => {
  try {
    const dishes = await Dish.find({});
    res.send(dishes);
  } catch
