import React from 'react'
import BlogAppContainer from './BlogAppContainer'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger } from 'redux-logger'

import reducers from '../reducers/appReducers'

const enhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
  applyMiddleware(thunkMiddleware, logger)
)

const store = createStore(reducers, enhancer)

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
