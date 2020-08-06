import React from 'react';
import Header from '../../components/header/header';
import PageFrame from '../../components/page-frame/page-frame';
// import NoResults from './../../components/no-results/no-results';
// import { CircularProgress } from '@material-ui/core';
// import LibrariesList from './../../components/people-list/people-list';
// import { PeopleContext } from './../../contexts/people.context';

const AddLibraries = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Add Libraries</h1>
          {/* {loading ? <CircularProgress /> : null}
          {!loading && error ? <ErrorDisplay error={error} /> : null}
          {!loading && !error && libraries && libraries.length ? (
            <LibrariesList libraries={libraries} />
          ) : null}
          ;
          {!loading && !error && libraries && !libraries.length ? (
            <NoResults dataName='libraries' />
          ) : null} */}
        </PageFrame>
      </main>
    </div>
  );
};

export default AddLibraries;
