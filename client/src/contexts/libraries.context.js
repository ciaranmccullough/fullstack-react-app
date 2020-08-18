import React, { createContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
// import cloneDeep from 'lodash.cloneDeep' <-- use if your objects get complex

export const LibrariesContext = createContext({
  getLibraries: () => [],
  addLibrary: () => {},
  updateLibrary: () => {},
  deleteLibrary: () => {},
  loaded: false,
  loading: false,
  error: null,
  libraries: [],
});

export const LibrariesProvider = (props) => {
  const [libraries, setLibraries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  // const [search, setSearch] = useState("");
  const { addToast } = useToasts();

  const getLibraries = async () => {
    // console.log('loading', loading);
    // console.log('error', error);
    if (loading || loaded || error) {
      return;
    } else {
      setLoading(true);
    }
    try {
      const response = await fetch('/api/v1/libraries');
      if (response.status !== 200) {
        throw response;
      }
      const data = await response.json();
      setLibraries(data);
      // setLoading(false);
      // console.log('libraries from context', libraries);
    } catch (err) {
      setError(err.message || err.statusText);
    } finally {
      setLoading(false);
      setLoaded('true');
    }
  };

  const addLibrary = async (formData) => {
    try {
      const response = await fetch('/api/v1/libraries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData),
      });
      if (response.status !== 201) {
        throw response;
      }
      const savedLibrary = await response.json();
      console.log('got data', savedLibrary);
      setLibraries([...libraries, savedLibrary]);
      addToast(`Saved ${savedLibrary.name}`, {
        appearance: 'success',
      });
    } catch (err) {
      console.log(err);
      addToast(`Error ${err.message || err.statusText}`, {
        appearance: 'error',
      });
    }
  };

  const updateLibrary = async (id, updates) => {
    let newLibrary = null;
    try {
      const response = await fetch(`/api/v1/libraries/${id}`, {
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
      const index = libraries.findIndex((library) => library._id === id);

      // Get actual library
      const oldLibrary = libraries[index];

      // Merge with updates
      newLibrary = {
        // legit use of 'var', so can be seen in catch block
        ...oldLibrary,
        ...updates, // order here is important for the override!!
      };
      // recreate the libraries array
      const updatedLibraries = [
        ...libraries.slice(0, index),
        newLibrary,
        ...libraries.slice(index + 1),
      ];
      setLibraries(updatedLibraries);
      addToast(`Updated ${newLibrary.name}`, {
        appearance: 'success',
      });
    } catch (err) {
      console.log(err);
      addToast(`Error: Failed to update ${newLibrary.name}`, {
        appearance: 'error',
      });
    }
  };

  const deleteLibrary = async (id) => {
    let deletedLibrary = null;
    try {
      const response = await fetch(`/api/v1/libraries/${id}`, {
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
      const index = libraries.findIndex((library) => library._id === id);
      deletedLibrary = libraries[index];
      // recreate the libraries array without that library
      const updatedLibraries = [
        ...libraries.slice(0, index),
        ...libraries.slice(index + 1),
      ];
      setLibraries(updatedLibraries);
      addToast(`Deleted ${deletedLibrary.name}`, {
        appearance: 'success',
      });
    } catch (err) {
      console.log(err);
      addToast(`Error: Failed to update ${deletedLibrary.name}`, {
        appearance: 'error',
      });
    }
  };

  return (
    <LibrariesContext.Provider
      value={{
        libraries,
        loading,
        error,
        getLibraries,
        addLibrary,
        updateLibrary,
        deleteLibrary,
      }}
    >
      {props.children}
    </LibrariesContext.Provider>
  );
};
