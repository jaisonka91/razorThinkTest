import { SEARCH_DATA, SEARCH_REPO } from '../actions';

const initialState = {
  gitData: [],
  repoData: {}
}

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        gitData: action.result,
        repoData: {}
      }
    case SEARCH_REPO:
      return {
        ...state,
        repoData: {
          ...state.repoData,
          [action.payload.fullName]: action.payload.repos
        }
      }
  }
  return state;
}
