import React, { Component } from 'react'//Component is used as base class for the statefull component 

export default class StateFullComponent extends Component{
    
    constructor(props) { //implementing props in statefull component. 
        super(props);
        //data that needs to store will be done using state object. It can hold any thing.
        this.state = { count :0}        
    }

    increment = () => this.setState({ count : this.state.count + 1})
    decrement = () => this.setState({ count : this.state.count - 1})

    //statefull components have a lifecycle methods that are implicitly called during life cycle of the component. 
    componentDidMount(){
        console.log("Component is loaded into the browser")
    }

    componentDidUpdate(prevProps, prevState ){
        //called when update of the dom happens
        if(prevState.count !== this.state.count)
            console.log("count has changed")      
    }
    render(){
        return (
            <>
                <h1>Counter App for State full component</h1>
                <hr/>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
}