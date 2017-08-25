import {customFetch} from './fetch'

export const getPosts = () => {
  return customFetch('https://jsonplaceholder.typicode.com/posts');
}