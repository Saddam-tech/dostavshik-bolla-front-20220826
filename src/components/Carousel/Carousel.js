import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import I_ltArwWhite from "../../img/I_ltArwWhite.svg";
import I_rtArwWhite from "../../img/I_rtArwWhite.svg";
import E_interview from "../../img/E_interview.svg";
import { onClickNextBtn, onClickPreBtn } from "../../Utils/Util";

let banners = [
  {
    imageurlpc:
      "https://previews.123rf.com/images/tul/tul1705/tul170500047/79022622-fast-food-vector-trendy-banner-design-concept-modern-style-with-thin-line-art-fast-food-icons-on-gra.jpg",
  },

  {
    imageurlpc:
      "https://i.pinimg.com/originals/f6/c5/ee/f6c5eec732cec779d09de553a54d01f1.jpg",
  },
  {
    imageurlpc:
      "https://c8.alamy.com/comp/2JAXJ5Y/healthy-plant-based-fast-food-double-border-above-view-over-a-white-wood-banner-background-table-scene-with-cauliflower-crust-pizzas-bean-burgers-2JAXJ5Y.jpg",
  },
  {
    imageurlpc:
      "https://thumbs.dreamstime.com/b/restaurant-wall-typography-vector-food-bbq-background-motivational-cafe-menu-lettering-chalkboard-165773473.jpg",
  },
];

export default function Carousel({ height, padding, objectFit, btns }) {
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

  useEffect(() => {
    // banner movement each 3 seconds
    let timer = setTimeout(() => {
      onClickNextBtn(headLineRef, banners, headLineIndex, setHeadLineIndex);
    }, 3000);
    return () => clearTimeout(timer);
  }, [headLineIndex]);

  return (
    <Container height={height} padding={padding} objectFit={objectFit}>
      <section className="headLineContainer">
        <ul ref={headLineRef}>
          {banners?.map((value, index) => (
            <li key={index}>
              <img src={value.imageurlpc} alt="" />
            </li>
          ))}
        </ul>
        {btns && (
          <>
            <button
              className="preBtn indexBtn"
              onClick={() =>
                onClickPreBtn(
                  headLineRef,
                  banners,
                  headLineIndex,
                  setHeadLineIndex
                )
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
          </>
        )}
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
    overflow: hidden;

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
          object-fit: ${({ objectFit }) => objectFit};
        }
      }
    }

    .ul::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }

    .ul {
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
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
