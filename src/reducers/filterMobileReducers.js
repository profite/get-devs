import { OPEN_CLOSE_FILTER, OPEN_CLOSE_FILTER_COLORS, OPEN_CLOSE_FILTER_SIZES, OPEN_CLOSE_FILTER_PRICES } from './filterMobileActions';

const INITIAL_STATE = {
  openCloseFilterProp: '' , 
  openCloseFilterColorsProp: '' , 
  openCloseFilterSizesProp: '' , 
  openCloseFilterPricesProp: '' , 
  iconColors: '+' , 
  iconSizes: '+' ,
  iconPrices: '+'
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){

    case OPEN_CLOSE_FILTER:
      if(!state.openCloseFilterProp){
        return {...state, openCloseFilterProp: 'open'}
      }
      return {...state, openCloseFilterProp: ''}

    case OPEN_CLOSE_FILTER_COLORS:
      if(!state.openCloseFilterColorsProp){
        return {...state, openCloseFilterColorsProp: 'open', iconColors: '-'}
      }
      return {...state, openCloseFilterColorsProp: '', iconColors: '+'}

    case OPEN_CLOSE_FILTER_SIZES:
      if(!state.openCloseFilterSizesProp){
        return {...state, openCloseFilterSizesProp: 'open', iconSizes: '-'}
      }
      return {...state, openCloseFilterSizesProp: '', iconSizes: '+'}

    case OPEN_CLOSE_FILTER_PRICES:
      if(!state.openCloseFilterPricesProp){
        return {...state, openCloseFilterPricesProp: 'open', iconPrices: '-'}
      }
      return {...state, openCloseFilterPricesProp: '', iconPrices: '+'}

    default:
      return state
  }
}