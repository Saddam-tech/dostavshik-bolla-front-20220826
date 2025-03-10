import styled from "styled-components";

export default function SubItem({ data }) {
  return (
    <Container>
      <img src={data.imageurlpc} alt="" />
      <section className="sub-container">
        <h3>Qovurilgan Tovuq</h3>
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
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 8px;
  }
  .sub-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
      text-align: center;
      font-weight: 500;
      font-size: 9px;
      padding: 10px 10px 0;
    }
  }
`;
