import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles'
import { AppBar, InputBase, Toolbar, Typography, alpha, IconButton } from '@mui/material';
import { Search } from '@material-ui/icons';
import Badge from '@mui/material/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, Link } from '@mui/material';
import { Cancel } from '@mui/icons-material';


const useStyles = makeStyles((theme) => ({

  header:{
    position: 'static',
    // marginBottom: theme.spacing(3)
  },

  toolbar: {
    dispaly: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  logo: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer'
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
      display: "none"
    }
  },

  cancel:{
    [theme.breakpoints.up('sm')]: {
      display: 'none !important'
    }
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles({ open })
  // The fucking useStyle doesn't uses my classes as important, so fuck of now.
  // useEffect(() => {
  //     let searchSmIcon = document.querySelector(`.${classes.searchSmIcon}`);
  //     searchSmIcon.style.display = open ? 'none' : 'inline-block'
  // }, [open])
  
  return <AppBar className={classes.header}>
            <Toolbar className={classes.toolbar}>
              <Link href='/' className={`${classes.logoLG} ${classes.logo}`}>Logo LG</Link>
              <Link href='/' className={`${classes.logoSM} ${classes.logo}`}>Logo SM</Link>
              <div className={classes.search}>
                <Search />
                <InputBase placeholder='Search' className={classes.input} fullWidth/>
                <Cancel className={classes.cancel} onClick={() => setOpen(!open) }/>
              </div>

              <div className={classes.icons}>
                <Search className={classes.searchSmIcon} onClick={()=>{setOpen(!open)}}/> 

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
