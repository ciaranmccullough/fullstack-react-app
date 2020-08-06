import React from 'react';
import PageFrame from '../../components/page-frame/page-frame';
import Header from '../../components/header/header';

const UpdateBooks = (props) => {
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Update Books</h1>
          {/* <TodoForm initialValues={todoToBeUpdated} /> */}
        </PageFrame>
      </main>
    </div>
  );
};

export default UpdateBooks;
