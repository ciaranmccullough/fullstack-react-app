import React, { useContext } from 'react';
import { LibrariesContext } from '../../contexts/libraries.context';
import List from '../list/list';
import LibrariesListItem from '../library-list-item/library-list-item';

const LibrariesList = () => {
  const { libraries } = useContext(LibrariesContext);
  return (
    <div className='librariesListDisplay'>
      <List data={libraries} ItemComponent={LibrariesListItem} />
    </div>
  );
};

export default LibrariesList;
