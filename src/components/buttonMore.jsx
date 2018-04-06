import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMore } from '../reducers/buttonsActions';

class ButtonMore extends Component{
  
  render(){
    
    return(
      <button className={`button-more hide-${this.props.hide}`} onClick={() => this.props.loadMore(this.props.total)}>
        Carregar Mais
      </button>
    )
  }
}

const mapStateToProps = state => ({hide: state.actions.buttonHide});

const mapDispatchToProps = dispatch => (bindActionCreators({ loadMore }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ButtonMore);