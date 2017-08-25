import {SEARCH, ATTACH_POSTS, SET_LOADING} from '../../actionTypes';

const defaultState = {
  searchVal: '',
  posts: undefined,
  loading: false
};

const blogReducer = (state = defaultState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SEARCH:
      return {...state, searchVal: payload};
    case ATTACH_POSTS:
      return {...state, posts: payload};
    case SET_LOADING:
      return {...state, loading: payload};
    default:
      return state;
  }
};

export default blogReducer;