import { Container, Grid } from '@mui/material'
import React from 'react'
import NavBar from '../../NavBar'
import promoTelevisores from "../../Assets/Home/promoTelevisores.jfif"

const Home = () => {
  return (
    <>
    <NavBar/>

    <div className='containerPromo'>
        <img src={promoTelevisores} className="promoTelevisores"></img>
    </div>
    
    </>
  )
}

export default Home