import {SEARCH} from '../../actionTypes';

export const search = (searchVal) => {
  return {
    type: SEARCH,
    payload: searchVal
  }
}