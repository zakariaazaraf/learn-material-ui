import React, { useState } from 'react';
import { makeStyles } from '@mui/styles'
import { AppBar, InputBase, Toolbar, Typography, alpha, IconButton } from '@mui/material';
import { Search } from '@material-ui/icons';
import Badge from '@mui/material/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@mui/material';


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
    flexGrow: '0.4',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },

  input: {
    color: '#FFF',
    marginLeft: theme.spacing(1.5)
  },

  icons: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'none' : 'flex'),
    },
  },

  avatar: {
    [theme.breakpoints.up('sm')]: {
      width: '32px',
      height: '32px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '28px',
      height: '28px',
    },
  },

  searchSmIcon: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles({ open })
  
  return <AppBar>
            <Toolbar className={classes.toolbar}>
              <Typography variant='h5' component='a' className={classes.logoLG}>Logo LG</Typography>
              <Typography variant='h6' component='a' className={classes.logoSM}>Logo SM</Typography>
              <div className={classes.search}>
                <Search />
                <InputBase placeholder='Search' className={classes.input} fullWidth/>
              </div>
              <Search className={classes.searchSmIcon} onClick={()=>{setOpen(!open)}}/>

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

                {/* <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton> */}
                <IconButton>
                  <Avatar alt="Remy Sharp" src="/images/avatarProfile.jpg" className={classes.avatar}/>
                </IconButton>
              </div>
            </Toolbar>
        </AppBar>;
};

export default Navbar
