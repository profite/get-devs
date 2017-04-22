import { 
  OPEN_CLOSE , 
  SORT_BY_LOWEST_PRICE , 
  SORT_BY_BIGGEST_PRICE , 
  SORT_BY_DATE ,
} from './filterActions';

const INITIAL_STATE = {openClose: '', ordered: '', color: ''}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case OPEN_CLOSE:
      if(!state.openClose){
        return {...state, openClose: 'open'}
      }
      return {...state, openClose: ''}
    
    case SORT_BY_LOWEST_PRICE:
      return {...state, openClose: '', ordered: (a,b) => {
        return a.price - b.price
      }}

    case SORT_BY_BIGGEST_PRICE:
      return {...state, openClose: '', ordered: (a,b) => {
        return b.price - a.price
      }}

    case SORT_BY_DATE:
      return {...state, openClose: '', ordered: (a,b) => {
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
      }}

    default: 
      return state
  }
}