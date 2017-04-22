import React, { Component } from 'react';

import RadioButtonSizes from './radioButtonSizes';

import sizes from '../json/sizes.json';

class RadioButtonSizeList extends Component{
  
  render() {
    return(
      <div className={`box-sizes ${this.props.isMobile ? 'mobile' : ''}`}>
        {
          Object.keys(sizes)
            .map((key, index) =>( 
              <RadioButtonSizes key={index} name='sizes' size={sizes[key]} />
            ))
        }
        
        <div className='flex-null'></div>
      </div>
    )
  }
}

export default RadioButtonSizeList;