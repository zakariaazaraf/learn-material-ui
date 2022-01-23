import React from 'react';
import { makeStyles } from '@mui/styles'
import { AppBar, InputBase, Toolbar, Typography, alpha, IconButton } from '@mui/material';
import { Search } from '@material-ui/icons';
import Badge from '@mui/material/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    dispaly: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
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
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '40%'
  },
  input: {
    color: '#FFF',
    marginLeft: theme.spacing(1.5)
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return <AppBar>
            <Toolbar className={classes.toolbar}>
              <Typography variant='h5' component='a' className={classes.logoLG}>Logo LG</Typography>
              <Typography variant='h6' component='a' className={classes.logoSM}>Logo SM</Typography>
              <div className={classes.search}>
                <Search />
                <InputBase placeholder='Search' className={classes.input}/>
              </div>
              <div className={classes.icons}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={5} color="error">
                    <MailIcon />
                  </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </div>
            </Toolbar>
        </AppBar>;
};

export default Navbar
