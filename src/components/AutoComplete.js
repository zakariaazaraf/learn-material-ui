import React, { useState } from 'react'
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import { Search } from '@material-ui/icons';


const AutoComplete = () => {
    const [states, setStates] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [search, setSearch] = useState(false);

    const fetchStates = async (searchQuery) => {
        try {
            const response = await fetch(`https://bayut.p.rapidapi.com/auto-complete?query=${searchQuery}&hitsPerPage=25`, {
        
                "headers": {
                    "x-rapidapi-host": "bayut.p.rapidapi.com",
                    "x-rapidapi-key": "2f8126bea7mshdf5675490dfb0a3p11b801jsn0452e1e62c57"
                }
            })

            if (response.ok && response.status === 200) {

                const data = await response.json()
                setStates(data.hits)
                setIsReady(true)
            } else {
                console.log('loding ...')
            }
        } catch(error) {
            console.log(error)
        }
        
    }

    const handleSerachClick = (e) => {
        let searchQuery = e.target.form.fullwidth.value
        if (!searchQuery) {
            alert(`You've sent an empty value`)
        } else {
            setSearch(true)
            fetchStates(searchQuery)
        }
    }

    if (search && isReady) {
        return <>
            <form>
                <Grid container spacing={2} marginTop={2}>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth label="fullWidth" id="fullWidth" name='fullwidth'size="small"/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button variant="outlined" startIcon={<Search />} onClick={(e) => handleSerachClick(e)}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Grid container >
                {
                    states.map(state => {
                        const {id, name, name_l1, externalID} = state
                        return <Grid item key={id} className='estate' xs={12} md={2}>
                                <h4>{name}</h4>
                                <h5>{name_l1}</h5>
                        </Grid>
                    }) 
                }
            </Grid>
        </>
    }

    if (search) {
        return <>
            <form>
                <Grid container spacing={2} marginTop={2}>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth label="fullWidth" id="fullWidth" name='fullwidth'size="small"/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button variant="outlined" startIcon={<Search />} onClick={(e) => handleSerachClick(e)}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Grid container justifyContent = {'center'} alignItems={`center`} marginTop={25}>
                <CircularProgress />
            </Grid>
        </> 
    }

    return <form>
                <Grid container spacing={2} marginTop={2}>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth label="fullWidth" id="fullWidth" name='fullwidth'size="small"/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button variant="outlined" startIcon={<Search />} onClick={(e) => handleSerachClick(e)}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
}

export default AutoComplete