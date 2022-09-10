import styled from "styled-components";
import React, { useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Carousel from "../Carousel/Carousel";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CollectionsIcon from "@mui/icons-material/Collections";

export default function ItemDetail({ data }) {
  return (
    <Container>
      <Carousel height={74} padding="0" />
      <section className="iconset">
        <div className="sub-1">
          <ArrowBackOutlinedIcon sx={{ color: "#fff" }} />
          <div className="sub-1-1">
            <IosShareOutlinedIcon sx={{ color: "#fff" }} />
            <FavoriteBorderOutlinedIcon sx={{ color: "#fff" }} />
          </div>
        </div>
        <div className="sub-2">
          <span>1 / 3</span>
          <CollectionsIcon sx={{ color: "#fff" }} />
        </div>
      </section>
      <section className="card">
        <h1>Milliy Taomlar</h1>
        <div className="sub-container">
          <VerifiedIcon sx={{ color: "#f99500" }} />
          <p className="highlight">Tez eltuv</p>
          <StarOutlinedIcon sx={{ color: "#ffca2d" }} />
          <p>4.2(804)</p>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .iconset {
    display: flex;
    width: 100%;
    position: absolute;
    padding: 25px;
    top: 20px;
    flex-direction: column;
    justify-content: space-between;
    height: 54vw;

    .sub-1 {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .sub-1-1 {
        display: flex;
        gap: 25px;
        justify-content: center;
        align-items: center;
      }
    }
    .sub-2 {
      display: flex;
      justify-content: space-between;
      width: 100%;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        background-color: #000;
        opacity: 0.5;
        color: #fff;
        font-size: 12px;
        width: 60px;
        height: 25px;
      }
    }
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    width: 90%;
    height: 140px;
    position: absolute;
    top: 240px;
    gap: 10px;
    box-shadow: 1px 1px 20px 0.1px #eaeaea;
    border: 0.5px solid #eaeaea;
    h1 {
      font-weight: 550;
    }
    .highlight {
      color: #f99500;
      font-weight: 600;
    }

    .sub-container {
      display: flex;
    }
  }
`;
