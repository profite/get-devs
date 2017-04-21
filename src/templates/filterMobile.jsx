import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonCloseFilter from '../components/mobile/buttonCloseFilter';
import ButtonColors from '../components/mobile/buttonColors';
import ButtonSizes from '../components/mobile/buttonSizes';
import ButtonPrices from '../components/mobile/buttonPrices';

class FilterMobile extends Component{
  
  render() {
    return(
      <section className={`filter-mobile ${this.props.openCloseFilterProp}`}>
        <ButtonCloseFilter />
        <ButtonColors />
        <ButtonSizes />
        <ButtonPrices />
      </section>
    )
  }
}

const mapStateToProps = state => ({openCloseFilterProp: state.filterMobile.openCloseFilterProp});

export default connect(mapStateToProps)(FilterMobile);