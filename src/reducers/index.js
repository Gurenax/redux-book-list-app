import { combineReducers } from 'redux'
import BooksReducer from './BooksReducer'

const RootReducer = combineReducers({
  books: BooksReducer
})

export default RootReducer
