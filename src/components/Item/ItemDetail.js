import styled from "styled-components";
import React, { useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Carousel from "../Carousel/Carousel";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItem from "./ListItem";
export default function ItemDetail({ data }) {
  return (
    <Container>
      <Carousel height={74} padding="0" objectFit="cover" />
      {/* icons-set */}
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
      {/* icons-set */}
      {/* header-card */}
      <section className="card">
        <h1>Milliy Taomlar</h1>
        <div className="sub-container">
          <VerifiedIcon sx={{ color: "#f99500" }} />
          <p className="highlight">Tez eltuv</p>
          <StarOutlinedIcon sx={{ color: "#ffbb00" }} />
          <p>4.2(804)</p>
        </div>
      </section>
      {/* header-card */}
      {/* header */}
      <section className="header">
        <div className="h-sub-container-1">
          <span>
            <AccessTimeIcon sx={{ color: "#000" }} />
            <p className="time">12-22 min</p>
          </span>
          <span>
            <p>Malumot</p>
            <ArrowForwardIosIcon sx={{ color: "#000", fontSize: 18 }} />
          </span>
        </div>
        <div className="h-sub-container-2">
          <span className="sub-1-1">
            <p>Yetkazib berish:</p>
            <p>Tekin~</p>
            <span className="more">yana korish</span>
          </span>
          <span className="sub-1-1">
            <p>Min. buyurtma:</p>
            <p>5,000 UZS</p>
          </span>
        </div>
        <div className="h-sub-container-3">
          {Array.from(new Array(5)).map((_, i) => (
            <div key={i} className="h-card">
              <span className="sub-span-1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUTlDDMxHzWDEXIMMFn_bh5nleUT3Z8JWag&usqp=CAU"
                  alt=""
                />
                <span className="sub-span-2">
                  <p>Juda mazzali va tez yetib keldi, katta rahmat ...</p>
                  <span className="stars">
                    {Array.from(new Array(5)).map((_, i) => (
                      <StarOutlinedIcon
                        key={i}
                        sx={{ color: "#ffbb00", fontSize: 20 }}
                      />
                    ))}
                  </span>
                </span>
              </span>
            </div>
          ))}
        </div>
        {/* navigation  */}
        <ul className="navigation">
          <li className="active">Taniqli</li>
          <li>Menyu</li>
          <li>Qo'shimcha menyu</li>
        </ul>
        {/* navigation  */}

        {/* content */}
        <div className="content">
          <h1>Taniqli</h1>

          {Array.from(new Array(8)).map((_, i) => (
            <ListItem key={i} index={i + 1} />
          ))}
        </div>
        {/* content */}
      </section>
      {/* header */}
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

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    width: 90%;
    height: 140px;
    position: absolute;
    top: 190px;
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
      gap: 4px;
      color: #3a3a3a;
    }
  }

  .header {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    margin-top: 70px;
    height: 100%;
    width: 100%;
    padding: 23px;

    .h-sub-container-1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      span {
        display: flex;
        font-size: 15px;
        align-items: center;
        gap: 10px;

        .time {
          font-weight: 600;
        }
      }
    }

    .h-sub-container-2 {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 20px;

      .sub-1-1 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        gap: 20px;

        .more {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          background-color: #f2efef;
          color: #000;
          font-size: 12px;
          width: 90px;
          height: 25px;
        }
      }
    }
    .h-sub-container-3 {
      display: flex;
      align-items: center;
      overflow-x: scroll;
      margin: 0;
      padding: 0;
      width: 100%;
      overflow-y: hidden;
      height: 150px;
      gap: 10px;

      .h-card {
        display: flex;
        border-radius: 7px;
        border: 1px solid #f2efef;
        padding: 10px;

        .sub-span-1 {
          display: flex;
          gap: 10px;
          width: 100%;
          color: #606060;
          font-size: 13px;

          img {
            width: 75px;
            height: 75px;
            object-fit: cover;
          }

          .sub-span-2 {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 170px;

            .stars {
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      border-bottom: 1px solid #cecece;
      position: sticky;
      top: 0;
      background-color: #fff;

      li {
        padding: 10px;
        color: #a0a0a0;
      }

      li.active {
        color: #000;
        font-weight: 500;
        border-bottom: 2px solid #000;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 10px;
      overflow-y: scroll;
      scroll-snap-type: x mandatory;

      h1 {
        font-weight: 500;
        font-size: 20px;
      }
    }
  }
`;
