import { CardMedia, Card, Container, Grid } from '@mui/material'
import { border, borderRadius, height, width } from '@mui/system'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import NavBar from '../NavBar/index.js'

const Detail = () => {
    const [item, setItem] =  useState("")
    const [review, setReview] =  useState("")
    const {id} = useParams()
    
    const fetchDatail = () => {
        const urlDetail = `https://api.mercadolibre.com/items/${id}`;
        fetch(urlDetail)
            .then((res) => res.json())
            .then((data) => setItem(data))
            .catch((err) => console.log(err))

        const urlReview = `https://api.mercadolibre.com/reviews/item/${id}`;
        fetch(urlReview)
            .then((res) => res.json())
            .then((data) => setReview(data))
            .catch((err) => console.log(err))
    }

    useEffect(()=>{
        fetchDatail()
    },[])

    console.log(item)

  return (
    <>
            <NavBar/>

            <Container maxWidth>
                <Container style={{ backgroundColor: "white"}} xs={{ boxShadow: 1 }}>
                    <Grid container direction="row" marginTop={4} alignItems="center" justifyContent="center">
                        <Card sx={{boxShadow: "none"}}>
                            <p className="text-center">{item.title}</p>
                            <CardMedia 
                                component="img"
                                alt={item.title}
                                image={`https://http2.mlstatic.com/D_NQ_NP_${item.thumbnail_id}-O.webp`}
                            ></CardMedia>
                            <p className="text-center">{item.currency_id}: {item.price}</p>
                            <p className="text-center">{item.warranty}</p>
                        </Card>
                    </Grid>
                </Container>
            </Container>
                    
    </>
  )
}

export default Detail
