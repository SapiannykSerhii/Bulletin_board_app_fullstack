import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Grid } from '@mui/material';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

import { Post } from '../../views/Post/Post';

import styles from './AllPosts.module.scss';


const Component = props => {

  return (
    <div className={clsx(styles.root)}>
      <Grid container spacing={2}>
        {props.posts.map(post => (
          <Grid
            key={post.id}
            className={styles.item}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Post data={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as AllPosts,
  Component as AllPostsComponent,
};
