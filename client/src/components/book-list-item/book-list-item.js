import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { BooksContext } from './../../contexts/books.context';
// import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

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
  //localhost:3000/local_library/libraries
  function updateHandler(id) {
    history.push(`local_library/books/update/${id}`);
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
          {/* person list component here */}
          {title}
          {author}
          {summary}
          {genre}
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
