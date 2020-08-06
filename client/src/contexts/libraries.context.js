import React, { createContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
// import cloneDeep from 'lodash.cloneDeep' <-- use if your objects get complex

export const LibrariesContext = createContext({
  getLibraries: () => [],
  addLibrary: () => {},
  updateLibrary: () => {},
  deleteLibrary: () => {},
  libraries: [],
});

export const LibrariesProvider = (props) => {
  const [libraries, setLibraries] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [loaded, setLoaded] = useState(false);
  // const [error, setError] = useState(null);
  // const [search, setSearch] = useState("");
  const { addToast } = useToasts();

  const getLibraries = (libraries) => {
    setLibraries(libraries);
  };

  const addLibrary = (library) => {
    setLibraries([...libraries, library]);
  };

  const updateLibrary = (id, updates) => {
    let newLibrary = null;

    // Get index
    const index = libraries.findIndex((library) => library._id === id);

    // Get actual person
    const oldLibrary = libraries[index];

    // Merge with updates
    newLibrary = {
      // legit use of 'var', so can be seen in catch block
      ...oldLibrary,
      ...updates, // order here is important for the override!!
    };
    // recreate the libs array
    const updatedLibrary = [
      ...libraries.slice(0, index),
      newLibrary,
      ...libraries.slice(index + 1),
    ];
    setLibraries(updatedLibrary);
    addToast(`Updated ${newLibrary.name}`, {
      appearance: 'success',
    });
  };

  const deleteLibrary = (id) => {
    let deletedLibrary = null;

    // Get index
    const index = libraries.findIndex((library) => libraries._id === id);
    deletedLibrary = libraries[index];
    // recreate the people array without that library
    const updatedLibrary = [
      ...libraries.slice(0, index),
      ...libraries.slice(index + 1),
    ];
    setLibraries(updatedLibrary);
    addToast(`Deleted ${deletedLibrary.name}`, {
      appearance: 'success',
    });
  };

  return (
    <LibrariesContext.Provider
      value={{
        libraries,
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
