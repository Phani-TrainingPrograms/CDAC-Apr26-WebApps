import React from 'react'

//Another way of creating components with explicit export statement. 
//props are arguments to the component that is sent from the parent component. 
function PropsDemo(props) {
    const name = props ? props.name : "Guest"
    const age = props ? props.age : 49
    const email = props ? props.email : "Not Applicable"
  return (
        <div>
            <p>All Props : {JSON.stringify(props)}</p>
            <section>
                <table border={1}>
                    <tr>
                        <td>Name :</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Age :</td>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td>Email  :</td>
                        <td>{email}</td>
                    </tr>
                </table>
            </section>        
        </div>
  )
}
export default PropsDemo
