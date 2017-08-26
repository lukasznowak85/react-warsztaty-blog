import {SEARCH, ATTACH_POSTS, SET_LOADING} from '../../actionTypes';
import {handleActions} from 'redux-actions';

const defaultState = {
  searchVal: '',
  posts: undefined,
  loading: false
};

// jako redux-actions
const blogReducer = handleActions({
  [SEARCH]: (state, {payload}) => ({...state, searchVal: payload}),
  [ATTACH_POSTS]: (state, {payload}) => ({...state, posts: payload}),
  [SET_LOADING]: (state, {payload}) => ({...state, loading: payload})
}, defaultState);

// const blogReducer = (state = defaultState, action) => {
//   const {type, payload} = action;
//   switch (type) {
//     case SEARCH:
//       return {...state, searchVal: payload};
//     case ATTACH_POSTS:
//       return {...state, posts: payload};
//     case SET_LOADING:
//       return {...state, loading: payload};
//     default:
//       return state;
//   }
// };

export default blogReducer;