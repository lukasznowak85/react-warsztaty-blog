import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import blog from './data/blog/reducer';

const rootReducer = combineReducers({
  blog,
  form: formReducer
});

export default rootReducer;