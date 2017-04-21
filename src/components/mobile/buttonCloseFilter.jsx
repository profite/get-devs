import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openCloseFilter } from '../../reducers/filterMobileActions';

class ButtonCloseFilter extends Component{
  
  render() {
    return(
      <div className='close-filter' onClick={this.props.openCloseFilter}>
        <div className='label-filters'>Filtrar</div>
        <div className='icons'>+</div>  
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ openCloseFilter }, dispatch));

export default connect(null, mapDispatchToProps)(ButtonCloseFilter);