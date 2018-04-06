import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonCloseFilterAndSort from '../components/mobile/buttonCloseFilterAndSort';
import ButtonSortMobile from '../components/mobile/buttonSortMobile';

import { openCloseSort } from '../reducers/sortMobileActions';
import { sortByLowestPrice, sortByBiggestPrice, sortByDate } from '../reducers/sortActions';


class SortMobile extends Component{
  
  render() {
    return(
      <section className={`sort-mobile ${this.props.openClose}`}>

        <ButtonCloseFilterAndSort name='Ordenar' onClick={this.props.openCloseSort}/>
        <ButtonSortMobile label='Mais recenter' onClick={this.props.sortByDate}/>
        <ButtonSortMobile label='Maior preço' onClick={this.props.sortByBiggestPrice}/>
        <ButtonSortMobile label='Menor preço' onClick={this.props.sortByLowestPrice}/>

      </section>
    )
  }
}

const mapStateToProps = state => ({ openClose: state.sortMobile.openClose });

const mapDispatchToProps = dispatch => (bindActionCreators(
  { 
    openCloseSort ,
    sortByLowestPrice, 
    sortByBiggestPrice, 
    sortByDate
  } , dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SortMobile);