import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Cart({ data, uuid }) {
  const navigate = useNavigate();
  return (
    <Container>
      <section className="header">
        <div className="section-1">
          <p>Uyga yetkazib berish</p>
          <p>Namangan shahar, 6 chi kichik tuman</p>
        </div>
        <span className="edit">Ozgartirmoq</span>
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

  .section-1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .edit {
    padding: 10px;
  }
`;
