import React from 'react';
import Header from '../../components/header/header';
import PageFrame from './../../components/page-frame/page-frame';
import BookForm from './../../components/forms/book-form/book-form';

const AddBooks = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Add Books</h1>
          <BookForm />
        </PageFrame>
      </main>
    </div>
  );
};

export default AddBooks;
