import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RadioButton from './radioButton';
import pricesFilter from '../json/pricesFilter.json';
import productsData from '../json/products';

import { priceChanged } from '../reducers/filterColorsActions';

class RadioButtonPriceList extends Component{
  
  render() {
    return(
      <div>
        {
          Object.keys(pricesFilter).map((key, index) => (
            <RadioButton 
              name='prices' 
              key={index} 
              value={key} 
              label={`de R$ ${pricesFilter[key].min} até R$ ${pricesFilter[key].max}`} 
              onChange={() => this.props.priceChanged(productsData, pricesFilter[key].min, pricesFilter[key].max)}
            />
          ))
        }

        <RadioButton name='prices' key='6' value='6' label='a partir de R$ 501' onChange={() => this.props.priceChanged(productsData, 501, 100000000)}/>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ priceChanged }, dispatch)); 

export default connect(null, mapDispatchToProps)(RadioButtonPriceList);