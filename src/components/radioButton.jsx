import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { colorChanged } from '../reducers/filterActions';

class RadioButton extends Component{

  render() {

    return(
       <div className='box-radio'>
         <input type='radio' className='radio-buttons' name={this.props.name} value={this.props.value} onChange={this.props.colorChanged}/>
         <span>{this.props.label}</span>
       </div>
    )
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ colorChanged }, dispatch));

export default connect(null, mapDispatchToProps)(RadioButton);
  
 