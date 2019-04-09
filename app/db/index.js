'use strict';

const config = require ('../config');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://rege-root:QqMehF8zSna68pnD@regezachat-n6hrn.mongodb.-net/test?retryWrites=true",{useNewUrlParser: true});
let db = mongoose.connection;
db.on('error',error => console.error( 'connection error:',error));
db.once('open', function callback () {
  // console.log("h");
  let userModel = mongoose.model('userChat',new Schema({
    profileId:String,
    fullName:String,
    profilePic:String
  }))

  module.exports ={
      mongoose,
      userModel
  }

});

    
  



