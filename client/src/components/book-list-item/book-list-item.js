import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { BooksContext } from './../../contexts/books.context';
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

const BookListItem = ({
  item: {
    _id,
    title,
    author,
    summary,
    genre,
    // owner: { name, location },
  },
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { deleteBook } = useContext(BooksContext);

  function updateHandler(id) {
    history.push(`/books/update/${id}`);
  }

  return (
    <li className={classes.item}>
      <div className={classes.display}>
        <p>{title}</p>
      </div>
      <div className={classes.display}>
        <p>{author}</p>
      </div>
      <div className={classes.display}>
        <p>{summary}</p>
      </div>
      <div className={classes.display}>
        <p>{genre}</p>
      </div>
      <div className={classes.display}>
        <p>
          {/* Could use a library list item component here... */}
          {/* <p>
            {name},{location}
          </p> */}
        </p>
      </div>
      <div className={classes.controls}>
        <Button onClick={() => updateHandler(_id)} aria-label='update book'>
          <EditOutlinedIcon />
        </Button>
        <Button onClick={() => deleteBook(_id)} aria-label='delete book'>
          <DeleteOutlineIcon />
        </Button>
      </div>
    </li>
  );
};

export default BookListItem;
