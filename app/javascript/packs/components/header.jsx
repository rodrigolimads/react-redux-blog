import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: '30px',
  },
};

function Header(props) {
  const { classes, title } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
