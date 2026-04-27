import React from 'react'

export default function ContactCard({contact, onUpdate, onDelete }) {
  return (
    <div className="col-md-4">
      {
        contact.photo && (
          <img style={{height : "120px", objectFit:"cover"}} src={`http://localhost:1234/uploads/${contact.photo}`}
             className='card-img img-fluid mb-2' />
        )}
      <div className="card p-3 mb-3 shadow">
          <h5>{contact.name}</h5>
          <p>{contact.phoneNo}</p>
          <p>{contact.email}</p>
          <button className='btn btn-warning btn-sm mb-3 p-3' onClick={() => onUpdate(contact)}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
            Update</button>
          <button className='btn btn-danger btn-sm mb-3 p-3' onClick={() => onDelete(contact._id)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
            Delete
          </button>
      </div>
    </div>
  )
}
