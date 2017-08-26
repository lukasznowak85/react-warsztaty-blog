import { SEARCH, ATTACH_POSTS, SET_LOADING, ATTACH_COMMENTS } from '../../actionTypes';
import { handleActions } from 'redux-actions';

const defaultState = {
  searchVal: '',
  posts: undefined,
  loading: false,
  comments: undefined
};

// jako redux-actions
const blogReducer = handleActions({
  [SEARCH]: (state, { payload }) => ({ ...state, searchVal: payload }),
  [ATTACH_POSTS]: (state, { payload }) => ({ ...state, posts: payload }),
  [ATTACH_COMMENTS]: (state, { payload }) => {
    const { comments, commentsList } = payload;
    const postId = comments[commentsList[0]].postId;
    const post = state.posts.find(el => el.id === parseInt(postId, 10));
    const newPost = { ...post, comments: commentsList }
    const newPostList = state.posts.map(post => {
      if (post.id === postId) {
        return newPost;
      }
      return post;
    });

    return { ...state, comments: { ...state.comments, ...comments }, posts: newPostList };
  },
  [SET_LOADING]: (state, { payload }) => ({ ...state, loading: payload })
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