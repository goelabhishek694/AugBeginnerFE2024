import React, { Component } from 'react'
export default class Counter extends Component {
  constructor(){
    //this line calls the constructor of the parent class 
    super();
    this.state = {
      count: 0,
      name: "",
      list: []
    }
  }

  //always have to be arrow functions 
  //you can always use bind to point this 
  handleIncrement = () => {
    console.log("hello", this);
    this.setState({
      count: this.state.count+1
    });
  }

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count-1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}


// constructor -> is called automatically as soon as a class is intantiated 
// const dog = new Dog();
