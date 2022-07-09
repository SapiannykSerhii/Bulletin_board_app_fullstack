import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { getLoginState } from '../../../redux/loginRedux.js';
import { Typography } from '@mui/material';
import styles from './Head.module.scss';
import { Button, Grid, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getLoginStatus } from '../../../redux/userRedux.js';
import { lightBlue } from '@mui/material/colors';

const Component = ({ className, loginStatus }) => (
  <div className={clsx(className, styles.root)}>
    <Container maxWidth="sm">
      <Typography align="center" variant="h4" color="textPrimary" gutterBottom>
        Bulleten Board
      </Typography>
      <div>
        <Grid container spacing={2} justifyContent="center" color="primary">
          <Grid>
            {loginStatus && (
              <Button
                variant='contained'
                sx={{ bgcolor: lightBlue[700] }}
                component={NavLink}
                to={`${process.env.PUBLIC_URL}/post/add`}
                className={styles.headButton}
              >
                Add new Ad
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
    </Container>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  loginStatus: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loginStatus: getLoginStatus(state),
});

const ReduxContainer = connect(mapStateToProps)(Component);

export {
  // Component as Head,
  ReduxContainer as Head,
  Component as HeadComponent,
};
