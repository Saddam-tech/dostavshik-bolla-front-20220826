import styled from "styled-components";
import React, { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate, useParams } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Paper from "@mui/material/Paper";
import { navigationitems } from "../helper";
export default function Search() {
  const [value, setValue] = useState(1);
  const { uuid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    switch (value) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/search");
        break;
      case 2:
        navigate("/favorites");
        break;
      case 3:
        navigate("/orders");
        break;
      case 4:
        navigate("/profile");
        break;
      default:
        navigate("/search");
    }
  }, [value]);
  return (
    <Container>
      <section className="sub-section-1">
        <div className="input-wrap">
          <input placeholder="Xoxlagan taomingizni qidiring!" type="text" />
        </div>
        <SearchOutlinedIcon sx={{ fontSize: 30, color: "#3f3f3f" }} />
      </section>
      <section className="sub-section-2">
        <ul>
          {Array.from(new Array(100)).map((_, i) => (
            <li key={i} className="inner-section-1">
              <img
                src="https://media.istockphoto.com/photos/fresh-tasty-burger-picture-id495204032?k=20&m=495204032&s=612x612&w=0&h=x44AnT8kHv-apqnG9t1ILwf2sIr4uq14CUB7MBaiuOI="
                alt=""
              />
              <p>Yangilik</p>
            </li>
          ))}
        </ul>
      </section>
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

  .sub-section-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 55px 0 7px;
    gap: 15px;
    position: fixed;
    top: 0;
    background-color: #fff;

    .input-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      border: 0.1px solid #eaeaea;
      width: 80%;
      height: 48px;
      box-shadow: 1.4px 1.4px 1px 0.7px #eaeaea;
      input {
        width: 90%;
      }
      input::placeholder {
        font-size: 14px;
      }
    }
  }
  .sub-section-2 {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 105px;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      padding: 20px;
      gap: 20px;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img {
          height: 100px;
          width: 100px;
          object-fit: cover;
        }
      }
    }
  }
`;
