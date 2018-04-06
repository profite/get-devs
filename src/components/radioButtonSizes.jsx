import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sizeChanged } from '../reducers/filterActions';

import productsData from '../json/products';


class RadioButtonSizes extends Component{

  render() {
    
    return(
      <div className='content-check'>
        <input type='radio' className='checks' name={this.props.name} onChange={() => this.props.sizeChanged(productsData , this.props.size)} />
        <label className='label-check'>{this.props.size}</label>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ sizeChanged }, dispatch));


export default connect(null, mapDispatchToProps)(RadioButtonSizes);
