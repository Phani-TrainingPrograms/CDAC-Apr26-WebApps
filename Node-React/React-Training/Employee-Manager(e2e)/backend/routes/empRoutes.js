const router = express.Router();
const Employee = require("../models/employee")

router.get("/", async (req, res) =>{
    const empList = await Employee.find();//waits till the sytem gets all the records.
    res.json(empList)
})//get all records

router.get("/:id", async (req, res) =>{
    const id = req.params.id;//query string that is passed into the url...
    const emp = await Employee.findById(id);
    if(!emp){
        res.status(404).json({ error : "Employee not found"})
    }
    res.json(emp);
})//get single record

router.post("/", async (req, res) =>{
    console.log(JSON.stringify(req.body))//to check if the data is properly posted or not.
    const rec = new Employee({
        name : req.body.name, 
        address  : req.body.address, 
        salary : req.body.salary
    })
    await rec.save();
    res.json(rec)//response will be new Employee with id
})//add record
router.put("/:id", async (req, res) =>{
    const id = req.params.id;
    const updatedData = {
        name : req.body.name, 
        address  : req.body.address, 
        salary : req.body.salary
    }
    const updatedRec = await Employee.findByIdAndUpdate(id, updatedData, { new : true})
    res.json(updatedRec);
})//update record
router.delete("/:id", async (req, res) =>{
    const id = req.params.id;
    await Employee.findByIdAndDelete(id);
    res.json({"message" : "Employee deleted successfully"})
})//delete record

module.exports = router;
