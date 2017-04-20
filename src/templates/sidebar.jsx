import React from 'react';
import RadioButton from '../components/radioButton';
import CheckboxSizes from '../components/checkboxSizes';

export default props => (
  <aside className='sidebar'>
    <h1 className='title'>Vestidos</h1>

    <div className='set-color'>
      <h3 className='sub-title'>Cores</h3>

      <RadioButton name='colors' value='yellow' label='Amarelo' />
      <RadioButton name='colors' value='blue' label='Azul' />
      <RadioButton name='colors' value='white' label='Branco' />

    </div>

    <div className='set-size'>
      <h3 className='sub-title'>Tamanhos</h3>

      <CheckboxSizes name='sizes' value='M' />
    </div>
    
    <div className='set-price'>
      <h3 className='sub-title'>Faixa de Preço</h3>
    </div>

  </aside>
)