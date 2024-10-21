import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            currTodo: ""
        }
        console.log("Constructor: setting up initila state and bindings");
    }

    // useEffect(()=>{},[]) -> this is called ince when components is mounted
    componentDidMount() {
        console.log('Component Did Mount: Fetching initial to-do items.');
        // Simulate fetching data from an API
        setTimeout(() => {
          this.setState({
            todos: ['Learn React', 'Read a book']
          });
        }, 1000);
    }

    //called only when state is updated
    // useEffect(()=>{},[todos]);
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did Update: Checking if new to-do was added.');
        if (prevState.todos !== this.state.todos) {
          console.log('Updated To-dos:', this.state.todos);
        }
    }

    // useEffect(()=>{})
    shouldComponentUpdate(){
        console.log("i am called before a state is updated");
        return true;
        
    }

    // useEffect(()=>{
    //     //do something 

    //     return () => {}
    // })
    //called before the next comp is mounted 
    componentWillUnmount() {
        console.log('Component Will Unmount: Cleaning up resources.');
    }

    handleInput = (e) => {
        this.setState({
            currTodo: e.target.value
        })
    }

    handleAddTodo = () => {
        this.setState((prevState) => ({
            todos: [...prevState.todos, this.state.currTodo],
            currTodo : ""
        }))
    }
    
  render() {
    console.log("render method is called");
    
    return (
      <div>
        <h1>My Todo List</h1>
        <input type="text" value={this.state.currTodo} onChange={this.handleInput}/>
        <button onClick={this.handleAddTodo}>Add To-Do</button>
        <ul>
            {this.state.todos.map((todo,index)=>(
                <li key={index}>{todo}</li>
            ))}
        </ul>
      </div>
    )
  }
}
