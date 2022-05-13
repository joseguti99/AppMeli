import React, { useEffect, useState } from 'react'
import { Container, Divider, Grid} from '@mui/material'
import {Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Offers = () => {
    const [offers, setOffers] =  useState("")

    const search = "celulares"

    const fetchOffers = () => {
        const urlOffers = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=${5}`;
        fetch(urlOffers)
            .then((res) => res.json())
            .then((data) => setOffers(data.results))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
            fetchOffers()
    }, [])

    console.log(offers)

    const numberFormat = new Intl.NumberFormat('es-ES')

    return (
        <>
        <Container maxWidth>
            <Grid container direction="row" justifyContent="center">
                <Grid className="fontOffers" xs={8}>
                    <h3 className="fontOffers">Ofertas</h3>
                </Grid>
            </Grid>
                <Grid container direction="row" justifyContent="center" marginBottom={12}>
                    {offers.length ? offers.map((data, index) => 
                    <Link to={`/${data.id}`} className="decoration-none">
                        <Card className="card">
                            <CardActionArea>
                                <div className="containerImgItem">
                                    <img width="224" height="224" src={`https://http2.mlstatic.com/D_NQ_NP_${data.thumbnail_id}-O.webp`} alt={data.title} className="imgItem"/>
                                </div>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    $ {numberFormat.format(data.price)}
                                </Typography>
                                <Typography variant="body2" style={{"color": "LimeGreen"}} marginBottom={0.7}>
                                    <p>Envio Gratis</p>
                                </Typography>
                                <Typography variant="body3" color="text.secondary">
                                    <p>{data.title}</p>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                    
                    ): "" }
                </Grid>
                
        </Container>
        </>
    )
}

export default Offers
