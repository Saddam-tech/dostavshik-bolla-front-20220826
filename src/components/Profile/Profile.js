import styled from "styled-components";
import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";

import { useNavigate } from "react-router-dom";
import { navigationitems } from "../helper";
export default function Profile() {
  const navigate = useNavigate();

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
`;
