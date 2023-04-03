import React, { Component } from 'react';
 
class Hello extends Component {
 
  componentWillUnmount() {
    alert('hihi');
  }
 
  render() {
    return <h1>xinchao</h1>;
  }
}
 
export default Hello;