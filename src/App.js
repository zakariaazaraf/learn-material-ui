import { makeStyles } from '@mui/styles'
import Navbar from './components/Navbar'
import { Grid } from '@mui/material';
import LeftSideBar from './components/LeftSideBar'
import Feeds from './components/Feeds'
import RightSideBar from './components/RightSideBar'


// The theme is imported in the index page and rappered inside 
const useStyles = makeStyles((theme)=> ({
  button: {
    ...theme.btn
  },

  container: {
    // margin: 0
  },

  feed: {
    // padding: theme.spacing(2)
  },

  LeftSideBar:{
      // paddingTop: '0px !important'
  }
}))


const App = () => {
  const classes = useStyles()
  return (
    <div className="App">
        <Navbar />
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={2} md={2} className={classes.LeftSideBar}>
            <LeftSideBar />
          </Grid>

          <Grid item xs={10} md={7} className={classes.feed}>
            <Feeds />
          </Grid>

          <Grid item xs={0} md={3}>
            <RightSideBar />
          </Grid>

        </Grid>

    </div>
  );
}

export default App;



