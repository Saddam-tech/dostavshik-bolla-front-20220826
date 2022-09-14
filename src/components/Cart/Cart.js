import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Cart() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState("");
  const [deliveryRequest, setDeliveryRequest] = useState("");
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
      <div className="section-2">
        <h3>Milliy Taomlar</h3>
        <VerifiedIcon sx={{ color: "#f99500" }} />
        <p className="highlight">Yaguar eltuv</p>
      </div>
      <div className="section-3">
        <div className="sub-section-1">
          <p>1. Palov</p>
          <CloseOutlinedIcon sx={{ color: "#c1bdbd" }} />
        </div>
        <div className="sub-section-1">
          <p>6,900 UZS</p>
          <p>[dropdown]</p>
        </div>
      </div>
      <div className="section-3">
        <p className="add">+ Savatchaga qo'shmoq</p>
      </div>
      <div className="section-3">
        <div className="sub-section-1">
          <p>Umumiy ovqat narxi</p>
          <p>6,900 UZS</p>
        </div>
        <div className="sub-section-1">
          <p>Yetkazib berish</p>
          <p>+3,000 UZS</p>
        </div>
        <div className="sub-section-1">
          <p>Bonuslar</p>
          <p>- 0 UZS</p>
        </div>
        <div className="sub-section-1 border-top-bottom">
          <p className="bold">Umumiy to'lov</p>
          <p className="bold">10,800 UZS</p>
        </div>
        <div className="sub-section-1">
          <p className="bold">Talablar</p>
          <KeyboardArrowDownIcon sx={{ color: "#21c0ff", fontSize: 32 }} />
        </div>
        <div className="sub-section-2">
          <p>Oshxonaga</p>
          <div className="input"></div>
          <input
            type="text"
            value={requests}
            placeholder="ex) Iltimos, achchiq qo'shmang"
            onChange={(e) => setRequests(e.target.value)}
          />
        </div>
        <div className="sub-section-2">
          <p>Yetkazuvchiga</p>
          <div className="input"></div>
          <input
            type="text"
            value={deliveryRequest}
            placeholder="ex) Iltimos, eshik tagida qoldiring"
            onChange={(e) => setDeliveryRequest(e.target.value)}
          />
        </div>
        <div className="sub-section-1 border-bottom">
          <div className="inner-section-1">
            <p className="bold">Tolov turi</p>
            <p>Uzcard *****7050</p>
          </div>
          <KeyboardArrowDownIcon sx={{ color: "#21c0ff", fontSize: 32 }} />
        </div>
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
    gap: 140px;
    width: 100%;
    padding: 20px;

    h3 {
      font-size: 20px;
    }
  }

  .section-1 {
    display: flex;
    font-size: 12px;
    border-bottom: 11px solid #f4f4f4;
    width: 100%;

    .inner-section-1 {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 20px;
    }

    .bold {
      font-weight: 550;
    }
    .edit {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: #21c0ff;
    }
  }

  .section-2 {
    display: flex;
    align-items: center;
    flex-direction: flex-start;
    width: 100%;
    gap: 7px;
    font-size: 13px;
    padding: 20px;
    border-bottom: 3px solid #f4f4f4;

    .highlight {
      color: #f99500;
      font-weight: 600;
      font-size: 14px;
    }
  }

  .section-3 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .add {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      border-top: 3px solid #f4f4f4;
      border-bottom: 7px solid #f4f4f4;
      height: 90px;
      color: #21c0ff;
      font-weight: 500;
    }

    .sub-section-1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      width: 100%;
    }

    .border-top-bottom {
      border-top: 1px solid #f4f4f4;
      border-bottom: 35px solid #f4f4f4;
    }
    .border-bottom {
      border-top: 1px solid #f4f4f4;
      border-bottom: 1px solid #f4f4f4;
    }
    .bold {
      font-weight: 550;
      font-size: 18px;
    }

    .sub-section-2 {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 10px 20px;
      gap: 10px;

      input {
        border: 1px solid #919191;
        padding: 10px;
        width: 95%;
      }
    }
  }
`;
