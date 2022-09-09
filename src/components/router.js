import Card from "./Card/Card";
import Main from "./Main";

export const router = [
  {
    route: "Main",
    path: "/",
    element: <Main />,
  },
  {
    route: "Card",
    path: "/card",
    element: <Card />,
  },
];
