import styled from "styled-components";
import React, { useState, useEffect } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useParams } from "react-router-dom";

export default function Favorites() {
  const [value, setValue] = useState(3);
  const { uuid } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <section className="navbar">
        <div className="inner_bar_1">
          <ArrowBackOutlinedIcon />
          <h3>Sevimli</h3>
          <p className="edit">O'zgartirmoq</p>
        </div>
        <div className="inner_bar_1">
          <p className="settings">1 dona</p>
          <p className="settings">
            Doim buyurtma{" "}
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </p>
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
  width: 100%;
  margin-top: 30px;
  .navbar {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 100%;
    border-bottom: 11px solid #f4f4f4;
    padding-bottom: 10px;

    .inner_bar_1 {
      padding-left: 30px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      h3 {
        font-weight: 500;
        font-size: 22px;
        padding-left: 50px;
      }
      .edit {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        color: #21c0ff;
        font-size: 12px;
      }
      .settings {
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        span {
          padding-right: 10px;
        }
      }
    }
  }
`;
