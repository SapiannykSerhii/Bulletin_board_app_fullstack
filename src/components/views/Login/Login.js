import React from 'react';
import PropTypes from 'prop-types';

import styles from './Login.module.scss';
import {Avatar ,Button,Checkbox,FormControlLabel,Grid, Paper, TextField, Typography, Link } from '@mui/material';

const Component = () => (

  <Grid>
    <Paper className={styles.paperStyle} elevation={2}>
      <Grid align='center'>
        <Avatar/>
        <h2>Sing In</h2>
      </Grid>
      <TextField
        type='email'
        placeholder='email@example.com'
        fullWidth
        name="username"
        variant="outlined"
        value=""
        onChange={(event) =>
          this.setState({
            [event.target.name]: event.target.value,
          })
        }
        required
        autoFocus
      />
      <TextField
        type='password'
        placeholder='password'
        fullWidth
        name='password'
        variant='outlined'
        value=""
        onChange={(event) =>
          this.setState({
            [event.target.name]: event.target.value,
          })
        }
        required
      />
      <FormControlLabel
        control={
          <Checkbox/>
        }
        label='Remember me'
      />
      <Button variant="contained" color="success" fullWidth>
        Sing In
      </Button>
      <Typography >
        <Link href="#" underline="none">
              Forgot password?
        </Link>
      </Typography>
      <Button type='submit' variant='contained' color='primary' fullWidth>Login with google</Button>
      <Typography > Do you have an account?
        <Link href="#" underline="none">
              Sign up
        </Link>
      </Typography>
    </Paper>

  </Grid>
);

Component.propTypes = {
  className: PropTypes.string,
};


export {
  Component as Login,
  // Container as Login,
  Component as LoginComponent,
};
