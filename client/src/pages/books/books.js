import React, { useContext, useEffect } from 'react';
import Header from './../../components/header/header';
import PageFrame from './../../components/page-frame/page-frame';
import NoResults from './../../components/no-results/no-results';
import ErrorDisplay from './../../components/error-display/error-display';
import { CircularProgress } from '@material-ui/core';
import BooksList from './../../components/books-list/books-list';
import { BooksContext } from './../../contexts/books.context';

const Books = () => {
  const { books, loaded, getBooks, loading, error } = useContext(BooksContext);

  useEffect(() => {
    console.log('in useEffect', books, loaded);
    if (!loaded) {
      getBooks();
    }
  }, [loaded, getBooks, books]);
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Books</h1>
          {loading ? <CircularProgress /> : null}
          {!loading && error ? <ErrorDisplay error={error} /> : null}
          {!loading && !error && !books?.length ? (
            <NoResults dataName='books' />
          ) : null}
          {!loading && !error && books?.length ? (
            <BooksList books={books} />
          ) : null}
        </PageFrame>
      </main>
    </div>
  );
};

export default Books;
