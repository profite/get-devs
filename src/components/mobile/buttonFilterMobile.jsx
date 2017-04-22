import React, { Component } from 'react';

class ButtonFilterMobile extends Component{
  
  render() {
    return(
      <div className='container-filters'>
        <div className='open-close-filters' onClick={this.props.onClick}>
          <div className='label-filters'>{this.props.name}</div>
          <div className='icons'>{this.props.icon}</div>  
        </div>
        
        <div className={`content-filters ${this.props.openClose}`}>
          {this.props.childComponent}
        </div>
      </div>
    )
  }
}

export default ButtonFilterMobile;