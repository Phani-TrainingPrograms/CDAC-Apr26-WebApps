import React, { Component } from 'react' //rcc

export default class StatefullTodoApp extends Component {

 constructor(props) {
    super(props);
    //define the data for your component
    this.state = {
        todos : [],//array of tasks that U want to do
        newTodo : ""//new task that u want to add.
    }
 }
    ///////////event handlers///////////////////////////
    handleAdd = ()=>{
        //get the current state
        const { todos, newTodo } = this.state
        //get the new task
        if(newTodo == "")
            return;
        const task = {
            id : Date.now(),
            text : newTodo,
            done  : false
        }
        //add the task to the list
        this.setState({
            todos : [...todos, task],
            newTodo : ""
        })
        
    }
 
    handleDelete = (id)=>{
        this.setState((prevState) =>({todos : prevState.todos.filter((td) => td.id !== id)}))
    }

    handleToggle = (id)=>{
        this.setState((prev =>({
            todos : prev.todos.map((td) => td.id === id ? { ...td, done : !td.done}  : td)
        })))
    }
    render() {
    return (
      <div>
        <h1>Todo Manager</h1>
        <hr />
        <div>
            <input className='form-control' value={this.state.newTodo} onChange = {(e) => this.setState({ newTodo : e.target.value})} type='text' placeholder='Enter the Task'/>
            <button onClick={this.handleAdd} className='btn btn-success'>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                Add</button>
        </div>
        <div>
            <ul>
                {this.state.todos.map((td) =>(
                    <li key={td.id}>
                        <span style={{textDecoration : td.done ? "line-through" : "none"}} onClick={()=>this.handleToggle(td.id)}>{td.text}</span>
                        <button className='btn btn-danger' onClick={()=> this.handleDelete(td.id)}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    )
  }
}
