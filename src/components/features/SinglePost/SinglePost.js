import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card } from '@mui/material';
import { Container } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent }from '@mui/material';
import { CardActions } from '@mui/material';

import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Typography }from '@mui/material';
import  { red }  from '@mui/material/colors';
import { Favorite } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import { MoreVertRounded } from '@mui/icons-material';
import { getPostById } from '../../../redux/postsRedux';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { getLoginStatus } from '../../../redux/userRedux';
import styles from './SinglePost.module.scss';

const Component = ({ data, loginStatus }) => {
  console.log(data);

  return (
    <Container className={styles.container}>
      <Card className={styles.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' sx={{ bgcolor: red[700] }}>
              {data.author[0]}
            </Avatar>
          }
          action={
            <>
              {(loginStatus) && <Link to={`${process.env.PUBLIC_URL}/post/${data.id}/edit`} key={data.id}>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Link>}
              <IconButton aria-label='settings'>
                <MoreVertRounded
                  fontSize='inherit'
                  style={{ fontSize: '30px' }}/>
              </IconButton>
            </>
          }
          title={data.title}
          subheader={data.publishedDate}
        />
        <CardMedia
          className={styles.media}
          image={`${process.env.PUBLIC_URL}/images/${data.photo}`}
          title='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.summary}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Favorite />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </CardActions>

        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{data.content}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

Component.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    summary: PropTypes.string.isRequired,
    publishedDate: PropTypes.string,
    updatedDate: PropTypes.string,
    email: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['published', 'draft', 'closed']),
    photo: PropTypes.string,
    price: PropTypes.number,
    phone: PropTypes.string,
    location: PropTypes.string,
  }),
  loginStatus: PropTypes.bool,
};


const mapStateToProps = (state, ownProps) => ({
  data: getPostById(state,  ownProps.match.params.id),
  loginStatus: getLoginStatus(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const SingleContainer = connect(mapStateToProps, )(Component);

export {
  // Component as SinglePost,
  SingleContainer as SinglePost,
  Component as SinglePostComponent,
};
