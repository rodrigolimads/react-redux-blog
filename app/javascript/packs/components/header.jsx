import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    }
  }

  render() {
    return (
      <div className='header'>
        <h1>
          {this.state.title}
        </h1>
      </div>
    )
  }
}
