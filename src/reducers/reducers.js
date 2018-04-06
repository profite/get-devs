import { combineReducers } from 'redux';
import buttonsReducers from './buttonsReducers';
import sortReducers from './sortReducers';
import moreColorsReducers from './moreColorsReducers';
import filterMobileReducers from './filterMobileReducers';
import sortMobileReducers from './sortMobileReducers';
import filterReducers from './filterReducers';

const reducers = combineReducers({
  actions: buttonsReducers ,
  sort: sortReducers ,
  moreColors: moreColorsReducers ,
  filterMobile: filterMobileReducers ,
  sortMobile: sortMobileReducers ,
  filter: filterReducers
});

export default reducers;