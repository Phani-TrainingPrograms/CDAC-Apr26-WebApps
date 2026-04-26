import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function ContactForm({ onAdd }) {
    const [form, setForm] = useState({
        name : "",
        phoneNo : "",
        email : "",
        photo : ""
    })

    const handleChange = (e) =>{
        if(e.target.name == "photo"){
            debugger;
            setForm({...form, photo : e.target.value})
            return;
        }else{
            setForm({...form, [e.target.name] : e.target.value})
        }
    }

    const submit = async(e) =>{
        console.log(form)
        debugger;
        e.preventDefault();
        onAdd(form)
    }

  return (
    <>
    <p>{JSON.stringify(form)}</p>
    <form onSubmit={submit} className='card p-3 mb-3'>
        <input name="name" onChange={handleChange} type='text'  placeholder='Name' className='form-control mb-2'/>
        <input name="phoneNo" onChange={handleChange} type='text' placeholder='Phone' className='form-control mb-2'/>
        <input name="email" onChange={handleChange} type='text' placeholder='Email' className='form-control mb-2'/>
        <input name="photo" onChange={handleChange} type='file' placeholder='photo' className='form-control mb-2'/>
        <button className='btn btn-success'>
            <i className="fa fa-plus" aria-hidden="true"></i>
            Add Contact
        </button>
    </form>
    </>
  )
}
