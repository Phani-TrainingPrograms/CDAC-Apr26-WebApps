import { useEffect } from "react";
import { useState } from "react";

function ContactForm({ onAdd, editData, onUpdate }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    image: null
  });

  useEffect(()=>{
    if(editData){
        setForm({
            name : editData.name || "",
            email : editData.email || "",
            phoneNo : editData.phoneNo || "",
            photo : "",
        })
    }
  }, [editData])

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setForm({ ...form, photo: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    debugger;
    const data = new FormData();
    data.append("name", form.name);
    data.append("phoneNo", form.phoneNo);
    data.append("email", form.email);
    data.append("photo", form.photo);
    console.log(form.photo);
    if(editData){
        onUpdate(editData._id, data)
    }else{
        onAdd(data);
    } 
    // reset form
    setForm({
      name: "",
      phoneNo: "",
      email: "",
      photo: null
    });
  };

  return (
    <form onSubmit={submit} className="card p-3 mb-3">
        <h5>{editData ? "Edit contact" : "Add contact"}</h5>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="form-control mb-2"
      />

      <input
        name="phoneNo"
        value={form.phoneNo}
        onChange={handleChange}
        placeholder="Phone no"
        className="form-control mb-2"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="form-control mb-2"
      />

      <input
        type="file"
        name="photo"
        onChange={handleChange}
        className="form-control mb-2"
      />
      <button className="btn btn-success">{editData ?"Update" : "Add Contact"}</button>
    </form>
  );
}

export default ContactForm;