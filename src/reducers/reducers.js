import { combineReducers } from 'redux';
import buttonsReducers from './buttonsReducers';
import filterReducers from './filterReducers';
import moreColorsReducers from './moreColorsReducers';
import filterMobileReducers from './filterMobileReducers';
import sortMobileReducers from './sortMobileReducers';
import filterColorsReducers from './filterColorsReducers';

const reducers = combineReducers({
  actions: buttonsReducers ,
  filter: filterReducers ,
  moreColors: moreColorsReducers ,
  filterMobile: filterMobileReducers ,
  sortMobile: sortMobileReducers ,
  filterColors: filterColorsReducers
});

export default reducers;