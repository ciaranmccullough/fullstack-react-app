import React, { useContext } from 'react';
import LibrariesListItem from '../library-list-item/library-list-item';

const LibrariesList = () => {
  return (
    <div className='librariesListDisplay'>
      <LibrariesListItem />
    </div>
  );
};

export default LibrariesList;
