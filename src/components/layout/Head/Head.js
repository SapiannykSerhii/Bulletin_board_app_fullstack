import React from 'react';

import {useSelector } from 'react-redux';

import { Typography } from '@mui/material';
import styles from './Head.module.scss';
import { Button, Grid, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getLoginStatus } from '../../../redux/userRedux.js';
import { lightBlue } from '@mui/material/colors';

const Head = () => {

  const loginStatus = useSelector(state => getLoginStatus(state));

  return (
    <div className={styles.root}>
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
};

export default Head;
