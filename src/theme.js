import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'


export const theme = createTheme({
    palette: {
        primary:{
            main: grey[900]
        }
    },
    btn: {
        backgroundColor: '#000000',
        color: '#111111',
        border: '1px solid #111111',
        borderRadius: '5px'
    }
})