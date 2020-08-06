import React from 'react';
import Header from '../../components/header/header';
import PageFrame from '../../components/page-frame/page-frame';

const Libraries = (props) => {
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Libaries</h1>
          {/* {loading ? <CircularProgress /> : null}
          {!loading && error ? <ErrorDisplay error={error} /> : null}
          {!loading && !error && libraries && libraries.length ? (
            <LibariesList libraries={libraries} />
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

export default Libraries;
