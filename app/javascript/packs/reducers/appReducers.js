import {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
  reorderPosts,
} from '../actions/appActions'

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  REORDER_POSTS
} from '../types/actions'

const initialState = {
  posts: {
    fetchingPosts: false,
    response: []
  }
}

function posts(state, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, fetchingPosts: true }
    case FETCH_POSTS_SUCCESS:
      return { ...state, fetchingPosts: false, response: action.response.posts }
    case FETCH_POSTS_FAILURE:
      return { ...state, fetchingPosts: false, response: action.response.error }
    case REORDER_POSTS:
      return {...state, response: state.response.slice().reverse()}
    default:
      return state
  }
}

export default function reducers(state = initialState, action) {
  return {
    posts: posts(state.posts, action),
  }
}
