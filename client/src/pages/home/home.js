import React from 'react';
import Header from './../../components/header/header';
import PageFrame from './../../components/page-frame/page-frame';

const Home = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Homepage</h1>
          {/* <ul
            className='typographic'
            style={{
              fontWeight: 'bold',
              maxWidth: '40%',
              textAlign: 'left',
              margin: 'auto',
            }}
          >
            <li>
              List people{' '}
              <span
                style={{
                  // display: "block",
                  fontWeight: 'normal',
                }}
              >
                (including the ability to delete and navigate to update pages)
              </span>
            </li>
            <li>Add people</li>
            <li
              style={{
                marginBottom: '15px',
              }}
            >
              Update people
            </li>
            <li>
              List tasks{' '}
              <span
                style={{
                  // display: "block",
                  fontWeight: 'normal',
                }}
              >
                (including the ability to delete and navigate to update pages)
              </span>
            </li>
            <li>Add tasks</li>
            <li>Update tasks</li>
          </ul> */}
        </PageFrame>
      </main>
    </div>
  );
};

export default Home;
