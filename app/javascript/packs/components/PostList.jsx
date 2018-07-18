import React, { Component } from 'react'

class PostList extends Component {
  render() {
    const postList = this.props.posts.map((post, idx) => {
      return(
        <tr key={idx}>
          <td>{post.title}</td>
          <td>{post.content}</td>
          <td></td>
        </tr>
      )
    })

    return (
      <div>
        <div className='post-container'>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th></th>
              </tr>
              { postList }
            </thead>
          </table>
        </div>

        <div>
          <button onClick={() => this.props.reorderPosts()}>
            Reoder Posts
          </button>
        </div>
      </div>
    )
  }
}

export default PostList
