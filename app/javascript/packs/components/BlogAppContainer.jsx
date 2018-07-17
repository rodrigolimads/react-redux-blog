import React, { Component } from 'react'
import Header from './header'
import PostList from './PostList'

export default class BlogAppContainer extends Component {
  render() {
    return (
      <div>
        <Header title="Rails + React + Redux = AWESOME!!" />
        <PostList />
      </div>
    )
  }
}
