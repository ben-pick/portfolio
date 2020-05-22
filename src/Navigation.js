import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuText: {
    flexGrow: 1,
  },
  linkText: {
      textDecoration:'none',
        color: "inherit"
  }

}));

function Navigation() {
  const classes = useStyles();
  return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.menuText}>
                pick.dev
            </Typography>
            <Grid container justify="flex-end" spacing = {6} >
                <Grid item >
                    <Link to="/portfolio" className = {classes.linkText} >
                        <Button color="inherit" >About me</Button>
                    </Link>
                </Grid>
                <Grid item >
                    <Link to="/portfolio/projects" className = {classes.linkText} >
                        <Button color="inherit" >Projects</Button>
                    </Link>
                </Grid>

                <Grid item >
                    <Link to="/portfolio/resume" className = {classes.linkText} >
                        <Button color="inherit">Resume</Button>
                    </Link>
                </Grid>
                <Grid item >
                    <Link to="/portfolio/contact" className = {classes.linkText} >
                        <Button color="inherit">Contact</Button>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
        </AppBar>
  );
}

export default Navigation;
