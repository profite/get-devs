import { ADD_CART, LOAD_MORE } from './buttonsActions';

const INITIAL_STATE = {count: 0, more: 6, buttonHide: false}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case ADD_CART:
      return {...state, count: state.count + 1}
    
    case LOAD_MORE:
      
      if(state.more >= action.total - 3){
        state.buttonHide = true;
      } else if(state.more > action.total - 3){
          return state
      }
      return {...state, more: state.more + 3}

   default:
      return state
  }
}