import React, { useContext } from 'react';
import BookListItem from './../book-list-item/book-list-item';

const BooksList = () => {
  return (
    <div className='booksListDisplay'>
      <BookListItem />
    </div>
  );
};

export default BooksList;
