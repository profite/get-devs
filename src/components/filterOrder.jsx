import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openClose, orderByLowestPrice, orderByBiggestPrice, orderByDate } from '../reducers/filterOrderActions';

class FilterOrder extends Component{

  render() {
    return(

      <div className='filter-order'>
        <div className={`options label ${this.props.isOpen}`} onClick={this.props.openClose}>Ordenar por:</div>
        <div value='recents' className={`options ${this.props.isOpen}`} onClick={this.props.orderByDate}>Mais recentes</div>
        <div value='biggest' className={`options ${this.props.isOpen}`} onClick={this.props.orderByBiggestPrice}>Maior preço</div>
        <div value='lowest' className={`options ${this.props.isOpen}`} onClick={this.props.orderByLowestPrice}>Menor preço</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({isOpen: state.filter.open_close});

const mapDispatchToProps = dispatch => (bindActionCreators(
  { 
    openClose , 
    orderByLowestPrice , 
    orderByBiggestPrice ,
    orderByDate  
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FilterOrder);