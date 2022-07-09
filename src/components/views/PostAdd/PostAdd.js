/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import clsx from 'clsx';
import { Login } from '../Login/Login';
import { connect } from 'react-redux';
// import { getLoginState } from '../../../redux/loginRedux';
import { postToAPI } from '../../../redux/postsRedux';
import { FormControl } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import styles from './PostAdd.module.scss';
import { getLoginStatus } from '../../../redux/userRedux';

class Component extends React.Component {
  state = {
    post: {
      author: '',
      name: '',
      title: '',
      text: '',
      status: '',
      location: '',
      price: '',
      phone: '',
      image: '',
      created: '',
      changed: '',
    },
  };

  handleChange = (event) => {
    const { post } = this.state;

    this.setState({
      post: { ...post, [event.target.name]: event.target.value },
    });
  };

  submitForm = (e) => {
    const { post } = this.state;
    const { addNewPost } = this.props;
    e.preventDefault();

    let error = null;
    const emailPattern = new RegExp(
      '^[a-zA-Z0-9][a-zA-Z0-9_.-]+@[a-zA-Z0-9][a-zA-Z0-9_.-]+.{1,3}[a-zA-Z]{2,4}'
    );

    if (post.title.length < 10) {
      alert('The title is too short');
      error = 'text too short';
    } else if (post.text.length < 20) {
      alert('The content is too short');
      error = 'text too short';
    } else if (!emailPattern.test(post.author)) {
      alert('Your email adress is not valid!');
      error = 'wrong email';
    }
    if (!error) {
      post.created = new Date().toISOString();
      post.changed = post.created;

      addNewPost(post);
      // console.log("add", addNewPost(post));

      alert('Thank you for your add!');
    } else {
      alert('Please correct errors!');
    }
  };

  render() {
    const { className, logindStatus } = this.props;
    const { post } = this.state;
    if (logindStatus) {
      return (
        <div className={clsx(className, styles.root)}>
          <main className={styles.layout}>
            <Paper className={styles.paper}>
              <form onSubmit={this.submitForm}>
                <Typography component="h1" variant="h4" align="center">
                  Add new advertisement
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="author"
                      label="Email address"
                      fullWidth
                      autoComplete="email"
                      onChange={this.handleChange}
                      helperText="Put your vaild email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="name"
                      label="Your name"
                      fullWidth
                      autoComplete="name"
                      onChange={this.handleChange}
                      helperText="Your name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="title"
                      label="Title"
                      fullWidth
                      onChange={this.handleChange}
                      helperText="min. 10 characters"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="text"
                      label="Description"
                      fullWidth
                      onChange={this.handleChange}
                      helperText="min. 20 characters"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="phone"
                      label="Phone"
                      fullWidth
                      onChange={this.handleChange}
                      helperText="Give your contact number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="price"
                      label="Price"
                      fullWidth
                      onChange={this.handleChange}
                      helperText="Price in USD"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="image"
                      label="Image link"
                      fullWidth
                      onChange={this.handleChange}
                      helperText="Add photo link"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="location"
                      label="Location"
                      fullWidth
                      onChange={this.handleChange}
                      helperText="Add your location"
                    />
                  </Grid>
                  <Grid item align="center" xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="status">Set status</InputLabel>
                      <Select
                        labelId="status"
                        id="status"
                        onChange={this.handleChange}
                        fullWidth
                        variant="filled"
                        name="status"
                        value={post.status}
                      >
                        <MenuItem value="draft">Draft</MenuItem>
                        <MenuItem value="published">Published</MenuItem>
                        <MenuItem value="closed">Closed</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <div className={styles.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={styles.button}
                    type="submit"
                  >
                    Add
                  </Button>
                </div>
              </form>
            </Paper>
          </main>
        </div>
      );
    } else if (!logindStatus) {
      return <Login />;
    }
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logindStatus: PropTypes.bool.isRequired,
  addNewPost: PropTypes.func,
};

const mapStateToProps = (state) => ({
  logindStatus: getLoginStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  addNewPost: (post) => dispatch(postToAPI(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
