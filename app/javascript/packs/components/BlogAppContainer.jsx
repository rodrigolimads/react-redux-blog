import React, { Component } from 'react'
import Header from './header'
import PostList from './PostList'

import axios from 'axios'
import { connect } from 'react-redux'
import { fetchPosts, reorderPosts } from '../actions/appActions'

class BlogAppContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.response
    return (
      <div>
        <Header title="Rails + React + Redux = AWESOME!!" />
        <PostList
          posts={posts}
          reorderPosts={this.props.reorderPosts}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
    },
    reorderPosts: () => {
      dispatch(reorderPosts())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogAppContainer)
