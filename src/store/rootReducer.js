import {combineReducers} from 'redux';

import blog from './data/blog/reducer';

const rootReducer = combineReducers({
  blog
});

export default rootReducer;