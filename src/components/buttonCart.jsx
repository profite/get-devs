import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addCart } from '../reducers/buttonsActions';

class ButtonCart extends Component{

  render(){
    return(
      <button className='button-cart' onClick={this.props.addCart}>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </button>
    )
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ addCart }, dispatch));

export default connect(null, mapDispatchToProps)(ButtonCart);