import styled from "styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { useNavigate } from "react-router-dom";

export default function Item({ data, uuid }) {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/itemdetail/${uuid}`)}></Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
