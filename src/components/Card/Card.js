import styled from "styled-components";
import React, { useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router-dom";

export default function Card({ data, itemid }) {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/itemdetail/${itemid}`)}>
      {/* <section className="sub-container">
        <h3>Restoranlar</h3>
        <div className="badges">
          <VerifiedIcon />
          <p>Bizning tanlov !</p>
          <div className="dropdowns"></div>
        </div>
      </section> */}
      <section className="sub-container-1">
        <img
          src="https://media.istockphoto.com/photos/fresh-tasty-burger-picture-id495204032?k=20&m=495204032&s=612x612&w=0&h=x44AnT8kHv-apqnG9t1ILwf2sIr4uq14CUB7MBaiuOI="
          alt=""
        />

        <div className="sub-container-2">
          <img
            src="https://s3.envato.com/files/278887276/burger1148.jpg"
            alt=""
          />
          <img
            src="https://media.istockphoto.com/photos/fresh-tasty-burger-picture-id495204032?k=20&m=495204032&s=612x612&w=0&h=x44AnT8kHv-apqnG9t1ILwf2sIr4uq14CUB7MBaiuOI="
            alt=""
          />
        </div>
      </section>

      <section className="sub-container-3">
        <div className="first-section">
          <h3>Milliy taomlar</h3>
          <p>32-42 min</p>
        </div>
        <div className="paragraph">
          <StarOutlinedIcon sx={{ color: "#fff600" }} />
          <p>4.9(386) · 1.4km · Yetkazib berish 4,500 UZS</p>
        </div>
        <div className="blocks">
          <span className="red">NEW</span>
          <span className="black">Pickup Available</span>
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
  margin: 10px;
  /* margin-bottom: 70px; */

  /* .sub-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
      width: 100%;
      padding: 15px;
      font-weight: 550;
    }
    .badges {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      padding: 0 10px 10px;
      width: 100%;
    }
  } */

  .sub-container-1 {
    display: flex;
    align-items: center;

    img {
      width: 270px;
      height: 184px;
    }

    .sub-container-2 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img {
        width: 90px;
        height: 90px;
        margin: 2px 4px;
      }
    }
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  .sub-container-3 {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 5px 12px;

    .first-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      h3 {
        padding: 5px;
        font-weight: 500;
        font-size: 14px;
      }
      p {
        font-size: 13px;
      }
    }
    .paragraph {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 50;
      font-size: 0.75rem;
    }
    .delivery {
      font-weight: 50;
      font-size: 0.7rem;
    }
    .blocks {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      .red {
        border-radius: 5px;
        padding: 3px 5px;
        font-weight: 700;
        margin: 10px 0;
        color: #fff;
        font-size: 12px;
        background-color: #ff0000;
      }
      .black {
        border-radius: 5px;
        padding: 3px 5px;
        font-weight: 700;
        margin: 10px 0;
        color: #fff;
        font-size: 12px;
        background-color: #000000;
      }
    }
  }
`;
