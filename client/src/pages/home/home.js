import React from 'react';
import Header from './../../components/header/header';
import PageFrame from './../../components/page-frame/page-frame';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  root: {
    width: 400,
    margin: 10,
    padding: 10,
  },
  icon: {
    margin: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className='App'>
      <Header />
      <main>
        <PageFrame>
          <h1>Homepage</h1>
          <p>
            This is a full-stack React app with Node/Express backend and MongoDb
            database.
          </p>
          <h2>Instructions</h2>
          <p>
            This app allows you to create a library and then list books against
            them.
          </p>
          <p>
            There are 6 other pages (not counting the 404 page). These will
            allow you to:
          </p>
          <div className={classes.container}>
            <Card className={classes.root} variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Add Library
                </Typography>
                <AddIcon className={classes.icon} />
                <Typography variant='body2' component='p'>
                  here you can add new libraries
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to='/libraries/add'
                  variant='contained'
                  color='secondary'
                  size='small'
                >
                  Add Library
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.root} variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  List Libraries
                </Typography>
                <ListIcon className={classes.icon} />
                <Typography variant='body2' component='p'>
                  here you can update/delete libraries
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to='/libraries'
                  variant='contained'
                  color='secondary'
                  size='small'
                >
                  List Libraries
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.root} variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  Add Book
                </Typography>
                <AddIcon className={classes.icon} />
                <Typography variant='body2' component='p'>
                  here you can add a new book
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to='/books/add'
                  variant='contained'
                  color='secondary'
                  size='small'
                >
                  Add Book
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.root} variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  List Books
                </Typography>
                <ListIcon className={classes.icon} />
                <Typography variant='body2' component='p'>
                  here you can update/delete books
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to='/books'
                  variant='contained'
                  color='secondary'
                  size='small'
                >
                  List Books
                </Button>
              </CardActions>
            </Card>
          </div>
        </PageFrame>
      </main>
    </div>
  );
};

export default Home;
