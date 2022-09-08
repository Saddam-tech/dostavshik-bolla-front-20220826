import styled from "styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

export default function Item({ data }) {
  return (
    <Container>
      <img src={data.imageurlpc} alt="" />
      <section className="sub-container">
        <h3>Milliy taomlar</h3>
        <div className="paragraph">
          <StarOutlinedIcon sx={{ color: "#fff600" }} />
          <p>4.9(386) * 1.4km</p>
        </div>
        <p className="delivery">Yetkazib berish 4,500 UZS</p>
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
  height: 100%;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  .sub-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
      padding: 5px;
      font-weight: 500;
      font-size: 14px;
    }
    .paragraph {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 50;
      font-size: 0.9rem;
    }
    .delivery {
      font-weight: 50;
      font-size: 0.7rem;
    }
  }
`;
