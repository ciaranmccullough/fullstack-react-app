import React, { useContext } from 'react';
import { LibrariesContext } from './../../contexts/libraries.context';
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
    minWidth: 330,
  },
}));

const LibraryListItem = () => {
  const classes = useStyles();
  const history = useHistory();
  const { libraries, deleteLibrary } = useContext(LibrariesContext);

  function updateHandler(id) {
    history.push(`/libraries/update/${id}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align='right'>Location</StyledTableCell>
            <StyledTableCell align='right'>Update</StyledTableCell>
            <StyledTableCell align='right'>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {libraries.map((library) => (
            <TableRow key={library.name}>
              <TableCell component='th' scope='row'>
                {library.name}
              </TableCell>
              <TableCell align='right'>{library.location}</TableCell>
              <TableCell
                align='right'
                onClick={() => updateHandler(library._id)}
                aria-label='update library'
              >
                <EditOutlinedIcon />
              </TableCell>
              <TableCell
                align='right'
                onClick={() => deleteLibrary(library._id)}
                aria-label='delete library'
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

export default LibraryListItem;
