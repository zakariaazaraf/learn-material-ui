import React from 'react';
import { makeStyles } from '@mui/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
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
  }
}))

function LeftSideBar() {
    const classes = useStyles()

  return <>
  <List className={classes.list}>
      <ListItem button>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary='This the text' />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Email />
        </ListItemIcon>
        <ListItemText primary='This the text' />
      </ListItem>


      <ListItem button>
        <ListItemIcon>
          <Drafts />
        </ListItemIcon>
        <ListItemText primary='This the text' />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ConfirmationNumber />
        </ListItemIcon>
        <ListItemText primary='This the text' />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ContactMail />
        </ListItemIcon>
        <ListItemText primary='This the text' />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        <ListItemText primary='This the text' />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary='This the text' />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Menu />
        </ListItemIcon>
        <ListItemText primary='This the text' />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Markunread />
        </ListItemIcon>
        <ListItemText primary='This the text' />
      </ListItem>
  </List>
  </>;
}

export default LeftSideBar;
