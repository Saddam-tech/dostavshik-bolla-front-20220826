import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
export default function ListItem({ index }) {
  return (
    <Container>
      <div>
        <span className="head">
          <h3>{index}. Somsa</h3>
        </span>
        <p className="price">5,900 UZS</p>
        <span>
          <ThumbUpOutlinedIcon sx={{ fontSize: 20, color: "#595959" }} />
          <p>233</p>
        </span>
      </div>

      <img
        src="https://www.letsgouzbekistan.com/uploads/images/Uzbek_meals/somsa-191.jpg"
        alt=""
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  border-bottom: 0.5px solid #eaeaea;
  padding-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 7px;

    .head {
      display: flex;
    }

    h3 {
      font-size: 22px;
    }

    .price {
      font-size: 22px;
    }
    span {
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        font-weight: 550;
        color: #595959;
      }
    }
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;
