import Item from "./Item/Item";
import Main from "./Main";

export const router = [
  {
    route: "Main",
    path: "/",
    element: <Main />,
  },
  {
    route: "Item",
    path: "/item",
    element: <Item />,
  },
];
