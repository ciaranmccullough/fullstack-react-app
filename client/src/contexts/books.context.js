import React from 'react';
import { createContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
// import cloneDeep from 'lodash.cloneDeep' <-- use if your objects get complex
// import {PeopleContext} from './people.context';

export const BooksContext = createContext({
  getBooks: () => [],
  addBook: () => [],
  updateBook: () => [],
  deleteBook: () => [],
  books: [],
});

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);
  const { addToast } = useToasts();

  const getBooks = (books) => {
    setBooks(books);
  };

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const updateBook = (id, updates) => {
    let newBook = null;
    // Get index
    const index = books.findIndex((book) => book._id === id);

    // Get actual book
    const oldBook = books[index];
    console.log('here', oldBook);

    // Merge with updates
    newBook = {
      ...oldBook,
      ...updates, // Overrides oldBook
    };

    // Recreate the books array
    const updatedBooks = [
      ...books.slice(0, index),
      newBook,
      ...books.slice(index + 1),
    ];

    setBooks(updatedBooks);
    addToast(`Updated ${newBook.title}`, {
      appearance: 'success',
    });
  };

  const deleteBook = (id) => {
    let deletedBook = null;

    // Get index
    const index = books.findIndex((book) => book.id === id);
    deletedBook = books[index];

    // Recreate the books array without deleted book
    const updatedBooks = [...books.slice(0, index), ...books.slice(index + 1)];

    setBooks(updatedBooks);
    addToast(`Deleted ${deletedBook.title}`, {
      appearance: 'success',
    });
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        getBooks,
        addBook,
        updateBook,
        deleteBook,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
