import React, { Component } from 'react';

class OptionSort extends Component{
  render() {
    return(
      <div 
        value={this.props.value} 
        className={`options ${this.props.isOpen}`} 
        onClick={this.props.onClick}
      >
        {this.props.label}
      </div>
    )
  }
} 

export default OptionSort;