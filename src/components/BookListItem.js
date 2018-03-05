import React from 'react'

const BookListItem = ({
  onBookListItemClick,
  bookTitle
}) => (
  <li
    onClick={onBookListItemClick}
    className="list-group-item"
  >
    {bookTitle}
  </li>
)

export default BookListItem