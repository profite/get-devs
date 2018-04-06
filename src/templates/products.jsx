import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import productsData from '../json/products';
import Dresses from '../components/dresses';
import ButtonMore from '../components/buttonMore';

import { openCloseFilter } from '../reducers/filterMobileActions';
import { openCloseSort } from '../reducers/sortMobileActions';


class Products extends Component{

  constructor(props){
    super(props);

    this.filterProducts = productsData;
  }



  render() {
    this.filterProducts.sort(this.props.typeSort);
    
    if(this.props.colorSelected) this.filterProducts = this.props.colorSelected; 
    if(this.props.sizeSelected) this.filterProducts = this.props.sizeSelected; 
    if(this.props.priceSelected) this.filterProducts = this.props.priceSelected; 

    return(
      <div className='box-products'>

        <h1 className='title-mobile'>Vestidos</h1>

        <div className='buttons-mobile'>
          <div onClick={this.props.openCloseFilter}>Filtrar</div>    
          <div onClick={this.props.openCloseSort}>Ordenar</div>    
        </div>
        
        <div className='products'>
          {this.filterProducts.slice(0,this.props.quantity).map((product, index) => (
            <Dresses 
                name={product.name} 
                image={product.image} 
                price={product.price} 
                plots={product.plots} 
                key={index} 
                index={index+1}
              />)
          )}
        </div>

        <ButtonMore total={this.filterProducts.length}/>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    quantity: state.actions.more , 
    typeSort: state.sort.ordered , 
    colorSelected: state.filter.colorSelected ,
    priceSelected: state.filter.priceSelected ,
    sizeSelected: state.filter.sizeSelected
  }
);

const mapDispatchToProps = dispatch => (bindActionCreators({ openCloseFilter, openCloseSort }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Products); 
  
