import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openClose, sortByLowestPrice, sortByBiggestPrice, sortByDate } from '../reducers/filterActions';

import OptionSort from './optionSort';

class FilterSort extends Component{

  render() {
    return(

      <div className='filter-order'>
        <div className={`options label ${this.props.isOpen}`} onClick={this.props.openClose}>Ordenar por:<i className="fa fa-angle-down angle" aria-hidden="true"></i></div>
        
        <OptionSort 
          label='Mais recentes' 
          value='recents' 
          isOpen={this.props.isOpen} 
          onClick={this.props.sortByDate}
        />        
        
        <OptionSort 
          label='Maior preço' 
          value='biggest' 
          isOpen={this.props.isOpen} 
          onClick={this.props.sortByBiggestPrice}
        />

        <OptionSort 
          label='Menor preço' 
          value='lowest' 
          isOpen={this.props.isOpen} 
          onClick={this.props.sortByLowestPrice}
        />        
      </div>
    )
  }
}

const mapStateToProps = state => ({isOpen: state.filter.openClose});

const mapDispatchToProps = dispatch => (bindActionCreators(
  { 
    openClose , 
    sortByLowestPrice , 
    sortByBiggestPrice ,
    sortByDate  
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FilterSort);