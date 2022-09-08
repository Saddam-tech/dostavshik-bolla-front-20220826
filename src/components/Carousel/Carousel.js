import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import I_ltArwWhite from "../../img/I_ltArwWhite.svg";
import I_rtArwWhite from "../../img/I_rtArwWhite.svg";
import E_interview from "../../img/E_interview.svg";
import { onClickNextBtn, onClickPreBtn } from "../../Utils/Util";

let banners = [
  {
    imageurlpc:
      "https://www.willflyforfood.net/wp-content/uploads/2021/12/uzbek-food-plov.jpg",
  },
  {
    imageurlpc:
      "https://www.willflyforfood.net/wp-content/uploads/2021/12/uzbek-food-plov.jpg",
  },
  {
    imageurlpc:
      "https://www.willflyforfood.net/wp-content/uploads/2021/12/uzbek-food-plov.jpg",
  },
];

export default function Carousel() {
  const headLineRef = useRef();
  const [headLineIndex, setHeadLineIndex] = useState(0);

  useEffect(() => {
    if (banners.length > 0) {
      if (!headLineRef.current) return;
      const wrapWidth = headLineRef.current.offsetWidth;
      const contWidth = headLineRef.current.children[0].offsetWidth;
      const itemNumByPage = Math.floor(wrapWidth / contWidth);

      if (headLineRef.current?.scrollTo) {
        if (headLineIndex === 0) {
          headLineRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          headLineRef.current.scrollTo({
            left: contWidth * itemNumByPage * headLineIndex,
            behavior: "smooth",
          });
        }
      }
    }
  }, [headLineIndex, banners]);

  return (
    <Container>
      <section className="headLineContainer">
        <ul ref={headLineRef}>
          {banners?.map((value, index) => (
            <li key={index}>
              <div className="innerBox">
                <span className="interview">
                  <img src={E_interview} alt="" />
                </span>

                <p className="title">Pak on the frontier of NFTs.</p>

                <p className="explain">
                  The acclaimed anonymous art entity has been pioneering in
                  digital spaces for decades. Here’s what’s next.
                </p>

                <p className="bottomText">ON THE FRONTIER OF NFTS.</p>
              </div>
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
  padding: 72px 0 20vw 0;
  width: 100%;

  .headLineContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 53vw;
    background: #000;
    position: relative;

    ul {
      display: flex;
      width: 100%;
      height: inherit;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 100%;
        color: #fff;
        padding: 11.11vw 0;
        scroll-snap-align: center;

        .innerBox {
          display: flex;
          flex-direction: column;
          gap: 1.38vw;
          margin: 0 11.66vw;

          .interview {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 36.66vw;
            height: 10vw;
            border: 1.2px solid #ffffff;
            border-radius: 8.33vw;
          }

          .title {
            font-size: 8.33vw;
            font-weight: 500;
          }

          .explain {
            font-size: 4.44vw;
            font-weight: 500;
          }
        }

        .bottomText {
          font-size: 4.44vw;
          font-weight: 500;
        }
      }
    }

    .indexBtn {
      position: absolute;

      &.preBtn {
        left: 3.33vw;

        img {
          height: 3.05vw;
        }
      }
      &.nextBtn {
        right: 3.33vw;

        img {
          height: 3.05vw;
        }
      }
    }
  }
`;
