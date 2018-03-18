import { SEARCH_DATA_LOADING, SEARCH_DATA_DONE, SEARCH_REPO_DONE, SEARCH_REPO_LOADING } from '../actions';

const initialState = {
  gitData: [],
  repoData: {}
}

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_LOADING:
      return {
        ...state,
        gitData: action.result,
        loading: true,
      }
    case SEARCH_DATA_DONE:
      return {
        ...state,
        gitData: action.result,
        loading: false,
        repoData: {}
      }
    case SEARCH_REPO_LOADING:
      return {
        ...state,
        repoData: {
          ...state.repoData,
          [action.payload.fullName]: action.payload.repos,
        },
        loading: {
          ...state.loading,
          [action.payload.fullName]: true
        }
      }
    case SEARCH_REPO_DONE:
      return {
        ...state,
        repoData: {
          ...state.repoData,
          [action.payload.fullName]: action.payload.repos,
        },
        loading: {
          ...state.loading,
          [action.payload.fullName]: false
        },
      }
  }
  return state;
}
