import ItemDetail from "./Item/ItemDetail";
import OrderItemDetail from "./Item/OrderItemDetail";
import Main from "./Main";

export const router = [
  {
    route: "Main",
    path: "/",
    element: <Main />,
  },
  {
    route: "ItemDetail",
    path: "/itemdetail/:uuid",
    element: <ItemDetail />,
  },
  {
    route: "OrderItemDetail",
    path: "orderitemdetail/:itemid",
    element: <OrderItemDetail />,
  },
];
