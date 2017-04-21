import React, { Component } from 'react';

import CheckboxSizes from './checkboxSizes';

import sizes from '../json/sizes.json';

class CheckboxSizeList extends Component{
  
  render() {
    return(
      <div className={`box-sizes ${this.props.isMobile ? 'mobile' : ''}`}>
        {Object.keys(sizes).map((key, index) => <CheckboxSizes key={index} name='sizes' size={sizes[key]} />)}
        <div className='flex-null'></div>
      </div>
    )
  }
}

export default CheckboxSizeList;