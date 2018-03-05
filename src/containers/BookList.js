import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'
import BookListItem from '../components/BookListItem'

class BookList extends Component {
  renderList() {
    // Destructure this.props
    const { books, selectBook } = this.props
    // Every book in the list
    return books.map(book => {
      return (
        <BookListItem
          key={book.title}
          onBookListItemClick={() => selectBook(book)}
          bookTitle={book.title} />
      )
    })
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>
  }
}

const mapStateToProps = state => {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

// A dispatch corresponds to an event
// Anything returned to this function will end up as props on the BookList container
const mapDispatchToProps = dispatch => {
  // Whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators(
    {
      selectBook: selectBook
    },
    dispatch
  )
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
