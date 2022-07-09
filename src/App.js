import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Post } from './components/views/Post/Post';
import { PostEdit } from './components/views/PostEdit/PostEdit';
import { PostAdd } from './components/views/PostAdd/PostAdd';
import { NotFound } from './components/views/NotFound/NotFound';
import { Login } from './components/views/Login/Login';
import { SinglePost } from './components/features/SinglePost/SinglePost';

import { CssBaseline,  ThemeProvider, StyledEngineProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// const muiTheme = responsiveFontSizes(createTheme({main: '#b2a300}));
const theme = createTheme({
  palette: {
    primary: {main: '#b2a300'},
  },
});


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/post/add' component={PostAdd} />
              <Route exact path='/post/:id' component={SinglePost}/>
              <Route exact path='/post/:id' component={Post} />
              <Route exact path='/post/:id/edit' component={PostEdit} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
