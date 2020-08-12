import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';

import { BooksContext } from './../../../contexts/books.context';
import { LibrariesContext } from './../../../contexts/libraries.context';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formRow: {
    // padding: theme.spacing(1),
    margin: `0 auto ${theme.spacing(1)}px`,
    maxWidth: '50%',
  },
  errorMessage: {
    color: 'red',
  },
}));

const BookForm = ({ initialValues }) => {
  const classes = useStyles();
  let { id } = useParams();
  const [populated, setPopulated] = useState(false);
  const { addBook, updateBook } = useContext(BooksContext);

  const { libraries, loaded: librariesLoaded, getLibraries } = useContext(
    LibrariesContext
  );

  useEffect(() => {
    console.log('in useEffect', libraries, librariesLoaded);
    if (!librariesLoaded) {
      getLibraries();
    }
  }, [librariesLoaded, getLibraries, libraries]);

  const ids = libraries.map((library) => library._id);
  const schema = yup.object().shape({
    title: yup.string().required().min(2).max(30),
    author: yup.string().required().min(2).max(30),
    summary: yup.string().required().min(2).max(200),
    genre: yup.string().required().min(2).max(30),
    owner: yup.mixed().oneOf(ids),
  });

  const { handleSubmit, errors, control, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  if (initialValues && !populated) {
    const formValues = { ...initialValues, owner: initialValues.owner._id };
    console.log('formValues', formValues);
    reset(formValues);
    setPopulated(true);
  }

  // console.log("errors", errors);
  const onSubmit = async (formValues) => {
    console.log('formValues', formValues);
    // formValues._id = id; // pulled from the URL using router 'useParams' hook

    if (populated) {
      const updates = {};
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          if (initialValues[key] !== formValues[key] && key[0] !== '_') {
            updates[key] = formValues[key];
          }
        }
      }

      console.log('updates', updates);
      const args = [id, updates];

      if ('owner' in updates) {
        console.log('adding back owner');
        const fullOwner = libraries.find(
          (library) => library._id === updates.owner
        );
        args.push(fullOwner);
      }

      updateBook(...args);
    } else {
      addBook(formValues);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formRow}>
        <Controller
          as={<TextField helperText={errors.title && errors.title.message} />}
          error={!!errors.title}
          id='title'
          name='title'
          label='Title'
          fullWidth
          control={control}
          rules={{ required: true }}
        />
      </div>
      <div className={classes.formRow}>
        <Controller
          as={<TextField helperText={errors.author && errors.author.message} />}
          error={!!errors.author}
          id='author'
          name='author'
          label='Author'
          fullWidth
          control={control}
          rules={{ required: true }}
        />
      </div>
      <div className={classes.formRow}>
        <Controller
          as={
            <TextField helperText={errors.summary && errors.summary.message} />
          }
          error={!!errors.summary}
          helperText={errors.summary && errors.summary.message}
          id='summary'
          name='summary'
          label='Summary'
          multiline
          fullWidth
          control={control}
          rules={{ required: true }}
        />
      </div>
      <div className={classes.formRow}>
        <Controller
          as={<TextField helperText={errors.genre && errors.genre.message} />}
          error={!!errors.genre}
          helperText={errors.genre && errors.genre.message}
          id='genre'
          name='genre'
          label='Genre'
          multiline
          fullWidth
          control={control}
          rules={{ required: true }}
        />
      </div>
      <div className={classes.formRow}>
        <InputLabel id='owner'>Owner</InputLabel>
        <Controller
          as={
            <Select>
              {libraries.map((book, i) => (
                <MenuItem key={i} value={book._id}>
                  {book.lastName} {book.firstName}
                </MenuItem>
              ))}
            </Select>
          }
          error={!!errors.owner}
          id='owner'
          name='owner'
          label='Owner'
          fullWidth
          control={control}
          rules={{ required: true }}
        />
        <InputLabel id='owner' className={classes.errorMessage}>
          {errors.owner && errors.owner.message}
        </InputLabel>
      </div>
      <div className={classes.formRow}>
        <Button
          onClick={() =>
            reset({
              title: '',
              author: '',
              summary: '',
              genre: '',
              owner: '',
            })
          }
        >
          Reset
        </Button>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.button}
          disabled={!formState.isValid}
        >
          {populated ? 'Update' : 'Add'} Book
        </Button>
      </div>
    </form>
  );
};

export default BookForm;
