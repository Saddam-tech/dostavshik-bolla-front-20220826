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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate, useParams } from "react-router-dom";
import { options } from "../helper";
export default function OrderItemDetail() {
  const navigate = useNavigate();
  const { uuid, itemid } = useParams();
  const [activeIndex, setActiveIndex] = useState(1);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  let version = true;

  return (
    <Container>
      {version ? (
        <>
          <Carousel height={52} padding="0" objectFit="cover" />
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
        </>
      ) : (
        <section className="iconset-v2-0">
          <div className="sub-1">
            <ArrowBackOutlinedIcon
              onClick={() => navigate(-1)}
              sx={{ color: "#000" }}
            />
            <div className="sub-1-1">
              <IosShareOutlinedIcon sx={{ color: "#000" }} />
              <FavoriteBorderOutlinedIcon sx={{ color: "#000" }} />
            </div>
          </div>
        </section>
      )}

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
              <RemoveCircleOutlineOutlinedIcon
                sx={{ color: "#a0a0a0", fontSize: 30 }}
              />
              <p>1</p>
              <AddCircleOutlineOutlinedIcon
                sx={{ color: "#a0a0a0", fontSize: 30 }}
              />
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
                <li>
                  <FormGroup>
                    <FormControlLabel
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 35,
                        },
                      }}
                      control={<Checkbox />}
                      label={el.label}
                    />{" "}
                  </FormGroup>
                  <p>{el.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* content */}
      <span className="pre-footer">Xozirda buyurtma qilishingiz mumkin!</span>
      <button>Savatchaga qo'shmoq</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .iconset {
    display: flex;
    width: 100%;
    position: absolute;
    padding: 25px;
    top: 3px;
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

  .iconset-v2-0 {
    display: flex;
    width: 100%;
    padding: 25px;
    flex-direction: column;
    justify-content: space-between;

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

    .sub-section-2 {
      width: 100%;
      margin-bottom: 280px;
      .header {
        width: 100%;
        background-color: #f4f4f4;
        h3 {
          font-weight: 550;
          font-size: 18px;
          padding: 20px;
        }
      }

      .inner-div {
        padding: 10px;
        ul {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          width: 100%;
          li {
            display: flex;
            align-items: center;
            color: #000;
            font-size: 18px;
            p {
              color: #a0a0a0;
            }
          }
        }
      }
    }
  }

  .pre-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    margin-top: 60px;
    color: #0ab9ff;
    background-color: #e5f2ff;
    font-size: 13px;
    font-weight: 450;
    position: fixed;
    bottom: 90px;
    text-align: center;
  }
  button {
    height: 90px;
    width: 100%;
    /* margin-top: 60px; */
    color: #fff;
    background-color: #0ab9ff;
    font-weight: 550;
    font-size: 18px;
    position: fixed;
    bottom: 0;
  }
`;
