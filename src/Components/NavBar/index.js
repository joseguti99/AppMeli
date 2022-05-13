import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, ImageListItem, TextField, IconButton } from "@mui/material";
import LogoMeli from "../Assets/NavBar/Logo.png";
import { IoLocationOutline } from "react-icons/io5";
import Envios from "../Assets/NavBar/enviosGratis.jfif";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <Container maxWidth style={{ backgroundColor: "#FFF159" }}>
        <Container>
          <Grid container direction="row">
            <Grid
              item
              xs={1}
              md={3}
              lg={3}
              xl={1}
              height={35}
              marginBottom={1}
              marginTop={1.3}
            >
              <Grid item>
                <img src={LogoMeli} className="logoMeli"></img>
              </Grid>
            </Grid>
            <Grid item xs={11} md={6} lg={6} xl={7} marginTop={0.5}>
              <Grid container="row" xs={10.7} className="formSearch">
                <Grid xs={11}>
                  <input
                    type="text"
                    className="inputSearch"
                    placeholder="Buscar productos, marcas y mas..."
                  />
                </Grid>
                <Grid xs={1}>
                  <button className="btnSearch">
                    <AiOutlineSearch className="iconSearch" />
                  </button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={11} md={3} lg={3} xl={4}>
              <img src={Envios} className="imgEnvios" />
            </Grid>
          </Grid>
          <Grid container direction="row" alignContent="end">
            <Grid item xs={10} md={3} lg={3} xl={2.8}>
              <Grid container="row">
                <Grid xs={1}>
                  <IoLocationOutline className="iconLocation"/>
                </Grid>
                <Grid xs={5}>
                  <p className="fontsend">Enviar a</p>
                  <p className="fontLocation">Capital Federal</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={5} className="nav">
              <Grid container="row" marginTop={1.5}>
                <Grid xs={1}>
                  <p className="fontLink">Categorias</p>
                </Grid>
                <Grid xs={1} marginLeft={5}>
                  <p className="fontLink">Ofertas</p>
                </Grid>
                <Grid xs={1} marginLeft={3}>
                  <p className="fontLink">Historial</p>
                </Grid>
                <Grid xs={1} marginLeft={3}>
                  <p className="fontLink">Supermercado</p>
                </Grid>
                <Grid xs={1} marginLeft={8}>
                  <p className="fontLink">Moda</p>
                </Grid>
                <Grid xs={1} marginLeft={1}>
                  <p className="fontLink">Vender</p>
                </Grid>
                <Grid xs={1} marginLeft={2}>
                  <p className="fontLink">Ayuda</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={11} md={3} lg={3} xl={4} height={40}>
              <Grid container="row" marginTop={1.5} className="sub-nav">
                <Grid xs={3} marginLeft={10}>
                  <p className="fontSubNav">Creá tu cuenta</p>
                </Grid>
                <Grid xs={2} className="text-center">
                  <p className="fontSubNav">Ingresá</p>
                </Grid>
                <Grid xs={3} className="text-center">
                  <p className="fontSubNav">Mis Compras</p>
                </Grid>
                <Grid xs={1} className="cartIcon text-end" marginTop={0.5}>
                  <BsCart2 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default NavBar;
