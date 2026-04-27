import React from 'react'
import EmpCard from './empCard'

export default function EmpList({data, onDelete, onUpdate}) {
  console.log(JSON.stringify(data))
    return (
    <div>
        <h2>List of Emmployees</h2>
        <div className='row'>
            {
                data.map(e => (<EmpCard key={e._id} emp= {e}/>))
            }
        </div>
    </div>
  )
}
