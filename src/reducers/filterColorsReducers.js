import { COLOR_CHANGED, PRICE_CHANGED } from './filterColorsActions';

const INITIAL_STATE = { colorSelected: '', priceSelected: ''}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){

    case COLOR_CHANGED:

      state.colorSelected = state.priceSelected; 
      return {
        ...state, 
        colorSelected: action.products.filter((product) => {
          if(product.colors.indexOf(action.key) !== -1){
            return product
          }
        })
      }
    
    case PRICE_CHANGED:
      state.priceSelected = state.colorSelected;

      return {
        ...state,
        priceSelected: action.products.filter((product) => {
          if(product.price > action.min && product.price < action.max){
            return product
          }
        })
      }

    default:
      return state
  }
}