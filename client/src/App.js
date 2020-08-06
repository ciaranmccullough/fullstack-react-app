import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { LibrariesProvider } from './contexts/libraries.context';
import { BooksProvider } from './contexts/books.context';
import { MenuProvider } from './contexts/menu.context';

import Home from './pages/home/home';
import Libraries from './pages/libraries/libraries';
import Books from './pages/books/books';
import NotFound from './pages/404/404';
import AddLibraries from './pages/add-libraries/add-libraries';
import UpdateLibraries from './pages/update-libraries/update-libraries';
import AddBooks from './pages/add-books/add-books';
import UpdateBooks from './pages/update-books/update-books';

function App() {
  return (
    <ToastProvider autoDismiss={true}>
      <LibrariesProvider>
        <BooksProvider>
          <MenuProvider>
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/libraries' component={Libraries} />
                <Route exact path={`/libraries/add`} component={AddLibraries} />
                <Route
                  exact
                  path={`/libraries/update/:id`}
                  component={UpdateLibraries}
                />
                <Route exact path='/books' component={Books} />
                <Route exact path={'/books/add'} component={AddBooks} />
                <Route
                  exact
                  path={`/books/update/:id`}
                  component={UpdateBooks}
                />
                <Route path='*' component={NotFound} />
              </Switch>
            </Router>
          </MenuProvider>
        </BooksProvider>
      </LibrariesProvider>
    </ToastProvider>
  );
}

export default App;
