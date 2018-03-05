import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    // Get the book object from props
    const { book } = this.props

    // Return early if a books is yet to be selected
    if (!book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {book.title}</div>
        <div>Pages: {book.pages}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // Whatever is returned will show up as props inside of BookDetail
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
