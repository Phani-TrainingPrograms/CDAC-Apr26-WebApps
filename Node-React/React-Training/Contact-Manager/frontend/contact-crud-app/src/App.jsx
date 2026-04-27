import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { addContact, deleteContact, getContacts, updateContacts } from './api'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import ContactCard from './components/ContactCard'


function App() {
  const [ contacts, setContacts ] = useState([])
  const [editData, setEditData] = useState([null])
  
  const loadContacts = async ()=>{
    const res = await getContacts();//shall wait till the data is available..
    setContacts(res.data)
    setEditData(null)
    
  }
  const handleAdd = async (contact) =>{
    console.log(JSON.stringify(contact))
    await addContact(contact);
    loadContacts();
  }

  const handleUpdate = async(id, contact) =>{
    debugger
    await updateContacts(id, contact);
    setEditData(null)
    loadContacts();
  }
  const handleDelete = async(id)=>{
    await deleteContact(id);
    loadContacts();
  }
  //useEffect is a hook to perform background operations in React like fetching api, background ui refreshing...
  useEffect(()=>{
    loadContacts()
  }, [])//this will be loaded only once..


  return (
    <>
     <h2>Contact manager</h2>
     <div className='container'>
        <ContactList contacts={contacts} onDelete={handleDelete} onUpdate ={setEditData}/>
     </div>
     <ContactForm onAdd={handleAdd} editData={editData} onUpdate={handleUpdate}/>
    </>
  )
}

export default App
