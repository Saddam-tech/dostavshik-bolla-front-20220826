import styled from "styled-components";
import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import { navigationitems, profileOpt } from "../helper";
export default function Profile() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  return (
    <Container>
      <section className="header">
        <h1>Falonchiyev Falonchi</h1>
        <p>010-****-1727</p>
        <div className="sub-header">
          <span>
            <p className="num">4</p>
            <p className="text">Mening kommentariyam</p>
          </span>
          <span>
            <p className="num">0</p>
            <p className="text">Foydali</p>
          </span>
          <span>
            <p className="num">0</p>
            <p className="text">Mening Sevimli</p>
          </span>
        </div>
        <button>Koproq ko'rmoq</button>
      </section>
      <Carousel height={22} padding="0" objectFit="cover" />
      <section className="section-1">
        <ul>
          {profileOpt.map((el, i) => (
            <li key={i}>
              <span>{el.icon}</span>
              <span>{el.label}</span>
            </li>
          ))}
        </ul>
      </section>
      {/* New restaurants section*/}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "8px",
            height: 85,
          }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Asosiy" icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction
            label="Qidirish"
            icon={<SearchOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Sevimli"
            icon={<FavoriteBorderOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Buyurtmalar"
            icon={<AssignmentOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Profil"
            icon={<PersonOutlineOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;

  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-bottom: 20px;

    .sub-header {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 20px;

      span {
        text-align: center;
        .num {
          font-weight: 550;
          font-size: 28px;
        }
        .text {
          font-size: 12px;
        }
      }
    }

    button {
      border: 1px solid #21c0ff;
      width: 90%;
      padding: 10px;
      border-radius: 5px;
      color: #21c0ff;
      font-weight: 600;
    }
  }

  .section-1 {
    width: 100%;
    padding: 15px 15px 90px 15px;

    ul {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 10px;
        gap: 10px;
        font-size: 18px;
        width: 100%;
      }
    }
  }
`;
