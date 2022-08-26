import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { router } from "./components/router";

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
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
        rel="stylesheet"
      />

      <HashRouter>
        <Routes>
          {router.map((el, _) => (
            <Route path={el.path} element={el.element} />
          ))}
        </Routes>
      </HashRouter>
    </AppBox>
  );
}

const AppBox = styled.div`
  display: flex;
`;
