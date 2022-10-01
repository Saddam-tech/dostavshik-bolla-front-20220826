import styled from "styled-components";
import React, { useState, useEffect } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useParams } from "react-router-dom";
import Post from "./Post";

export default function Favorites() {
  const [value, setValue] = useState(3);
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState(Array.from(new Array(10)));

  return (
    <Container>
      <section className="navbar">
        <div className="inner_bar_1">
          <ArrowBackOutlinedIcon />
          <h3>Sevimli</h3>
          <p className="edit">O'zgartirmoq</p>
        </div>
        <div className="inner_bar_1">
          <p className="settings">10 dona</p>
          <p className="settings">
            <p className="filter"> Doim buyurtma</p>{" "}
            <span>
              <KeyboardArrowDownIcon sx={{ color: "#919191" }} />
            </span>
          </p>
        </div>
      </section>
      <section className="posts">
        {posts.map((el, i) => (
          <Post />
        ))}
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
  margin: 130px 0 20px 0;
  .navbar {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 100%;
    border-bottom: 11px solid #f4f4f4;
    padding: 30px 0 10px 0;
    background-color: #fff;
    position: fixed;
    top: 0;
    height: 150px;

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
          display: flex;
          align-items: center;
          justify-content: center;
          padding-right: 10px;
        }
        .filter {
          color: #919191;
          font-size: 14px;
        }
      }
    }
  }
  .posts {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
