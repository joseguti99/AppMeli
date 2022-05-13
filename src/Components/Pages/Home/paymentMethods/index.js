import React from 'react'
import { Container, Grid, Box } from '@mui/material';
import creditCard from './credit-card.svg';
import debitCard from './debit-card.svg'
import mercadoCredits from './mercado-creditsv2.svg'
import paymentAgreement from './payment-agreement.svg'
import viewMore from './view-more.svg'

const paymentMethods = () => {
  return (
      <Container maxWidth>
        <Container style={{ backgroundColor: "white"}} xs={{ boxShadow: 1 }}>
          <Grid container direction="row" marginTop={4} alignItems="center" justifyContent="center">
              <Grid item
                    container="row"
                    height={90}
                    xs={2.75}>

                      <Grid xs={3} marginTop={2}>
                        <img src={creditCard} className="iconPayment"></img>
                      </Grid>

                      <Grid xs={7} marginTop={2}>
                        <p className="titleCard">Tarjeta de crédito</p>
                        <p className="subTitleCard">Ver promociones bancarias</p>
                      </Grid>
              </Grid>
              <Grid 
                    item
                    container="row"
                    height={90}
                    xs={2.75}>
                      <Grid xs={3} marginTop={2}>
                        <img src={debitCard} className="iconPayment"></img>
                      </Grid>

                      <Grid xs={7}  marginTop={2}>
                      <p className="titleCard">Tarjeta de débito</p>
                      <p className="subTitleCard">Ver más</p>
                      </Grid>
              </Grid>
              <Grid 
                    item
                    container="row"
                    height={90}
                    xs={2.75}>
                      <Grid xs={3} marginTop={2}>
                        <img src={mercadoCredits} className="iconPayment"></img>
                      </Grid>

                      <Grid xs={7} marginTop={2}>
                      <p className="titleCard">Cuotas sin tarjeta</p>
                      <p className="subTitleCard">Conocé Mercado Crédito</p>
                      </Grid>
              </Grid>
              <Grid 
                    item
                    container="row"
                    height={90}
                    xs={2.75}>
                      <Grid xs={3} marginTop={2}>
                        <img src={paymentAgreement} className="iconPayment"></img>
                      </Grid>
                      <Grid xs={7} marginTop={2}>
                        <p className="titleCard">Efectivo</p>
                        <p className="subTitleCard">Ver más</p>
                      </Grid>
              </Grid>
              <Grid 
                    item
                    container="row"
                    height={90}
                    style={{"borderLeft":"1px solid #D3D3D3"}}
                    xs={1}>
                      <Grid xs={12} className="text-center" marginTop={2} marginLeft={2}>
                        <img src={viewMore} className="iconPayment"></img>
                      </Grid>
              </Grid>    
          </Grid>
        </Container>
      </Container>
  )
}

export default paymentMethods;
