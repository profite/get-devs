import React, { Component } from 'react';

import CheckboxSizeList from '../components/checkboxSizeList';
import RadioButtonColorList from '../components/radioButtonColorList';
import RadioButtonPriceList from '../components/radioButtonPriceList';

class Sidebar extends Component {
  
  render() {
    return(
      <aside className='sidebar'>
        <h1 className='title'>Vestidos</h1>

        <div className='set-color'>
          <h3 className='sub-title'>Cores</h3>
          <RadioButtonColorList />
        </div>

        <div className='set-size'>
          <h3 className='sub-title'>Tamanhos</h3>

          <CheckboxSizeList />
        </div>
        
        <div className='set-price'>
          <h3 className='sub-title'>Faixa de Preço</h3>

          <div className='box-prices'>
            <RadioButtonPriceList />
          </div>
        </div>

      </aside>
    )
  }
}


export default Sidebar;