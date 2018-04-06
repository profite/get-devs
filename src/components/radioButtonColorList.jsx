import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RadioButton from './radioButton';
import colors from '../json/colors.json';

import { moreColors } from '../reducers/moreColorsActions';
import { colorChanged } from '../reducers/filterActions';
import productsData from '../json/products';


class RadioButtonColorList extends Component{
  
  render() {
    return(
      <div>
        {
          Object.keys(colors)
            .slice(0,!this.props.isMobile ? this.props.total : colors.length)
            .map((key, index) => (
              <RadioButton name='colors' key={index} value={key} label={colors[key]} onChange={() => this.props.colorChanged(key, productsData)}/>
            )
          )
        }
        
        {!this.props.isMobile ? <div className='more-colors' onClick={() => this.props.moreColors(colors.length)}>{this.props.label}</div> : ''}
      </div>
    )
  }
}

const mapStateToProps = state => (
  { 
    label: state.moreColors.label , 
    total: state.moreColors.total ,
  }
);

const mapDispatchToProps = dispatch => (bindActionCreators({ moreColors, colorChanged }, dispatch)); 

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtonColorList);