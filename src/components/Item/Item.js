import styled from "styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

export default function Item({ data }) {
  return (
    <Container className="appBox">
      <img src={data.imgsrc} alt="" />
      <section className="sub-container">
        <h3>Milliy taomlar</h3>
        <div className="paragraph">
          <StarOutlinedIcon sx={{ color: "#fff600" }} />
          <p>4.9(386) * 1.4km</p>
        </div>
        <p>Delivery fee </p>
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
