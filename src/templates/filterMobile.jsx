import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonCloseFilterAndSort from '../components/mobile/buttonCloseFilterAndSort';
import ButtonFilterMobile from '../components/mobile/buttonFilterMobile';

import RadioButtonColorList from '../components/radioButtonColorList';
import CheckboxSizeList from '../components/checkboxSizeList';

import { openCloseFilter } from '../reducers/filterMobileActions';
import { openCloseFilterColors } from '../reducers/filterMobileActions';
import { openCloseFilterSizes } from '../reducers/filterMobileActions';
import { openCloseFilterPrices } from '../reducers/filterMobileActions';




class FilterMobile extends Component{
  
  render() {
    return(
      <section className={`filter-mobile ${this.props.openCloseFilterProp}`}>
        <ButtonCloseFilterAndSort name='Filtrar' onClick={this.props.openCloseFilter}/>

        <ButtonFilterMobile 
          name='Cores' 
          onClick={this.props.openCloseFilterColors} 
          icon={this.props.iconColors} 
          openClose={this.props.openCloseColors}
          childComponent={<RadioButtonColorList isMobile='true'/>}
        />
        
        <ButtonFilterMobile 
          name='Tamanhos' 
          onClick={this.props.openCloseFilterSizes} 
          icon={this.props.iconSizes} 
          openClose={this.props.openCloseSizes}
          childComponent={<CheckboxSizeList isMobile='true'/>}
        />

        <ButtonFilterMobile 
          name='Faixa de preços' 
          onClick={this.props.openCloseFilterPrices} 
          icon={this.props.iconPrices} 
          openClose={this.props.openClosePrices}
          childComponent={<CheckboxSizeList isMobile='true'/>}
        />
      </section>
    )
  }
}

const mapStateToProps = state => (
  {
    openCloseFilterProp: state.filterMobile.openCloseFilterProp ,
    iconColors: state.filterMobile.iconColors ,
    openCloseColors: state.filterMobile.openCloseFilterColorsProp ,
    iconSizes: state.filterMobile.iconSizes ,
    openCloseSizes: state.filterMobile.openCloseFilterSizesProp ,
    iconPrices: state.filterMobile.iconPrices ,
    openClosePrices: state.filterMobile.openCloseFilterPricesProp
  }
);

const mapDispatchToProps = dispatch => (bindActionCreators(
  { 
    openCloseFilter , 
    openCloseFilterColors ,
    openCloseFilterSizes ,
    openCloseFilterPrices
  } , dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FilterMobile);