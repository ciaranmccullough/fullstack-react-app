import React, { useContext, useEffect } from 'react';
import PageFrame from '../../components/page-frame/page-frame';
import Header from '../../components/header/header';
import BookForm from '../../components/forms/book-form/book-form';
import { useParams } from 'react-router-dom';
import { BooksContext } from './../../contexts/books.context';

const UpdateBooks = () => {
  let { id } = useParams();
  const { books, loaded, getBooks } = useContext(BooksContext);
  console.log('books', books);
  useEffect(() => {
    console.log('in useEffect', books, loaded);
    if (!loaded) {
      getBooks();
    }
  }, [loaded, getBooks, books]);

  console.log('books', books);
  const bookToBeUpdated = books.find((book) => book._id === id);
  console.log('bookToBeUpdated', bookToBeUpdated);
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Update Books</h1>
          <BookForm initialValues={bookToBeUpdated} />
        </PageFrame>
      </main>
    </div>
  );
};

export default UpdateBooks;
