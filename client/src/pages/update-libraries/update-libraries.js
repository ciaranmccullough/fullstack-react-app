import React, { useContext, useEffect } from 'react';
import PageFrame from '../../components/page-frame/page-frame';
import Header from '../../components/header/header';
import LibraryForm from '../../components/forms/library-form/library-form';
import { useParams } from 'react-router-dom';
import { LibrariesContext } from './../../contexts/libraries.context';

function UpdateLibraries() {
  let { id } = useParams();
  const { libraries, loaded, getLibraries } = useContext(LibrariesContext);
  console.log('libraries', libraries);
  useEffect(() => {
    console.log('in useEffect', libraries, loaded);
    if (!loaded) {
      getLibraries();
    }
  }, [loaded, getLibraries, libraries]);

  console.log('libraries', libraries);
  const libraryToBeUpdated = libraries.find((library) => library._id === id);
  console.log('libraryToBeUpdated', libraryToBeUpdated);
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Update Libraries</h1>
          <LibraryForm initialValues={libraryToBeUpdated} />
        </PageFrame>
      </main>
    </div>
  );
}

export default UpdateLibraries;
