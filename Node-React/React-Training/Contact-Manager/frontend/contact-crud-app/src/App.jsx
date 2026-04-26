import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { addContact, deleteContact, getContacts } from './api'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'


function App() {
  const [ contacts, setContacts ] = useState([])

  //useEffect is a hook to perform background operations in React like fetching api, background ui refreshing...
  useEffect(()=>{
    loadContacts();
  }, [])//this will be loaded only once..

  const loadContacts = async ()=>{
    const res = await getContacts();//shall wait till the data is available..
    setContacts(res.data)
  }

  const handleAdd = async (contact) =>{
    await addContact(contact);
    loadContacts();
  }

  const handleDelete = async(id)=>{
    await deleteContact(id);
    loadContacts();
  }

  return (
    <>
    <p>{JSON.stringify(contacts)}</p>
     <h2>Contact manager</h2>
     <ContactForm onAdd={handleAdd}/>
     <ContactList/>
    </>
  )
}

export default App
