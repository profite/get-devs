import React, { Component } from 'react';

class ButtonCloseFilterAndSort extends Component{
  
  render() {
    return(
      <div className='close-filter' onClick={this.props.onClick}>
        <div className='label-filters'>{this.props.name}</div>
        <div className='icons'>+</div>  
      </div>
    )
  }
}

export default ButtonCloseFilterAndSort;