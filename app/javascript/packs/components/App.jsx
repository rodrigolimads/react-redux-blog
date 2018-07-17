import React from 'react'
import BlogAppContainer from './BlogAppContainer'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import reducers from '../reducers'
const store = createStore(reducers)

class App extends React.Component {
  render() {
    return(
      <div>
        <Provider store={store}>
          <BlogAppContainer />
        </Provider>
      </div>
    )
  }
}

export default App;
