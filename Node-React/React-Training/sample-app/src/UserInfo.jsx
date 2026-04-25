import React from 'react'
import mypic from './assets/pic1.png'//import the image that U want to place. 

export default function UserInfo() {
  const name = "Phaniraj"
  const email = "phanirajbn@gmail.com"

    return (
        <>
        <h1>User Information</h1>
        <hr />
        <div>
            <img src={mypic} alt='myPic' />
            <h2>{name}</h2>
            <hr />
            <p>Email: {email}</p> {/* Place the value in the placeholder */}
        </div>
        </>
  )
}
