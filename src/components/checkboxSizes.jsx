import React, { Component } from 'react';

class CheckboxSizes extends Component{

  render() {
    return(
      <div>
        <style dangerouslySetInnerHTML={{
          __html: [
            `.checks:after {
               content: "${this.props.size}";
            }`
            ].join('\n')
          }}>
        </style>
        <input type='checkbox' className='checks' name={this.props.name} size={this.props.size}/>
      </div>
    )
  }
}

export default CheckboxSizes;
