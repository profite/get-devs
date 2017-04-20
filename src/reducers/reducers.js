import { combineReducers } from 'redux';
import buttonsReducers from './buttonsReducers';
import filterOrderReducers from './filterOrderReducers';

const reducers = combineReducers({
  actions: buttonsReducers ,
  filter: filterOrderReducers
});

export default reducers;