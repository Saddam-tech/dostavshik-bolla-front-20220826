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
      "https://cs7.pikabu.ru/post_img/2017/12/19/9/1513698805118134083.jpg",
  },
  {
    imageurlpc:
      "https://www.willflyforfood.net/wp-content/uploads/2022/01/fried-chuchvara.jpg.webp",
  },
  {
    imageurlpc:
      "https://oasisinternational.travel/wp-content/uploads/2020/03/85283bdf5d1.jpg",
  },
];

export default function Carousel({ height, padding }) {
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
    <Container height={height} padding={padding}>
      <section className="headLineContainer">
        <ul ref={headLineRef}>
          {banners?.map((value, index) => (
            <li key={index}>
              <img src={value.imageurlpc} alt="" />
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
  position: relative;
  padding: ${({ padding }) => padding};
  width: 100%;
  overflow: hidden;

  .headLineContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${({ height }) => height}vw;
    background: #000;
    position: relative;

    ul {
      display: flex;
      width: 100%;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 100%;
        color: #fff;
        scroll-snap-align: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
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
