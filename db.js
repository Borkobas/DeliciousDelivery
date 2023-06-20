
const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://noviuporabnik:uporabnik123@cluster5.dlcfhvs.mongodb.net/project-dish'
mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection
db.on('connected' , ()=>{
console.log('Mongo DB Connection Successfull');
})
db.on ('error' , ()=>{
console.log('Mongo DB Connection failed');
})
module.exports =mongoose