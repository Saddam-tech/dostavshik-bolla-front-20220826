import styled from "styled-components";
import React, { useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Carousel from "../Carousel/Carousel";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CollectionsIcon from "@mui/icons-material/Collections";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { options } from "../helper";
export default function OrderItemDetail() {
  const navigate = useNavigate();
  const { uuid, itemid } = useParams();
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <Container>
      <Carousel height={74} padding="0" objectFit="cover" />
      {/* icons-set */}
      <section className="iconset">
        <div className="sub-1">
          <ArrowBackOutlinedIcon
            onClick={() => navigate(-1)}
            sx={{ color: "#fff" }}
          />
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
      {/* icons-set */}

      {/* content */}
      <section className="section-1">
        <h1>12. Somsa</h1>

        <div className="sub-section-1">
          <span>
            <p className="bold">Narx</p>
            <p className="price">12,900 UZS</p>
          </span>
          <span>
            <p className="bold">Miqdor</p>
            <span className="incrdecr">
              <RemoveCircleOutlineOutlinedIcon />
              <p>1</p>
              <AddCircleOutlineOutlinedIcon />
            </span>
          </span>
        </div>
        <div className="sub-section-2">
          <div className="header">
            <h3>Qoshimcha tanlovlar</h3>
          </div>
          <div className="inner-div">
            <ul>
              {options.map((el, i) => (
                <li key={i}>
                  {" "}
                  <input type="checkbox" /> {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* content */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

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

  .section-1 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;

    h1 {
      padding: 20px;
    }

    .sub-section-1 {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 15px;
      border-top: 0.5px solid #f2efef;
      width: 100%;
      padding: 10px 0;

      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        width: 100%;

        .bold {
          font-weight: 500;
        }
        .price {
          font-size: 18px;
        }

        .incrdecr {
          width: 120px;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
`;
