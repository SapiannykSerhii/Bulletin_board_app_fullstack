import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './NavBar.module.scss';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { getLoginStatus, getRole, updateUserStatus } from '../../../redux/userRedux';
import { getLoginState, updateLoginStatus } from '../../../redux/loginRedux';

const Component = ({className, loginStatus, updateLoginStatus, updateUserStatus}) => (
  <div className={clsx(className, styles.root)}>
    {loginStatus && <>
      <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/posts`} activeClassName='active'>My ADS</Button>
    </>}
    {loginStatus
      ?
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/`} activeClassName='active' onClick={() => {
        updateLoginStatus('logout');
        updateUserStatus(true);
        // updateUserStatus(false)
      }}
      >Log out</Button>
      : <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login in</Button>}
  </div>


);

Component.propTypes = {
  className: PropTypes.string,
  loginStatus: PropTypes.bool,
  // role: PropTypes.string,
  role: PropTypes.oneOf(['admin', 'user']),
  updateLoginStatus: PropTypes.func,
  updateUserStatus: PropTypes.func,
};

const mapStateToProps = state => ({
  loginStatus: getLoginStatus(state),
  role: getRole(state),
  isAdmin: getLoginState(state),
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
  updateUserStatus: log => dispatch(updateUserStatus(log)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as NavBar,
  Container as NavBar,
  Component as NavBarComponent,
};
