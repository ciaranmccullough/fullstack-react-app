import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { LibrariesContext } from './../../contexts/libraries.context';
// import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  item: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  display: {
    marginInlineEnd: '50px',
  },
}));

const LibrariesListItem = ({ item: { _id, name, location } }) => {
  const classes = useStyles();
  const history = useHistory();
  const { deleteLibrary } = useContext(LibrariesContext);

  function updateHandler(id) {
    history.push(`local_library/libraries/update/${id}`);
  }

  return (
    <li className={classes.item}>
      <div className={classes.display}>
        {`${name} `}
        {location}
      </div>
      <div className={classes.controls}>
        <Button onClick={() => updateHandler(_id)} aria-label='update book'>
          <EditOutlinedIcon />
        </Button>
        <Button onClick={() => deleteLibrary(_id)} aria-label='delete book'>
          <DeleteOutlineIcon />
        </Button>
      </div>
    </li>
  );
};

export default LibrariesListItem;
