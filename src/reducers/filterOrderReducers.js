import { OPEN_CLOSE, ORDER_BY_LOWEST_PRICE, ORDER_BY_BIGGEST_PRICE, ORDER_BY_DATE } from './filterOrderActions';

const INITIAL_STATE = {open_close: '', ordered: ''}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case OPEN_CLOSE:
      if(!state.open_close){
        return {...state, open_close: 'open'}
      }
      return {...state, open_close: ''}
    
    case ORDER_BY_LOWEST_PRICE:
      return {...state, open_close: '', ordered: (a,b) => {
        return a.price - b.price
      }}

    case ORDER_BY_BIGGEST_PRICE:
      return {...state, open_close: '', ordered: (a,b) => {
        return b.price - a.price
      }}

    case ORDER_BY_DATE:
      return {...state, open_close: '', ordered: (a,b) => {
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
      }}

    default: 
      return state
  }
}