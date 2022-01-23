import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'


const theme = createTheme({
    palette: {
        primary:{
            main: grey[900]
        }
    },
    btn: {
        backgroundColor: '#FFFFFF',
        color: '#111111',
        margin: '3px 5px',
        border: '1px solid #111111',
        borderRadius: '5px'
    }
})

export default theme