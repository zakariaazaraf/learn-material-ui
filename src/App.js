import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import  SendIcon  from '@mui/icons-material/Send'
import { theme } from './theme';

// The theme is imported in the index page and rappered inside 
const useStyles = makeStyles((theme)=> ({
  button: {
    ...theme.btn
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <Button variant="outlined" startIcon={<SendIcon />}>Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#contained-buttons" endIcon={<SendIcon />}>
        Link
      </Button>

      <Button variant="outlined" href="#contained-buttons" className={classes.button}>
        Link
      </Button>
    </div>
  );
}

export default App;
