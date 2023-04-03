import React, { Component } from 'react';
 
class Home extends Component{
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <div>
            <h1>xinchao</h1>
            <button onClick={this.props.onLogOut}>thoat</button>
        </div>
      </div>
    )
  }
}
 
export default Home