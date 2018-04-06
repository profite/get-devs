import { OPEN_CLOSE_SORT } from './sortMobileActions';

const INITIAL_STATE = { openClose: '' }

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case OPEN_CLOSE_SORT:
      if(!state.openClose){
        return {...state, openClose: 'open'}
      }
      return {...state, openClose: ''}
    
    default:
      return state
  }
}