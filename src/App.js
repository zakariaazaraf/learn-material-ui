import { makeStyles } from '@mui/styles'
import Navbar from './components/Navbar'
import { Grid } from '@mui/material';
import LeftSideBar from './components/LeftSideBar'
import Feeds from './components/Feeds'
import RightSideBar from './components/RightSideBar'
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import PropertiesList from './components/PropertiesList';
import AgenciesList from './components/AgenciesList';
import PropertyDetail from './components/PropertyDetail';
import AutoComplete from './components/AutoComplete';




// The theme is imported in the index page and rappered inside 
const useStyles = makeStyles((theme)=> ({
  button: {
    ...theme.btn
  },

  container: {
    // margin: 0
  },

  feed: {
  },

  LeftSideBar:{
      // paddingTop: '0px !important'
  },

  RightSideBar:{
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    }
  }
}))


const App = () => {
  const classes = useStyles()
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={2} md={2} className={classes.LeftSideBar}>
            <LeftSideBar />
          </Grid>
          <Grid item xs={10} md={10} className={classes.feed}>
            {/* <Feeds /> */}
            <Routes>
            <Route exact path='/' element={<PropertiesList />} />
            <Route exact path='/propertiesList' element={<PropertiesList />} />
            <Route exact path='/propertiesDetails/:externalID' element={<PropertyDetail />}/>
            <Route exact path='/agencies' element={<AgenciesList />}/>
            <Route exact path='/autocomplete' element={<AutoComplete />}/>
          </Routes>
          </Grid>

          {/* <Grid item md={3} className={classes.RightSideBar}>
            <RightSideBar />
          </Grid> */}

        </Grid>
      </Router>

    </div>
  );
}

export default App;



