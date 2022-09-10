import styled from "styled-components";
import React, { useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Carousel from "../Carousel/Carousel";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function ItemDetail({ data }) {
  return (
    <Container>
      <Carousel height={74} padding="0" />
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
