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
  const { addToast } = useToasts();

  const getBooks = async () => {
    if (loading || loaded || error) {
      return;
    } else {
      setLoading(true);
    }
    try {
      const response = await fetch('http://localhost:3000/local_library/books');
      if (response.status !== 200) {
        throw response;
      }
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.mesage || err.statusTest);
    } finally {
      setLoading(false);
      setLoaded('true');
    }
  };

  const addBook = async (formData) => {
    try {
      const response = await fetch(
        'http://localhost:3000/local_library/books',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.status !== 201) {
        throw response;
      }
      const savedBook = await response.json();
      console.log('got data', savedBook);
      setBooks([...books, savedBook]);
      addToast(`Saved ${savedBook.name}`, {
        appearance: 'success',
      });
    } catch (err) {
      console.log(err);
      addToast(`Error ${err.message || err.statusText}`, {
        appearance: 'error',
      });
    }
  };

  const updateBook = async (id, updates, fullOwner) => {
    console.log('here', id, updates);
    let newBook = null;
    try {
      const response = await fetch(
        `http://localhost:3000/local_library/books/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(updates),
        }
      );
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
      if (typeof newBook.owner === 'string') {
        newBook.owner = fullOwner;
      }

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
    let deletedBooks = null;
    try {
      const response = await fetch(
        `http://localhost:3000/local_library/books/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      if (response.status !== 204) {
        throw response;
      }
      // Get index
      const index = books.findIndex((book) => book._id === id);
      deletedBooks = books[index];
      // recreate the books array without that book
      const updatedBookss = [
        ...books.slice(0, index),
        ...books.slice(index + 1),
      ];
      await setBooks(updatedBookss);
      addToast(`Deleted ${deletedBooks.title}`, {
        appearance: 'success',
      });
    } catch (err) {
      console.log(err);
      addToast(`Error: Failed to update ${deletedBooks.title}`, {
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
