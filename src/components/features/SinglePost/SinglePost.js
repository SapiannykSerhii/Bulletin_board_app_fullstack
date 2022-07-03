import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import { getPostById } from '../../../redux/postsRedux';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { getLoginStatus } from '../../../redux/userRedux';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    width: '60%',
    marginTop: '3rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[700],
  },
}));

const Component = ({ data, loginStatus }) => {
  console.log(data);
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              {data.author[0]}
            </Avatar>
          }
          action={
            <>
              {(!loginStatus) && <Link to={`${process.env.PUBLIC_URL}/post/${data.id}/edit`} key={data.id}>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Link>}
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            </>
          }
          title={data.title}
          subheader={data.publishedDate}
        />
        <CardMedia
          className={classes.media}
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
            <FavoriteIcon />
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
