import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import  SendIcon  from '@mui/icons-material/Send'
import Navbar from './components/Navbar'

// The theme is imported in the index page and rappered inside 
const useStyles = makeStyles((theme)=> ({
  button: {
    ...theme.btn
  }
}))


const App = () => {
  const classes = useStyles()
  return (
    <div className="App">
        <Navbar />
    </div>
  );
}

export default App;



