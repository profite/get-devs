export const COLOR_CHANGED = 'COLOR_CHANGED';
export const PRICE_CHANGED = 'PRICE_CHANGED';
export const SIZE_CHANGED = 'SIZE_CHANGED';

export const colorChanged = (key, products) => ({
  type: COLOR_CHANGED ,
  key ,
  products
}); 

export const priceChanged = (products, min, max) => ({
  type: PRICE_CHANGED , 
  products ,
  min ,
  max
});

export const sizeChanged = (products, size) => ({
  type: SIZE_CHANGED,
  products ,
  size
})