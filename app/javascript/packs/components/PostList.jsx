import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postList = this.state.posts.map((post, idx) => {
      return(
        <tr key={idx}>
          <td>{post.title}</td>
          <td>{post.content}</td>
          <td></td>
        </tr>
      )
    })

    return (
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
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    posts: state.app.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
