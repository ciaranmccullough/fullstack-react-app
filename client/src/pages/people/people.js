import React from 'react';
import Header from './../../components/header/header';
import PageFrame from './../../components/page-frame/page-frame';

const People = (props) => {
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>People</h1>
          {/* {loading ? <CircularProgress /> : null}
          {!loading && error ? <ErrorDisplay error={error} /> : null}
          {!loading && !error && people && people.length ? (
            <PeopleList people={people} />
          ) : null}
          ;
          {!loading && !error && people && !people.length ? (
            <NoResults dataName='people' />
          ) : null} */}
        </PageFrame>
      </main>
    </div>
  );
};

export default People;
