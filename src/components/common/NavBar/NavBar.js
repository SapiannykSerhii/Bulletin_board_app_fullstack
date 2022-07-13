import React from 'react';

import styles from './NavBar.module.scss';

import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

class Component extends React.Component {
  state = {
    status: 'login',
    user: true,
  }

  userStatus = () => {
    const { status } = this.state;
    const { user } = this.state;

    if(status === 'login' && user === true){
      this.setState({
        status: 'login',
        user: true,
      });
    } else if (status === 'logout' && user === false){
      this.setState({
        status: 'logout',
        user: false,
      });
    }
  }

  logoutUser = () => {
    this.setState({
      status: 'logout',
      user: false,
    });
  }
  render() {
    const { status } = this.state;

    return(
      <div className={ styles.root}>
        {
          (status === 'login') &&
          <>
            <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`}>Home</Button>
            <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/posts`}>My ADS</Button>
            <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} onClick={() => {this.logoutUser();}}> Log out</Button>
          </>
        }
        {
          (status === 'logout') &&
          <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`}>Login in</Button>
        }
      </div>
    );
  }
}

export {
  Component as NavBar,
  // Container as NavBar,
  Component as NavBarComponent,
};
