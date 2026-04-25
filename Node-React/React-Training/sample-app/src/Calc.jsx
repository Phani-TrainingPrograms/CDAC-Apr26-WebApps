//This is the example for event handling input handling feature in React components. 
//values that are modified by the DOM will not be available to the virtual DOM. we use a hook called useState to transfer 
// the state from the physical dom to virtual dom. 
import React, { useState } from 'react'

export default function Calc() {
    const [ firstValue, setFirstValue ] = useState(0)//Value to manage the state and a function that sets the state
    const [ secondValue, setSecondValue ] = useState(0)
    const [ operand, setOperand ] = useState("")//string
    const [ result, setResult ] = useState(0)

    const calculate = ()=>{
        //get the values from the inputs
        const f = parseFloat(firstValue)
        const s = parseFloat(secondValue)
        if(isNaN(f) || isNaN(s)){
            setResult("Invalid Inputs")//result will be set as "INVALID Inputs"
        }
        //handle the operations
        switch(operand){
            case "add" : setResult((f + s)); break;
            case "sub" : setResult((f - s)); break;
            case "mul" : setResult((f * s)); break;
            case "div" : setResult((f / s)); break;
            default : setResult("Invalid Selection")
        }
    }
  return (
    <div>
        <h2>Calculator Program</h2>
        <hr/>
            <div>
                <p>
                    <label>First value: </label>
                    <input type="number" value={firstValue} onChange={ (e) => setFirstValue(e.target.value)} placeholder='Enter first Value'/>
                </p>
                <p>
                    <label>Second Value:</label>
                    <input type="number" value={secondValue} onChange={(e) => setSecondValue(e.target.value)} placeholder='Enter the second value' />
                </p>
                <p>
                    <label>Select Choice:</label>
                    <select value={operand} onChange={ e => setOperand(e.target.value)}>
                        <option value= "add">Add</option>
                        <option value= "sub">Subtract</option>
                        <option value= "mul">Multiply</option>
                        <option value= "div">Divide</option>
                    </select>
                </p>
                <p>
                    <button onClick={calculate}>Result</button>
                    <span>Result:{result}</span>
                </p>
            </div>   
    </div>
  )
}
