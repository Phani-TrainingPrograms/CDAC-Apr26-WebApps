import mysql from "mysql2"
import express from "express"
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended : true}))//options for the express to handle json data. 
////////////////////////DB Code//////////////////////////
const connection = mysql.createConnection({
    host : "localhost", 
    user : "root",
    password : "cdacacts",
    database : "Sampledb"
})

connection.connect((err)=>{
    if(err){
        console.error("failed to connect to db")
        return
    }
    console.log("Connection succeeded")
})

//////////////////////SQL Statements/////////////////////////////
const getAll = "SELECT * FROM Employee";
const getById = "SELECT * FROM Employee where Id = ?";
const InsertRec = "Insert into Employee (name, address, salary) values(?,?,?)";
const UpdateRec = "UPDATE Employee Set name =?, address = ?, salary = ? where Id = ?";
const deleteRec = "DELETE from Employee Where ID = ?"

////////////////////APIs//////////////////////////////////////////////
app.get("/employees", (req, res)=>{
    connection.query(getAll, (err, results) =>{
        if(err){
            console.log("Error fetching the data");
            res.status(500).send("Error fetching the data")
        }
        else
            res.json(results)
    })
})


app.post("/employees", (req, res)=>{
    const { name, address, salary } = req.body;
    connection.query(InsertRec, [name, address, salary], (err, results)=>{
        res.json({message : "Inserted successfully"})
    })
})

app.listen(1234, ()=>{
    console.log("server available at http://localhost:1234")
})








