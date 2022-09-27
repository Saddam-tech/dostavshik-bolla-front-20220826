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
import FullWidthTabs from "./FullWidthTabs";
export default function Orders() {
  const [value, setValue] = useState(3);
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
        navigate("/orders");
    }
  }, [value]);
  return (
    <Container>
      <FullWidthTabs />
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
`;
