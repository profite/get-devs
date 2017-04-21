import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openCloseFilterPrices } from '../../reducers/filterMobileActions';

class ButtonPrices extends Component{
  
  render() {
    return(
      <div className='container-filters'>
        <div className='open-close-filters' onClick={this.props.openCloseFilterPrices}>
          <div className='label-filters'>Faixa de preços</div>
          <div className='icons'>{this.props.icon}</div>
        </div>  

        <div className={`content-filters ${this.props.openClose}`}>
          AAAAAAAA
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    icon: state.filterMobile.iconPrices ,
    openClose: state.filterMobile.openCloseFilterPricesProp
  }
);

const mapDispatchToProps = dispatch => (bindActionCreators({ openCloseFilterPrices }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPrices);