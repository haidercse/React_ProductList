import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          changedValue : ''
      }
    }
    
    handleChange = (e)=>{
      this.setState({
        changedValue : e.target.value,
      },()=>{
        console.log(this.state.changedValue);
      })
      
      
    }
  render() {
   
    return (
      <div style={{ marginBottom: '5px' }}>
          <input type="text" onChange={this.handleChange} />
          <button className='button'>Submit</button>
          <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
