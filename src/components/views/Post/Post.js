import React from 'react';
import PropTypes from 'prop-types';


import { Card } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import { Collapse }from '@mui/material';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import {Typography} from '@mui/material';
import { red } from '@mui/material/colors';
import { Favorite }from '@mui/icons-material';
import { Share } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const Component = ({ data }) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={styles.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' sx={{ bgcolor: red[700] }}>
            {data.author[0]}
          </Avatar>
        }
        action={
          <FormControlLabel
            className={styles.accordion}
            control={<Switch expanded={expanded} onChange={handleExpandClick} />}
            label="Show"
          />
        }
        title={data.title}
        subheader={data.publishedDate}
      />
      <CardMedia
        className={styles.media}
        image={`${process.env.PUBLIC_URL}/images/${data.photo}`}
        title='Title'
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
          <Share />
        </IconButton>
      </CardActions>
      <Button
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/post/${data.id}`} key={data.id} underline='none'
        color='info' variant='contained' size='small'>
          Read More
      </Button>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Advertisement:</Typography>
          <Typography paragraph>{data.content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
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
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
