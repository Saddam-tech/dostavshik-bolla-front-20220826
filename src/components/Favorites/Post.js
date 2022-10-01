import styled from "styled-components";
import React, { useState, useEffect } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useParams } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

export default function Post() {
  const [value, setValue] = useState(3);
  const { uuid } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <img
        src="https://vegnews.com/media/W1siZiIsIjI5NDQ2L1ZlZ05ld3MuVmVnYW5GYXN0Rm9vZC5Nb250eXNHb29kQnVyZ2VyLmpwZyJdLFsicCIsInRodW1iIiwiMTYwMHg5NDYjIix7ImZvcm1hdCI6ImpwZyJ9XSxbInAiLCJvcHRpbWl6ZSJdXQ/VegNews.VeganFastFood.MontysGoodBurger.jpg?sha=892e9c726614c0f8"
        alt=""
      />
      <div className="sub-container">
        <div className="inner-div">
          <h4>Les Ailes</h4>
          <div className="delivery">
            <VerifiedIcon sx={{ color: "#f99500", fontSize: 18 }} />
            <p className="highlight">Yaguar eltuv</p>
          </div>
        </div>
        <div className="inner-div-1">
          <StarOutlinedIcon sx={{ color: "#fff600", fontSize: 18 }} />
          <p>4.9(386)</p>
        </div>
        <div className="inner-div-1">
          <p>1.4km · </p>
          <p>14 ~ 24 min · </p>
          <p className="bold">Tekin Eltuv ~</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 30px;
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }
  .sub-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 4px;
    .inner-div {
      display: flex;
      align-items: center;
      width: 100%;
      padding-left: 14px;
      h4 {
        width: 100%;
        font-weight: 500;
      }

      .delivery {
        display: flex;
        width: 100%;
        gap: 4px;
        color: #3a3a3a;
        .highlight {
          color: #f99500;
          font-weight: 600;
          font-size: 12px;
          width: 100%;
          white-space: nowrap;
        }
      }
    }
    .inner-div-1 {
      display: flex;
      align-items: center;
      padding-left: 14px;
      gap: 3px;
      p {
        font-size: 10px;
      }
      .bold {
        font-weight: 700;
        color: #919191;
      }
    }
  }
`;
