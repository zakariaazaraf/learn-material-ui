import { Grid } from '@mui/material';
import React, {useState, useEffect} from 'react'

const AgenciesList = () => {
    const [agencies, setAgencies] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        fetchStates()
    }, []);

    const fetchStates = async () => {
        try {
            /* Think to add the search, so you don't put something static such as `a` as the agency name*/
            const response = await fetch(`https://bayut.p.rapidapi.com/agencies/list?query=a&hitsPerPage=25`, {
        
                "headers": {
                    "x-rapidapi-host": "bayut.p.rapidapi.com",
                    "x-rapidapi-key": "2f8126bea7mshdf5675490dfb0a3p11b801jsn0452e1e62c57"
                }
            })

            if (response.ok && response.status === 200) {

                const data = await response.json()
                setAgencies(data.hits)
                setIsReady(true)
            } else {
                console.log('loding ...')
            }
        } catch(error) {
            console.log(error)
        }
        
    }


  return <Grid container spacing={2} className='estate-container'>
      {
        isReady 
        ? 
            agencies.map(agency => {
            const {id, location, location_l1, name, name_l1, logo: {url}, phoneNumber: {mobile, phone, whatsapp}} = agency
            return <Grid item key={id} xs={12} md={6} lg={4} className='estate'>
                    <h2>{name}</h2>
                    <h3>{name_l1}</h3>
                    <img className='estate-img' src={url} alt={name_l1}></img>
                    <h4>Location: {location_l1}</h4>
                    <div><span>{mobile && `Mobile: ${mobile}`}</span></div>
                    <div><span>{phone && `Phone: ${phone}`}</span></div>
                    <div><span>{whatsapp && `whatsapp: ${whatsapp}`}</span></div>
                </Grid>
            }) 
        : 
        <h3>Data is loading ...</h3>
      }
  </Grid>
}

export default AgenciesList