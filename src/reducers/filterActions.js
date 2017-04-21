export const OPEN_CLOSE = 'OPEN_CLOSE';
export const ORDER_BY_LOWEST_PRICE = 'ORDER_BY_LOWEST_PRICE';
export const ORDER_BY_BIGGEST_PRICE = 'ORDER_BY_BIGGEST_PRICE';
export const ORDER_BY_DATE = 'ORDER_BY_DATE';
export const COLOR_CHANGED = 'COLOR_CHANGED';


export const openClose = () => ({
  type: OPEN_CLOSE
})

export const orderByLowestPrice = () => ({
  type: ORDER_BY_LOWEST_PRICE
});

export const orderByBiggestPrice = () => ({
  type: ORDER_BY_BIGGEST_PRICE
});

export const orderByDate = () => ({
  type: ORDER_BY_DATE
});

export const colorChanged = event => ({
  type: COLOR_CHANGED ,
  payload: event.target.value
})