import React, { Component } from 'react'

export default class STATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         
      }
    }

   handleIncrease = ()=>{
    this.setState({
       count: this.state.count + 1,
    });
    
   }
   handleDecrease = ()=>{
    this.setState({
       count: this.state.count - 1,
    });
    
   }
    render() {
        const {count} = this.state;
    return (
      <div>
         <h1>Count : {count}</h1>
        
         <button onClick={this.handleIncrease} className='button'>+</button>
         <button onClick={this.handleDecrease} className='button' disabled={count === 0 ? true : false}>-</button>
      </div>
    )
  }
}
