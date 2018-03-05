import React from 'react'

const BookListItem = ({
  key,
  onBookListItemClick,
  bookTitle
}) => (
  <li
    key={bookTitle}
    onClick={onBookListItemClick}
    className="list-group-item"
  >
    {bookTitle}
  </li>
)

export default BookListItem