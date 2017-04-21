import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CheckboxSizeList from '../checkboxSizeList';

import { openCloseFilterSizes } from '../../reducers/filterMobileActions';

class ButtonSizes extends Component{
  
  render() {
    return(
      <div className='container-filters'>
        <div className='open-close-filters' onClick={this.props.openCloseFilterSizes}>
          <div className='label-filters'>Tamanhos</div>
          <div className='icons'>{this.props.icon}</div>
        </div>  

        <div className={`content-filters ${this.props.openClose}`}>
          <CheckboxSizeList isMobile='true'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    icon: state.filterMobile.iconSizes ,
    openClose: state.filterMobile.openCloseFilterSizesProp
  }
);

const mapDispatchToProps = dispatch => (bindActionCreators({ openCloseFilterSizes }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSizes);