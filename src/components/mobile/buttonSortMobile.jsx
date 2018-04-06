import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';

import { openCloseSort } from '../../reducers/sortMobileActions';

class ButtonSortMobile extends Component{
  
  render() {
    return(
      <div className='button-sort-mobile' onClick={this.props.onClick}>
        {this.props.label}
        <div className='trigger'onClick={this.props.openCloseSort}></div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ openCloseSort }, dispatch));

export default connect(null, mapDispatchToProps)(ButtonSortMobile);