import React from 'react';
import Sidebar from '../templates/sidebar';
import Products from '../templates/products';
import FilterSort from '../components/filterSort';
import FilterMobile from '../templates/filterMobile';
import SortMobile from '../templates/sortMobile';


export default props => (
  <section className='content-page inner-content'>
    <Sidebar />
    <Products />
    <FilterSort />
    <FilterMobile />
    <SortMobile />
  </section>
)