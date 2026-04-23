//We will use Mongodb to connect to database. 
//npm install mongodb for working with mongodb in nodejs.
import express from 'express';
import { MongoClient } from 'mongodb';
const app = express();

const url = "mongodb://localhost:27017";//connection string for mongodb server running on localhost.
const client = new MongoClient(url);//create a new instance of the MongoClient class and pass the connection string as an argument. This will allow us to connect to the MongoDB server and perform operations on the database.
const dbName = "EmployeeDb";//name of the database we want to connect to.

let db, empList;
///////////////////////Db connection//////////////////////
async function connectToDb(){
    try{
        await client.connect();//connect to the MongoDB server using the connect method of the MongoClient instance. This method returns a promise that resolves when the connection is established.
        console.log("Connected to MongoDB");
        db = client.db(dbName);
        empList = db.collection("Employee");//get a reference to the EmployeeList collection in the database using the collection method of the db instance. This will allow us to perform operations on the EmployeeList collection, such as inserting, updating, and querying documents.
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectToDb();

app.get("/empList", async (req, res) => {
    try {
        const employees = await empList.find().toArray();//find method is used to retrieve all documents from the EmployeeList collection. The toArray method is used to convert the cursor returned by the find method into an array of documents.
        let html = "<h1>Employee List</h1><hr><table><tr><th>ID</th><th>Name</th><th>Address</th><th>Salary</th></tr>";

        for (const emp of employees) {
            html += `<tr>
                <td>${emp.EmpId}</td>
                <td>${emp.EmpName}</td>
                <td>${emp.EmpAddress}</td>
                <td>${emp.EmpSalary}</td>
            </tr>`;
        }
        html += "</table>";
        res.send(html);
    } catch (error) {
        console.error("Error fetching employee list:", error);
        res.status(500).send("Error fetching employee list");
    }
});

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});
