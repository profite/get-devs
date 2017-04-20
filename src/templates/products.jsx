import React, { Component } from 'react';
import { connect } from 'react-redux';

import productsData from '../json/products';
import Dresses from '../components/dresses';
import ButtonMore from '../components/buttonMore';

class Products extends Component{

  render() {

    productsData.sort(this.props.typeSort);

    return(
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

export default connect(mapStateToProps)(Products); 
  
