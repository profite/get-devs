import { MORE_COLORS } from './moreColorsActions';

const INITIAL_STATE = {total: 5, label: 'Ver todas as cores'}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){

    case MORE_COLORS:
      if(state.total === action.total){
        return {...state, total: 5, label: 'Ver todas as cores'}
      }
      return {...state, total: action.total, label: 'Ver menos'}
    
    default:
      return state
  }
}