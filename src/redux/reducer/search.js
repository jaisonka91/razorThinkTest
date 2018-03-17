import { SEARCH_DATA } from '../actions';

const initialState = {
  gitData: [],
}

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        gitData: action.result
      }
  }
  return state;
}
