import styled from "styled-components";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { navigationitems } from "../helper";
export default function Search() {
  const { uuid } = useParams();
  const navigate = useNavigate();

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
          {Array.from(new Array(20)).map((_, i) => (
            <li key={i} className="inner-section-1"></li>
          ))}
        </ul>
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

  .sub-section-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 55px;
    gap: 15px;
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
`;
