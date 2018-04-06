import React, {Component} from 'react';
import ButtonCart from '../components/buttonCart';

class Dresses extends Component{

  valuePlots() {
    return (this.props.price / this.props.plots).toFixed(2);
  }

  render(){
    return(
      <div className='dress'>
        <img src={this.props.image} alt={`Imagem ${this.props.index}`}/>

        <div className='dress-name'>{this.props.name}</div>

        <div className='container-price'>
          <div className='price'>
            <div className='sale-price'>R$ {this.props.price}</div>
            <div className='plots-price'>{`até ${this.props.plots}x de R$ ${this.valuePlots()}`}</div>
          </div>
          <div>
            <ButtonCart />
          </div>
        </div>    
      </div>
    )
  }

}

export default Dresses;