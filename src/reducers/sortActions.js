export const OPEN_CLOSE = 'OPEN_CLOSE';
export const SORT_BY_LOWEST_PRICE = 'SORT_BY_LOWEST_PRICE';
export const SORT_BY_BIGGEST_PRICE = 'SORT_BY_BIGGEST_PRICE';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const COLOR_CHANGED = 'COLOR_CHANGED';


export const openClose = () => ({
  type: OPEN_CLOSE
})

export const sortByLowestPrice = () => ({
  type: SORT_BY_LOWEST_PRICE
});

export const sortByBiggestPrice = () => ({
  type: SORT_BY_BIGGEST_PRICE
});

export const sortByDate = () => ({
  type: SORT_BY_DATE
});
