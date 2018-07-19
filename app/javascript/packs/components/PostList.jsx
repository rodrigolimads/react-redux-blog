import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ReorderIcon from '@material-ui/icons/Reorder';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    marginTop: theme.spacing.unit,
    float: 'right'
  },
  iconSmall: {
    fontSize: 20,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function PostList(props) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }).format(date)
  }

  const { classes, posts } = props;

  const postList = posts.map((post, idx) => {
    return(
      <TableRow key={idx}>
        <TableCell>{post.title}</TableCell>
        <TableCell>{formatDate(post.created_at)}</TableCell>
        <TableCell></TableCell>
      </TableRow>
    )
  })

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Created at</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { postList }
          </TableBody>
        </Table>
      </Paper>

      <Button
        size="small"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => props.reorderPosts()}
      >
        Reorder
        <ReorderIcon className={classes.rightIcon} />
      </Button>
    </div>
  );
}

PostList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostList);
