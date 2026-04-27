import React, { useEffect, useState } from 'react'
import { addRec, updateRec } from '../services/empService'

export default function EmpForm({ onAdd, editRec, onUpdate }) {
  const [form, setForm] = useState({
    name : "",
    address : "",
    salary : ""
  })

  useEffect(()=>{
    if(editRec){
        setForm({
            name : editRec.name,
            address : editRec.address,
            salary : editRec.salary
        })
    }
  }, [editRec])

  const handleChange = (e) =>{
    setForm({...form, [e.target.name] : [e.target.value]})
  }

  const onsubmit = (e) =>{
    debugger;
    e.preventDefault();
    // const data = new FormData();
    // data.append("name", form.name)
    // data.append("address", form.address)
    // data.append("salary", form.salary)
    const rec = {};
    rec.name = form.name[0];
    rec.address = form.address[0];
    rec.salary = form.salary[0];
    if(editRec){
        updateRec(editRec._id, rec)
    }else{
        addRec(rec)
    }
    setForm({
        name : "",
        address : "",
        salary : ""
    })
  }

  return (
    <form className='card p-3 mb-3' onSubmit={onsubmit}>
        <h2>{editRec ? "Edit details" : "Add Details"}</h2>
        <input onChange={handleChange} name="name" value={form.name} placeholder='Name' className='form-control mb-2'/>
        <input name="address" value={form.address} onChange={handleChange} placeholder='address' className='form-control mb-2'/>
        <input name="salary" value={form.salary} onChange={handleChange} placeholder='salary' className='form-control mb-2'/>
        <button className='btn btn-success'>{editRec ? "Update" : "Add Emp"}</button>
    </form>
  )
}
