import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavBar } from '../../common/NavBar/NavBar';

import styles from './Header.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <NavBar />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
