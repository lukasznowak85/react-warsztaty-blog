import { customFetch } from './fetch'
import { attachPosts, setLoading, attachComments } from '../store/data/blog/actions';

export const getPosts = () => {
  return (dispatch, getState) => {
    const { posts } = getState().blog;
    if (posts) {
      return;
    }

    dispatch(setLoading(true));
    customFetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        dispatch(attachPosts(data));
        dispatch(setLoading(false));
      });
  }
}

export const getCommentsForPost = (postId) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true));

    customFetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(data => {
        const comments = {};
        const commentsList = [];

        data.forEach(comment => {
          const { id } = comment;
          comments[id] = comment;
          commentsList.push(id);
        })

        return {
          comments,
          commentsList
        };
      })
      .then(data => {
        dispatch(attachComments(data));
        dispatch(setLoading(false));
      });
  }
}
