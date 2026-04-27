import React from 'react'
import ContactCard from './ContactCard.jsx'

//This will contain the list of contacts.
export default function ContactList({contacts, onDelete, onUpdate }) {
  console.log("Into ContactList" + JSON.stringify(contacts))
  return (
    <div className="row">
      {
        contacts.map(c=>(<ContactCard key={c._id} contact={c} onDelete={onDelete} onUpdate={onUpdate}/>))
      }
    </div>
  )
}
