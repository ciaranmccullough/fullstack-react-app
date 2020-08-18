import React, { createContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
// import cloneDeep from 'lodash.cloneDeep' <-- use if your objects get complex
// import {LibrariesContext} from './libraries.context';

export const BooksContext = createContext({
  getBooks: () => [],
  addBook: () => {},
  updateBook: () => {},
  deleteBook: () => {},
  loaded: false,
  loading: false,
  error: null,
  books: [],
});

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  // const [search, setSearch] = useState("");
  const { addToast } = useToasts();
  // const { libraries } = useContext(LibrariesContext);

  const getBooks = async () => {
    // console.log('loading', loading);
    // console.log('error', error);
    if (loading || loaded || error) {
      return;
    } else {
      setLoading(true);
    }
    try {
      const response = await fetch('/api/v1/books');
      if (response.status !== 200) {
        throw response;
      }
      const data = await response.json();
      setBooks(data);
      // setLoading(false);
      // console.log('books from context', books);
    } catch (err) {
      setError(err.message || err.statusText);
    } finally {
      setLoading(false);
      setLoaded('true');
    }
  };

  const addBook = async (formData) => {
    try {
      const response = await fetch('/api/v1/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData),
      });
      // if (response.status !== 201) {
      //   throw response;
      // }
      const savedBook = await response.json();
      console.log('got data', savedBook);
      setBooks([...books, savedBook]);
      addToast(`Saved ${savedBook.title}`, {
        appearance: 'success',
      });
    } catch (err) {
      console.log(err);
      addToast(`Error ${err.message || err.statusText}`, {
        appearance: 'error',
      });
    }
  };

  const updateBook = async (id, updates) => {
    console.log('here', id, updates);
    let newBook = null;
    try {
      const response = await fetch(`/api/v1/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(updates),
      });
      if (response.status !== 200) {
        throw response;
      }
      // Get index
      const index = books.findIndex((book) => book._id === id);

      // Get actual book
      const oldBook = books[index];
      console.log('here', oldBook);
      // Merge with updates
      newBook = {
        ...oldBook,
        ...updates, // order here is important for the override!!
      };

      // this is a bit sketchy, but shouldn't go out of line
      // if (typeof newBook.owner === 'string') {
      //   newBook.owner = fullOwner;
      // }

      console.log('here', newBook);
      // recreate the books array
      const updatedBooks = [
        ...books.slice(0, index),
        newBook,
        ...books.slice(index + 1),
      ];

      setBooks(updatedBooks);
      addToast(`Updated ${newBook.title}`, {
        appearance: 'success',
      });
    } catch (err) {
      console.log(err);
      addToast(`Error: Failed to update ${newBook.title}`, {
        appearance: 'error',
      });
    }
  };

  const deleteBook = async (id) => {
    let deletedBook = null;
    try {
      const response = await fetch(`/api/v1/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (response.status !== 204) {
        throw response;
      }
      // Get index
      const index = books.findIndex((book) => book._id === id);
      deletedBook = books[index];
      // recreate the books array without that book
      const updatedBooks = [
        ...books.slice(0, index),
        ...books.slice(index + 1),
      ];
      await setBooks(updatedBooks);
      addToast(`Deleted ${deletedBook.title}`, {
        appearance: 'success',
      });
    } catch (err) {
      console.log(err);
      addToast(`Error: Failed to update ${deletedBook.title}`, {
        appearance: 'error',
      });
    }
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        loaded,
        loading,
        error,
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
