import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    cursor: "Pointer"
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const {btn_text, btn_onClick} = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography onClick={()=>{window.location.href = "/"}} variant="h6" className={classes.title}>
            Foodery
          </Typography>
          <Button color="inherit" onClick={btn_onClick}>{btn_text}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}