import React from 'react'

export default function EmpCard({emp, onUpdate, onDelete}) {
  return (
    <div className="col-md-6">
        <div className='card'>
            <div className="row">
                <div className="col-md-5">
                    <h2>{emp.name}</h2>
                </div>
                <div className="col-md-5">
                    <p>{emp.address}</p>
                    <p>{emp.salary}</p>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-sm btn-warning p-2 mb-2' onClick={(e) => onUpdate(emp)}>Update</button>
                    <button className='btn btn-sm btn-danger p-2 mb-2'onClick={(e) => onDelete(emp._id)}>Delete</button>
                </div>
            </div>
            <hr />
        </div>
    </div>
  )
}
