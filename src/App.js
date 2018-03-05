import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import logo from './logo.svg';
import './App.css'
import BookList from './containers/BookList'

/*
* Create a Redux Store for the RootReducer (needed by Provider)
*/
import RootReducer from './reducers/index'
const store = createStore(RootReducer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={ store }>
          <BookList />
        </Provider>
      </div>
    )
  }
}

export default App
