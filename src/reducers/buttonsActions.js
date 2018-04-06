export const ADD_CART = 'ADD_CART';
export const LOAD_MORE = 'LOAD_MORE';


export const addCart = () => ({
  type: ADD_CART
});   

export const loadMore = (total) => ({
  type: LOAD_MORE ,
  total: total
})
