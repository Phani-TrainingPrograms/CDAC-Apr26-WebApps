const express = require("express")
const mongoose = require("mongoose")
const app = express();
const router = require("./routes/empRoutes");
const cors = require("cors")

const URL = "mongodb://127.0.0.1:27017/employeeList"
///////////////middlewares//////////////////////////////
app.use(express.json())//for body handling. 
app.use(cors())//Allows all 4 methods: get, put, post, delete for all origins, all destinations.
app.use("/api/employees", router);
/////////////////database connections///////////////
mongoose.connect(URL)
///////////////////app launch///////////////////////
app.listen(1234, ()=> console.log("server available at http://localhost:1234/api/employees"))


