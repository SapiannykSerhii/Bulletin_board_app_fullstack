import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './NavBar.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { NavLink } from 'react-router-dom';
import {Button} from '@material-ui/core';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/posts`} activeClassName='active'>My Ads</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName={styles.link}>Login in</Button>
  </div>


);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NavBar,
  // Container as NavBar,
  Component as NavBarComponent,
};
