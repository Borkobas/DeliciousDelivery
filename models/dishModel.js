const mongoose = require("mongoose");

const dishSchema = mongoose.Schema({
  name : {type: String, required: true },
  varients : [] ,
  prices : [] ,
  category : { type: String , required: true },
  image : {type: String, required: true },
  description : {type: String, required: true }
}, {
  timestamps:true,
})

const dishModel = mongoose.model('dishes' , dishSchema)
module.exports = dishModel
