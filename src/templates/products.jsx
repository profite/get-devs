import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import productsData from '../json/products';
import Dresses from '../components/dresses';
import ButtonMore from '../components/buttonMore';

import { openCloseFilter } from '../reducers/filterMobileActions';


class Products extends Component{

  render() {

    productsData.sort(this.props.typeSort);

    return(
      <div className='box-products'>

        <h1 className='title-mobile'>Vestidos</h1>

        <div className='buttons-mobile'>
          <div onClick={this.props.openCloseFilter}>Filtrar</div>    
          <div>Ordenar</div>    
        </div>
        
        <div className='products'>
          {productsData.slice(0,this.props.quantity).map((product, index) => (
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

        <ButtonMore total={productsData.length}/>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    quantity: state.actions.more , 
    typeSort: state.filter.ordered, 
  }
);

const mapDispatchToProps = dispatch => (bindActionCreators({ openCloseFilter }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Products); 
  
