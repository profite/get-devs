import React from 'react';
import Sidebar from '../templates/sidebar';
import Products from '../templates/products';
import FilterOrder from '../components/filterOrder';


export default props => (
  <section className='content-page inner-content'>
    <Sidebar />
    <Products />
    <FilterOrder />
  </section>
)