import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import  SendIcon  from '@mui/icons-material/Send'

// The theme is imported in the index page and rappered inside 
const useStyles = makeStyles((theme)=> ({
  button: {
    ...theme.btn
  }
}))


const App = () => {
  const classes = useStyles()
  console.log(classes)
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <Button className={classes.button} variant="outlined" startIcon={<SendIcon />}>Contained</Button>
      <Button className={classes.button} variant="contained" disabled>
        Disabled
      </Button>
      <Button className={classes.button} variant="outlined" href="#contained-buttons" endIcon={<SendIcon />}>
        Link
      </Button>

      <Button className={classes.button} variant="contained">
        Link
      </Button>
    </div>
  );
}

export default App;



