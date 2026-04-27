const express = require('express')//for your web server
const router = express.Router();//for handling routes in express
const Contact = require("../models/contact")//In module, give the extension also. 
const multer = require("multer");//for file uploading purpose. 
const path = require('path')//for file paths
const fs = require("fs");

//Saving to the file...
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{ //A string or function that determines the 
        // destination path for uploaded files. If a string is passed and the directory does not exist, 
        // Multer attempts to create it recursively. 
        // If neither a string or a function is passed, the destination defaults to os.tmpdir().
        cb(null, "uploads/")
    },
    filename:(req, file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({storage})
router.get("/", async(req, res)=>{
    const contacts = await Contact.find();//Using mongoose, U will not use old mongodb APIs
    res.json(contacts)
})

router.post("/contact", upload.single("photo"), async(req, res)=>{
    console.log(JSON.stringify(req.body))
    const contact = new Contact({
        name: req.body.name,
        phoneNo: req.body.phoneNo,
        photo: req.file  ? req.file.filename : "",//if no file is uploaded, it will be blank....
        email: req.body.email
    })
    await contact.save()
    res.json(contact);//save function shall add the record to the db using mongoose
})

router.put("/:id", upload.single("photo") ,async(req, res)=>{
    const existing = await Contact.findById(req.params.id)
    if(!existing){
        return res.status(404).json({ error : "Record not found"})
    }
    const updatedData = {
        name : req.body.name,
        email : req.body.email,
        phoneNo : req.body.phoneNo,
    }
    if(req.file){
        const oldPath = path.join(__dirname, existing.photo);
        fs.unlink(oldPath, (err)=>{
            if(err){
                console.log("Old file not found to delete")
            }else{
                console.log("Old file deleted")
            }
        })
        updatedData.photo = req.file.filename
    }
    const updated = await Contact.findByIdAndUpdate(req.params.id, updatedData, { new : true});
    res.json(updated)
})

router.delete("/:id", async(req, res)=>{
    await Contact.findByIdAndDelete(req.params.id);
    res.json({"message" : "Deleted successfully"})
})


module.exports = router;