const express = require('express');
const mongoose = require('mongoose');
const Dish = require('./models/dishModel');
const app = express();
const db = require('./db.js');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/getdishes', async (req, res) => {
  try {
    const docs = await Dish.find({});
    res.json(docs);
  } catch (err) {
    console.log(err);
    res.status(500).send('An error occurred');
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
