<<<<<<< HEAD
const express = require("express");
const db = require("./db");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!" + port);
  }); 

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  /*
const Dish = require('./models/dishModel');
const db = require("./db");




const dishesRoute = require('./routes/dishesRoute');

app.use('/api/dishes/', dishesRoute)
 
app.get("/", (req, res) => {
  res.send("Server is running!" + port);
}); 

*/

=======
const express = require('express');
const mongoose = require('mongoose');
const Dish = require('./models/dishModel');
const app = express();
const db = require('./db.js');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});
/*test*/
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
>>>>>>> merge_zadnjica
