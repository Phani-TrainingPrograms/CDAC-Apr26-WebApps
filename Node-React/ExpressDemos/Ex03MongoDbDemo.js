//This demo shall perform all the crud operations directly on the database without using express.
import { MongoClient } from 'mongodb';

const url = "mongodb://localhost:27017";//connection string for mongodb server running on localhost.
const client = new MongoClient(url);

const dbName = "EmployeeDb";//name of the database we want to connect to.
const collectionName = "Employee";//name of the collection we want to perform operations on.

//function to connect to database.
async function getCollection() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(dbName);
        return db.collection(collectionName);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export async function insertEmployee(employee) {
    const collection = await getCollection();
    const result = await collection.insertOne(employee);
    console.log(`Inserted employee with ID: ${result.insertedId}`);
}

export async function getAllEmployees() {
    const collection = await getCollection();
    const employees = await collection.find().toArray();
    console.log("Employee List");
    console.table(employees);
}


export async function removeEmployee(empId) {
   //get the collection
    const collection = await getCollection();
    //delete the employee with the given empId
    const result = await collection.deleteOne({ EmpId: empId });
    if (result.deletedCount === 1) {
        console.log(`Deleted employee with EmpId: ${empId}`);
    } else {
        console.log(`No employee found with EmpId: ${empId}`);
    }
}

export async function updateEmployee(empId, updatedData) {
    const collection = await getCollection();
    const result = await collection.updateOne({ EmpId: empId }, { $set: updatedData });
    if (result.matchedCount === 1) {
        console.log(`Updated employee with EmpId: ${empId}`);
    } else {
        console.log(`No employee found with EmpId: ${empId}`);
    }
}
//insertEmployee({ EmpId: 3, EmpName: "John Doe", EmpAddress: "New York", EmpSalary: 50000 });
//removeEmployee(3);
getAllEmployees();
updateEmployee(1, { EmpName: "Anand Kumar", EmpSalary: 60000 });
getAllEmployees();