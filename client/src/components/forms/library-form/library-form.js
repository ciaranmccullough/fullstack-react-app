import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { LibrariesContext } from '../../../contexts/libraries.context';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formRow: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex',
    justifyContent: 'center',
  },
}));

const schema = yup.object().shape({
  name: yup.string().required().min(2).max(20),
  location: yup.string().required().min(2).max(20),
});

const LibraryForm = ({ initialValues }) => {
  const classes = useStyles();
  let { id } = useParams();
  const { populated, setPopulated } = useState(false);

  const { addLibrary, updateLibrary } = useContext(LibrariesContext);
  const { handleSubmit, errors, control, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  if (initialValues && !populated) {
    reset(initialValues);
    setPopulated(true);
  }

  const onSubmit = async (formValues) => {
    console.log('formValues', formValues);

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
      updateLibrary(id, updates);
    } else {
      addLibrary(formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formRow}>
        <Controller
          as={TextField}
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
          id='name'
          name='name'
          label='Name'
          control={control}
          rules={{ required: true }}
        />
      </div>
      <div className={classes.formRow}>
        <Controller
          as={TextField}
          error={!!errors.location}
          helperText={errors.location && errors.location.message}
          type='location'
          id='location'
          name='location'
          label='Location'
          control={control}
          rules={{ required: true }}
        />
      </div>
      <div className={classes.formRow}>
        <Button
          onClick={() =>
            reset({
              name: '',
              location: '',
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
          {populated ? 'Update' : 'Add'} Library
        </Button>
      </div>
    </form>
  );
};

export default LibraryForm;
