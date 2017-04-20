import React, { Component } from 'react';

class RadioButton extends Component{

  render() {
    return(
       <div className='box-radio'>
         <input type='radio' className='radio-buttons' name={this.props.name} value={this.props.value} />
         <span>{this.props.label}</span>
       </div>
    )
  }
}

export default RadioButton;
  
 