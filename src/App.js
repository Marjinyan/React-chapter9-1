import React from 'react'
class App extends React.Component{
  state = {num:0}
  countUp = () => {
    this.setState(current => {
      return {
        num:current.num+1
      }
    })
  }
  render(){
    const {num} = this.state
    return <div> 
      <h1>number - {num}</h1>
      <button onClick={this.countUp}>Up</button>
    </div>
  }
}
export default App