import { Card, Container, Grid } from "@mui/material";
import { border, borderRadius, height, width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "../NavBar/index.js";
import Rating from "@mui/material/Rating";
const Detail = () => {
  const [item, setItem] = useState("");
  const [pictures, setPictures] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [imageUrl, setImageUrl] = useState("")
  const [features, setFeatures] = useState("")
  const { id } = useParams();

  const fetchDatail = () => {
    const urlDetail = `https://api.mercadolibre.com/items/${id}`;
    fetch(urlDetail)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setFeatures(data.attributes.slice(0, 10))
        setPictures(data.pictures);
      })
      .catch((err) => console.log(err));
    const urlReview = `https://api.mercadolibre.com/reviews/item/${id}`;
    fetch(urlReview)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setRating(data.rating_average);
      })
      .catch((err) => console.log(err));
  };

    const selectImageId = (url) => {
      setImageUrl(url)
    }

  useEffect(() => {
    fetchDatail();
  }, []);

  const numberFormat = new Intl.NumberFormat("es-ES");

  const styleMenuCompra = {
    border: "1px solid gray", 
    textAlign: "center", 
    marginLeft: "10px", 
    marginTop: "15px",
    height: "100%",
    borderRadius: "4px"
  }

  return (
    <>
      <NavBar />
      <Container maxWidth >
        <Container
          xs={{ boxShadow: 2 }}
          className="vh-100 bg-white borderRounded smoothShadow"
        >
          <Grid
            container
            direction="row"
            marginTop={6}
            alignContent="center"
            justifyContent="center"
          >
            <Grid item xs={1}>
              <div className="containerPicturesHover">
                {pictures.length
                  ? pictures.map((data, index) => (
                      <div className="containerImgHover" 
                            key={index} 
                            onMouseEnter={() => selectImageId(data.url)} >
                        <img src={data.url} className="ImgHover" />
                      </div>
                    ))
                  : "Error"}
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="containerImgDetail">
                <img
                  className="imgDetail"
                  src={imageUrl ? imageUrl : `https://http2.mlstatic.com/D_NQ_NP_${item.thumbnail_id}-O.webp`}
                />
              </div>
            </Grid>
            <Grid item xs={3.5} marginTop={6}>
              <div>
                  {item.condition === "new"
                    ? <p className="fontSold">Nuevo | {item.available_quantity} {item.condition === "new" ? " Vendidos" : " "}</p>
                    : " Usado"}
              </div>
              <div>
                <h1 className="fontTitleDetail">{item.title}</h1>
              </div>
              <div>
                {rating && (
                  <Rating
                    name="half-rating"
                    value={rating}
                    precision={0.5}
                    className="starRating"
                  />
                )}
              </div>
              <div>
              {<p className="fontOriginalPrice">$ {numberFormat.format(item.original_price)}</p>}
                {<p className="fontOfPrice">$ {numberFormat.format(item.price)}</p>}
                {<p className="fontPriceByPart">en 12x ${numberFormat.format(item.price / 12)} sin interes</p>}
              </div>
              <p className="mt-3">Lo que tenés que saber de este producto</p>
              <ul>
                {features.length ? features.map((data, index) =>
                <li key={index}
                    className="mt-1 ml-2">
                      <p className="fontFeatures">{data.name} : {data.value_name}</p>
                </li>)
                :""}
              </ul>
            </Grid>
            <Grid item xs={3.5}>
              <Grid xs={12} 
                    style={styleMenuCompra}>
                    MENU COMPRA
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Detail;
