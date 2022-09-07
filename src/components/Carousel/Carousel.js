import { useEffect, useRef } from "react";
import styled from "styled-components";

let banners = [
  {
    imageurlpc:
      "https://www.willflyforfood.net/wp-content/uploads/2021/12/uzbek-food-plov.jpg",
  },
];

export default function Slider() {
  const headLineRef = useRef();
  return (
    <Container>
      <section className="headLineContainer">
        <ul ref={headLineRef}>
          {banners?.map((value, index) => (
            <li key={index}>
              <img
                className="mainImg"
                src={value.imageurlpc ? value.imageurlpc : E_staking}
                alt=""
              />
            </li>
          ))}
        </ul>
        <button
          className="preBtn indexBtn"
          onClick={() =>
            onClickPreBtn(headLineRef, banners, headLineIndex, setHeadLineIndex)
          }
        >
          <img src={I_ltArwWhite} alt="" />
        </button>
        <button
          className="nextBtn indexBtn"
          onClick={() =>
            onClickNextBtn(
              headLineRef,
              banners,
              headLineIndex,
              setHeadLineIndex
            )
          }
        >
          <img src={I_rtArwWhite} alt="" />
        </button>
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  div {
    width: 100%;
    height: 50px;
    background-color: #f2ff;
  }
`;
