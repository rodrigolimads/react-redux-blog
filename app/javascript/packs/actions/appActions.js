import * as actionTypes from '../types/actions'
import axios from 'axios'

export function fetchPosts() {
  return dispatch => {
    dispatch({type: actionTypes.FETCH_POSTS_REQUEST,})

    axios
      .get(`api/posts/list`)
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data))
      })
      .catch((error) => {
        console.error(error);
        dispatch(fetchPostsFailure(error))
      })
  }
}

export function fetchPostsSuccess(posts) {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    response: { posts },
  }
}

export function fetchPostsFailure(error) {
  return {
    type: actionTypes.FETCH_POSTS_FAILURE,
    response: { error },
  }
}

export function reorderPosts() {
  return {
    type: actionTypes.REORDER_POSTS,
  }
}
