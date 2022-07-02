/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { NavBar } from '../../common/NavBar/NavBar';
// import { Footer } from '../Footer/Footer';
import { updateLoginStatus } from '../../../redux/loginRedux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <NavBar />
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth="lg">
      <Toolbar />
      {children}
    </Container>
    {/* <Footer /> */}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  updateLoginStatus: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
});

const ReduxContainer = connect( mapDispatchToProps)(Component);

export {
  // Component as MainLayout,
  ReduxContainer as MainLayout,
  Component as MainLayoutComponent,
};
