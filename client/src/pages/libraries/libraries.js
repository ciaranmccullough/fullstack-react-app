import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/header';
import PageFrame from '../../components/page-frame/page-frame';
import { CircularProgress } from '@material-ui/core';
import LibrariesList from '../../components/libraries-list/libraries-list';
import ErrorDisplay from '../../components/error-display/error-display';
import NoResults from '../../components/no-results/no-results';
import { LibrariesContext } from './../../contexts/libraries.context';
// import { useToasts } from "react-toast-notifications";
// import useFetch from "react-fetch-hook";

const Libraries = (props) => {
  const { libraries, loaded, getLibraries, loading, error } = useContext(
    LibrariesContext
  );
  console.log('libraries', libraries);
  useEffect(() => {
    console.log('in useEffect', libraries, loaded);
    if (!loaded) {
      getLibraries();
    }
  }, [loaded, getLibraries, libraries]);
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Libaries</h1>
          {loading ? <CircularProgress /> : null}
          {!loading && error ? <ErrorDisplay error={error} /> : null}
          {!loading && !error && libraries && libraries.length ? (
            <LibrariesList libraries={libraries} />
          ) : null}
          ;
          {!loading && !error && libraries && !libraries.length ? (
            <NoResults dataName='libraries' />
          ) : null}
        </PageFrame>
      </main>
    </div>
  );
};

export default Libraries;
