import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../assets/images/logo.png';
import iconBag from '../assets/images/icon_bag.png';

class Header extends Component{

  render() {
    return(
      <header className='header'>
        <div className='inner-content'>
          <div className='header-content'>
            <img src={logo} className='header-logo' alt='Logo Profite'/>
            <div className='bag'>
              <img src={iconBag} className='header-icon-bag' alt='Icone Bolsa'/>
              <div className='counter'>{this.props.count}</div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({count: state.actions.count});

export default connect(mapStateToProps)(Header);