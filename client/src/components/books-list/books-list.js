import React, { useContext } from 'react';
import { BooksContext } from './../../contexts/books.context';
import List from './../list/list';
import BookListItem from './../book-list-item/book-list-item';

const BooksList = () => {
  const { books } = useContext(BooksContext);
  return (
    <div className='booksListDisplay'>
      <List data={books} ItemComponent={BookListItem} />
    </div>
  );
};

export default BooksList;