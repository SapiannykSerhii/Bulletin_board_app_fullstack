import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux.js';
import { Typography } from '@mui/material';
import styles from './Head.module.scss';
import { Button, Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Component = ({className, children, isLogged}) => (
  <div className={clsx(className, styles.root)}>
    <Container maxWidth='sm'>
      <Typography align='center' variant='h4' color="textPrimary" gutterBottom>Bulleten Board</Typography>
      <div>
        <Grid container spacing={2} justifyContent='center' color='primary'>
          <Grid>
            {isLogged && <Button component={NavLink} to={`${process.env.PUBLIC_URL}/post/add`} className={styles.headButton}>Add new Ad</Button>}
          </Grid>
        </Grid>
      </div>
    </Container>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.array,
};

const mapStateToProps = state => ({
  isLogged: getLoginState(state),
});

const ReduxContainer = connect(mapStateToProps)(Component);

export {
  // Component as Head,
  ReduxContainer as Head,
  Component as HeadComponent,
};
