import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './NavBar.module.scss';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { NavLink } from 'react-router-dom';
import {Button} from '@material-ui/core';
import { getLoginStatus, getRole } from '../../../redux/userRedux';

const Component = ({className, loginStatus}) => (
  <div className={clsx(className, styles.root)}>
    {loginStatus && <>
      <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
      <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/posts`} activeClassName='active'>My ADS</Button>
    </>}
    {!loginStatus && <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login in</Button>}
    {/* {loginStatus && <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName={styles.link}>Login in</Button>} */}
  </div>


);

Component.propTypes = {
  className: PropTypes.string,
  loginStatus: PropTypes.bool,
  // role: PropTypes.string,
  role: PropTypes.oneOf(['admin', 'user']),
};

const mapStateToProps = state => ({
  loginStatus: getLoginStatus(state),
  role: getRole(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as NavBar,
  Container as NavBar,
  Component as NavBarComponent,
};
