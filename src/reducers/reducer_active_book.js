// State argument is not application state, only the state
// this reducer is responsible for
const ActiveBook = (state = null, action) => {
  // state cannot be undefined, so default it to null
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
    default:
      return state
  }
  // return state
}

export default ActiveBook
