import { combineReducers } from 'redux';
import buttonsReducers from './buttonsReducers';
import filterReducers from './filterReducers';
import moreColorsReducers from './moreColorsReducers';
import filterMobileReducers from './filterMobileReducers';

const reducers = combineReducers({
  actions: buttonsReducers ,
  filter: filterReducers ,
  moreColors: moreColorsReducers ,
  filterMobile: filterMobileReducers
});

export default reducers;