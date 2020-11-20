import React, { useContext } from 'react';
import { BooksContext } from './../../contexts/books.context';
import { useHistory } from 'react-router-dom';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1b9aaa',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  alignRight: {
    textAlign: 'right',
  },
}));

const BookListItem = () => {
  const classes = useStyles();
  const history = useHistory();
  const { books, deleteBook } = useContext(BooksContext);

  function updateHandler(id) {
    history.push(`/books/update/${id}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align='right'>Author</StyledTableCell>
            <StyledTableCell align='center'>Summary</StyledTableCell>
            <StyledTableCell align='right'>Genre</StyledTableCell>
            <StyledTableCell align='right'>Owner</StyledTableCell>
            <StyledTableCell align='right'>Update</StyledTableCell>
            <StyledTableCell align='right'>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.title}>
              <TableCell component='th' scope='row'>
                {book.title}
              </TableCell>
              <TableCell align='right'>{book.author}</TableCell>
              <TableCell align='left'>{book.summary}</TableCell>
              <TableCell align='right'>{book.genre}</TableCell>
              <TableCell align='right'>{book.owner.name}</TableCell>
              <TableCell
                align='right'
                onClick={() => updateHandler(book._id)}
                aria-label='update book'
                className={classes.alignRight}
              >
                <EditOutlinedIcon />
              </TableCell>
              <TableCell
                onClick={() => deleteBook(book._id)}
                aria-label='delete book'
                className={classes.alignRight}
              >
                <DeleteOutlineIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookListItem;
