import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RadioButtonColorList from '../radioButtonColorList';

import { openCloseFilterColors } from '../../reducers/filterMobileActions';

class ButtonColors extends Component{
  
  render() {
    return(
      <div className='container-filters'>
        <div className='open-close-filters' onClick={this.props.openCloseFilterColors}>
          <div className='label-filters'>Cores</div>
          <div className='icons'>{this.props.icon}</div>  
        </div>
        
        <div className={`content-filters ${this.props.openClose}`}>
          <RadioButtonColorList isMobile='true'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    icon: state.filterMobile.iconColors ,
    openClose: state.filterMobile.openCloseFilterColorsProp
  }
);

const mapDispatchToProps = dispatch => (bindActionCreators({ openCloseFilterColors }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ButtonColors);