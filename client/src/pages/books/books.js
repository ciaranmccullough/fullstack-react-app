import React from 'react';
import Header from './../../components/header/header';
import PageFrame from './../../components/page-frame/page-frame';
// import { BooksContext } from './../../contexts/books.context';

const Books = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Books</h1>
          {/* {loading ? <CircularProgress /> : null}
          {!loading && error ? (<ErrorDisplay error={error} />): null} */}
          {/* The '?' below is an 'optional chaining operator' (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) */}
          {/* {!loading && !error && !todos?.length ? (
            <NoResults dataName="todos" />
          ): null}
          {!loading && !error && todos?.length ? (<TodosList todos={todos} />) : null} */}
        </PageFrame>
      </main>
    </div>
  );
};

export default Books;
