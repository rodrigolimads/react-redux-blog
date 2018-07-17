import { combineReducers } from 'redux'

import {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure
} from '../actions/appActions'

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../types/actions'

const initialState = [];

export default function posts(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, fetchingPosts: true }
    case FETCH_POSTS_SUCCESS:
      return { ...state, fetchingPosts: false, response: action.response.data }
    case FETCH_POSTS_FAILURE:
      return { ...state, fetchingPosts: false, response: action.response.error }
    default:
      return state
  }
}
