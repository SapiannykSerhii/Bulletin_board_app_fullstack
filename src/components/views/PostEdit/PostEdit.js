import React from 'react';
import PropTypes from 'prop-types';

// import clsx from 'clsx';
import { connect } from 'react-redux';
import { editPost, getPostById } from '../../../redux/postsRedux.js';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper, Select,
  TextField,
  Typography } from '@mui/material';
import { getLoginStatus } from '../../../redux/userRedux';
import { getLoginState } from '../../../redux/loginRedux';
import styles from './PostEdit.module.scss';
import { Login } from '../Login/Login';

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
      id: '',
    },
  };

  componentWillMount() {
    const { postToEdit } = this.props;
    const { post } = this.state;
    this.setState({
      post: {
        ...post,
        id: postToEdit.id,
        author: postToEdit.author,
        created: postToEdit.created,
        updated: postToEdit.updated,
        status: postToEdit.status,
        title: postToEdit.title,
        text: postToEdit.text,
        photo: postToEdit.photo,
        price: postToEdit.price,
        phone: postToEdit.phone,
        location: postToEdit.location,
      },
    });
  }

  handleChange = ({target}) => {
    const { post } = this.state;
    const { name, value } = target;
    console.log([name], value);
    this.setState({
      post: { ...post, [name]: value },
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { post } = this.state;
    const { addPost } = this.props;

    let error = null;
    // const emailPattern = /\S+@\S+\.\S+/;

    if (post.title.length < 5) {
      alert('The title is too short');
      error = 'text too short';
    } else if (post.text.length < 20) {
      alert('The content is too short');
      error = 'text too short';
    }
    // else if (!emailPattern.test(post.author)) {
    //   alert('Your email adress is not valid!');
    //   error = 'wrong email';
    // }
    if (!error ) {
      post.created = new Date().toISOString();
      post.updated = post.created;
      post.id = Math.random().toString(36).substr(2, 5);

      addPost ({
        ...post,
        created: new Date().toISOString(),
      });

      this.setState({
        post: { ...post},
      });

      alert('Thank you for your add!');
    } else {
      alert('Please correct errors before submitting your add!');
    }
  };

  render () {
    const { submitForm } = this;
    const { user , loginStatus, isAdmin } = this.props;
    const { post } = this.state;
    return(

      <div className={styles.root}>
        {isAdmin || (loginStatus && user === post.author) ? (
          <Grid className={styles.layout} align='center' justify='center'>
            <Paper className={styles.paper}>
              <form onSubmit={submitForm}>
                <Typography variant='h6'>
                  Fill the fields to update an announcement
                </Typography>
                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    name="title"
                    value={post.title}
                    placeholder="Title"
                    variant="filled"
                    onChange={this.handleChange}
                    helperText="min. 5 characters"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    name= "text"
                    value={post.text}
                    variant="filled"
                    placeholder="Give the full description"
                    onChange={this.handleChange}
                    helperText="Edit descriptions min. 20 characters"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    name="email"
                    value={post.email}
                    variant="filled"
                    placeholder="Email address"
                    autoComplete="email"
                    onChange={this.handleChange}
                    helperText="email"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    name="location"
                    variant="filled"
                    value={post.location}
                    placeholder="You location"
                    onChange={this.handleChange}
                    helperText="Edit location"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    name="price"
                    value={post.price}
                    variant="filled"
                    placeholder="Price"
                    onChange={this.handleChange}
                    helperText="Edit price"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    name="phone"
                    value={post.phone}
                    variant="filled"
                    placeholder="Phone number"
                    onChange={this.handleChange}
                    helperText="Edit phone"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={9}>
                  <FormControl fullWidth>
                    <InputLabel id="status">Status of your add</InputLabel>
                    <Select
                      labelId="status"
                      id="status"
                      onChange={this.handleChange}
                      fullWidth
                      variant="filled"
                      name="status"
                      value={post.status}>

                      <MenuItem value="draft">Draft</MenuItem>
                      <MenuItem value="published">Published</MenuItem>
                      <MenuItem value="closed">Closed</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={9}>
                  <Button variant="contained" type="submit" className={styles.buttons}> Edit post</Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        ) : (
          // <NotFound />
          <Login/>
        )};
      </div>
    );
  }
}

// const Component = ({className, children}) => (
//   <div className={clsx(className, styles.root)}>
//     <h2>PostEdit</h2>
//     {children}
//   </div>
// );

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  updatePost: PropTypes.func,
  postToEdit: PropTypes.object,
  user: PropTypes.object,
  addPost: PropTypes.func,
  loginStatus: PropTypes.bool,
  isAdmin: PropTypes.bool,
};


const mapStateToProps = (state, props)  => ({
  postToEdit: getPostById(state, props.match.params.id),
  loginStatus: getLoginStatus(state),
  isAdmin: getLoginState(state, props),
});

const mapDispatchToProps = dispatch => ({
  updatePost: (post) => dispatch(editPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
