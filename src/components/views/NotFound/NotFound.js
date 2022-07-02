import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';


import styles from './NotFound.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h2>404 Not Found</h2>
    <div className={styles.Btn}>
      <a href={`${process.env.PUBLIC_URL}/`}> Back to Home</a>
    </div>
  </div>
);

Component.propTypes = {

  className: PropTypes.string,
};


export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
