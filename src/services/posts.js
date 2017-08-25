import {customFetch} from './fetch'
import {attachPosts, setLoading} from '../store/data/blog/actions';

export const getPosts = () => {
  return (dispatch, getState) => {
    const {posts} = getState().blog;
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