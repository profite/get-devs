import React from 'react';
import Sidebar from '../templates/sidebar';
import Products from '../templates/products';
import FilterOrder from '../components/filterOrder';
import FilterMobile from '../templates/filterMobile';


export default props => (
  <section className='content-page inner-content'>
    <Sidebar />
    <Products />
    <FilterOrder />
    <FilterMobile />
  </section>
)