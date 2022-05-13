import { Container, Grid } from '@mui/material'
import React from 'react'
import NavBar from '../../NavBar'
import promoTelevisores from "../../Assets/Home/promoTelevisores.jfif"
import PaymentMethods from "./paymentMethods"
import Offers from './Offers'
const Home = () => {
  return (
    <>
    <NavBar/>

    <div className='containerPromo'>
        <img src={promoTelevisores} className="promoTelevisores"></img>
    </div>

    <PaymentMethods/>

    <Offers/>
    </>
  )
}

export default Home