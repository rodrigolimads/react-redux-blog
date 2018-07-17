import * as actionTypes from '../types/actions'

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
    type: FETCH_POSTS_SUCCESS,
    response: { posts },
  }
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    response: { error },
  }
}
