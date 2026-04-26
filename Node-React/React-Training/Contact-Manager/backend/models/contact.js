const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name : String,
    phoneNo : String, 
    photo : String, 
    email : String
})

module.exports = mongoose.model("Contact", contactSchema);