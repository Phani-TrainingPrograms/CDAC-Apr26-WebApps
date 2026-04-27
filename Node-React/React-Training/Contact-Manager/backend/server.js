const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const routes = require("./routes/contactRoutes")
const path = require("path")
const app = express();
//middlewares: additional logics, functions that should be triggered/called when every req comes to the server. 
app.use(cors());
app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
mongoose.connect("mongodb://127.0.0.1:27017/contacts")

app.use("/api/contacts", routes)

app.listen(1234, () => console.log("server is running at http://localhost:1234/api/contacts"))