import React, { Component } from 'react';

class CheckboxSizes extends Component{

  render() {
    return(
      <div className='content-check'>
        <input type='checkbox' className='checks' name={this.props.name} />
        <label className='label-check'>{this.props.size}</label>
      </div>
    )
  }
}

export default CheckboxSizes;
