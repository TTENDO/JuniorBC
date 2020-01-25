//Requiring packages
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//schema definition -- declaring our collection
const  addBabysitterSchema = new mongoose.Schema({
     sitterFname:{
          type:String,
          required:"Please enter sitter's first name"
     },
     sitterLname:{
          type:String,
          required:"Please enter sitter's last name"
     },
     sitterPhone:{
          type:String,
          required:"Please enter sitter's phone number"
     },
     address:{
          type:String,
          required:"Please enter sitter's address"
     },
     sitterEmail:{
          type:String,
          required:"Please enter the sitter's email address"
     },

})

addBabysitterSchema.plugin(passportLocalMongoose);
//creating an instance of a model with collection name ..this name is converted to lowercase and an s is added
//user is a collection name
module.exports = mongoose.model("Babysitters", addBabysitterSchema); 