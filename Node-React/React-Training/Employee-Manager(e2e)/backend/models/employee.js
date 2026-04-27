const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name : String, 
    address  : String, 
    salary : String
})

module.exports = mongoose.model("Employee", employeeSchema)