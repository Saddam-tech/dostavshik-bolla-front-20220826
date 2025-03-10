import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import OrderItemDetail from "./components/Item/OrderItemDetail";
import { router } from "./components/router";
import GlobalStyle from "./Utils/GlobalStyle";

export default function App() {
  return (
    <AppBox className="appBox">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@500&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <HashRouter>
        <Routes>
          {router.map((el, i) => (
            <Route key={i} path={el.path} element={el.element} />
          ))}
        </Routes>
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.div`
  display: flex;
`;
