import Cart from "./Cart/Cart";
import ItemDetail from "./Item/ItemDetail";
import OrderItemDetail from "./Item/OrderItemDetail";
import Main from "./Main";
import Profile from "./Profile/Profile";

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
    path: "/itemdetail/:uuid/orderitemdetail/:itemid",
    element: <OrderItemDetail />,
  },
  {
    route: "Cart",
    path: "/cart",
    element: <Cart />,
  },
  {
    route: "Profile",
    path: "/profile",
    element: <Profile />,
  },
];
