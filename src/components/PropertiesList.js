import React, {useState, useEffect} from 'react'
import { Grid } from '@mui/material';


const PropertiesList = () => {
    const [states, setStates] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        fetchStates()
    }, []);

    const fetchStates = async () => {
        try {
            const response = await fetch(`https://bayut.p.rapidapi.com//properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12`, {
        
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


  return <Grid container className='estate-container'>
      {
        isReady 
        ? 
            states.map(state => {
            const {id, agency, area, baths, category, contactName, coverPhoto: {url}, phoneNumber: {mobile, phone, whatsapp}, price, title, title_l1, externalID} = state
            return <Grid item key={id} className='estate' xs={12} md={6} lg={4}>
                <h3>{title}</h3>
                <h4>{title_l1}</h4>
                <img className='estate-img' src={url} alt={title_l1}></img>
                <h4>contactName: {contactName}</h4>
                <div><span>Price: {price}</span></div>
                <div><span>Area: {area}</span></div>
                <div><span>Bathrooms: {baths}</span></div>
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

export default PropertiesList