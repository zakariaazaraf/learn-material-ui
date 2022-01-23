import React from 'react';
import { makeStyles } from '@mui/styles'
import { AppBar, Toolbar, Typography } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  logoSM: {
    display: 'none',
    [theme.breakpoints.down('sm')] : {
      display: 'block'
    }
  },
  logoLG: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return <AppBar>
            <Toolbar>
              <Typography variant='h5' component='a' className={classes.logoLG}>Logo LG</Typography>
              <Typography variant='h6' component='a' className={classes.logoSM}>Logo SM</Typography>
            </Toolbar>
        </AppBar>;
};

export default Navbar
