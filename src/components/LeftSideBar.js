import React from 'react';
import { makeStyles } from '@mui/styles'
import { Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { 
  Inbox, Email, Drafts,
   ConfirmationNumber, ContactMail,
    ShoppingCart, Settings,
    Menu, Markunread
} from '@material-ui/icons';




const useStyles = makeStyles((theme) => ({
  list: {
    // backgroundColor: 'blue',
    // color: '#FFF'
  },

  text:{
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    }
  }
}))

function LeftSideBar() {
    const classes = useStyles()

  return <>
  <List className={classes.list}>
      
      <Link href='/propertiesList' underline='none'>
        <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary='Properties list' className={classes.text}/>
        </ListItem>
      </Link>

      <Link href='/agencies' underline='none'>
        <ListItem button>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary='Agencies list' className={classes.text}/>
        </ListItem>
      </Link>

      <Link href='/autocomplete' underline='none'>
        <ListItem button>
          <ListItemIcon>
            <ConfirmationNumber />
          </ListItemIcon>
          <ListItemText primary='Auto complete' className={classes.text}/>
        </ListItem>
      </Link>

      {/* <ListItem button>
        <ListItemIcon>
          <ContactMail />
        </ListItemIcon>
        <ListItemText primary='This the text' className={classes.text}/>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        <ListItemText primary='This the text' className={classes.text}/>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary='This the text' className={classes.text}/>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Menu />
        </ListItemIcon>
        <ListItemText primary='This the text' className={classes.text}/>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Markunread />
        </ListItemIcon>
        <ListItemText primary='This the text' className={classes.text}/>
      </ListItem> */}
  </List>
  </>;
}

export default LeftSideBar;
