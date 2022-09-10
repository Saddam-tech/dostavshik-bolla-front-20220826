import ItemDetail from "./Item/ItemDetail";
import Main from "./Main";

export const router = [
  {
    route: "Main",
    path: "/",
    element: <Main />,
  },
  {
    route: "ItemDetail",
    path: "/itemdetail/:itemid",
    element: <ItemDetail />,
  },
];
