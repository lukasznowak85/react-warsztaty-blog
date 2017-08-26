import {SEARCH, ATTACH_POSTS, SET_LOADING} from '../../actionTypes';

export const search = (searchVal) => {
  return {
    type: SEARCH,
    payload: searchVal
  }
}

export const attachPosts = (posts) => {
  return {
    type: ATTACH_POSTS,
    payload: posts
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    payload: loading
  }
}

// jako redux-actions
// export const { attachPosts, search, setLoading} = createActions(
//   ATTACH_POSTS,
//   SEARCH,
//   SET_LOADING
// )