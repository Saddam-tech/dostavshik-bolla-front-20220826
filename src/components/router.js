import ItemDetail from "./Item/ItemDetail";
import ListItem from "./Item/ListItem";
import Main from "./Main";

export const router = [
  {
    route: "Main",
    path: "/",
    element: <Main />,
  },
  {
    route: "ItemDetail",
    path: "/itemdetail",
    element: <ItemDetail />,
  },
  {
    route: "ListItem",
    path: "/listitem",
    element: <ListItem />,
  },
];
