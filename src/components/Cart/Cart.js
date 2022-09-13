import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function Cart() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="header">
        <CloseOutlinedIcon />
        <h3>Cart</h3>
      </div>
      <div className="section-1">
        <div className="inner-section-1">
          <p>Uyga yetkazib berish</p>
          <p className="bold">Namangan shahar, 6 chi kichik tuman</p>
        </div>
        <span className="edit">Ozgartirmoq</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 130px;
    width: 100%;
    padding: 20px;

    h3 {
      font-size: 20px;
    }
  }

  .section-1 {
    display: flex;
    font-size: 12px;
    border-bottom: 5px solid #efefef;
    width: 100%;

    .inner-section-1 {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 10px;
    }

    .bold {
      font-weight: 550;
    }
    .edit {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      color: #6bd7ff;
    }
  }
`;
