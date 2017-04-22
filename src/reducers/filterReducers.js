import { COLOR_CHANGED, PRICE_CHANGED, SIZE_CHANGED } from './filterActions';

const INITIAL_STATE = { colorSelected: '', priceSelected: '', sizeSelected: ''}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){

    case COLOR_CHANGED:

      return {
        ...state, 
        colorSelected: action.products.filter((product) => {
          if(product.colors.indexOf(action.key) !== -1){
            return product
          }
          return null;
        })
      }
    
    case PRICE_CHANGED:

      return {
        ...state,
        priceSelected: action.products.filter((product) => {
          if(product.price > action.min && product.price < action.max){
            return product
          }
          return null;
        })
      }

    case SIZE_CHANGED:
      return {
        ...state, 
        sizeSelected: action.products.filter((product) => {
          if(product.sizes.indexOf(action.size) !== -1){
            return product
          }
          return null;
        })
      }

    default:
      return state
  }
}