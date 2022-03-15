import React, {useState, useEffect} from 'react'
import { CircularProgress, Grid, ImageList, ImageListItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    iamgesListContainer: {
        
        [theme.breakpoints.down('lg')] : {
            columnCount: '3 !important',
        },
        [theme.breakpoints.down('md')] : {
            columnCount: '2 !important',
        },
        [theme.breakpoints.down('sm')] : {
            columnCount: '1 !important',
        }
    }
}))

const PropertyDetail = () => {
    const [PropertyDetail, setPropertyDetail] = useState({});
    const [isReady, setIsReady] = useState(false);
    const classes = useStyles()

    const { externalID } = useParams()

    useEffect(() => {
        fetchStates(externalID)
    }, []);

    const fetchStates = async (externalID) => {
        try {
            const response = await fetch(`https://bayut.p.rapidapi.com//properties/detail?externalID=${externalID}`, {
        
                "headers": {
                    "x-rapidapi-host": "bayut.p.rapidapi.com",
                    "x-rapidapi-key": "2f8126bea7mshdf5675490dfb0a3p11b801jsn0452e1e62c57"
                }
            })

            if (response.ok && response.status === 200) {

                const data = await response.json()
                setPropertyDetail(data)
                setIsReady(true)
            } else {
                console.log('loding ...')
            }
        } catch(error) {
            console.log(error)
        }
        
    }

    
    if (isReady) {

        const {agency: {logo: {url: agencyLogo}, name, name_l1}, area, baths, rooms, description, description_l1, photos, category, contactName, coverPhoto: {url: PropertyImage}, phoneNumber: {mobile, phone, whatsapp}, price, title, title_l1} = PropertyDetail

        return <Grid container className='estate-container'>
            {/* <Grid item  xs={12}>
                <img src={agencyLogo} alt={name}/>
            </Grid> */}
            <Grid item  xs={12}>
                <ImageList variant="masonry" cols={4} gap={2} className={classes.iamgesListContainer}>
                    {photos.map(photo => 
                        <ImageListItem key={photo.id}>
                            <img
                                src={`${photo.url}?w=248&fit=crop&auto=format`}
                                srcSet={`${photo.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={photo.title && `Default Alt`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    )}
                </ImageList>
            </Grid>
            <Grid item  xs={12}>
                <h3>{title}</h3>
                <h4>{title_l1}</h4>
                <h4>contactName: {contactName}</h4>
                <div><span>Price: {price}</span></div>
                <div><span>Area: {area}</span></div>
                <div><span>Bathrooms: {baths}</span></div>
                <div><span>{mobile && `Mobile: ${mobile}`}</span></div>
                <div><span>{phone && `Phone: ${phone}`}</span></div>
                <div><span>{whatsapp && `whatsapp: ${whatsapp}`}</span></div>
            </Grid>
        </Grid>
    }

    return <Grid container className={`estate-container`} justifyContent = {'center'} alignItems={`center`} height={`100%`}>
            <CircularProgress size={100}/>
        </Grid>

    
}

export default PropertyDetail