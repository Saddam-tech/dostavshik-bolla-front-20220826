import Cart from "./Cart/Cart";
import ItemDetail from "./Item/ItemDetail";
import OrderItemDetail from "./Item/OrderItemDetail";
import Main from "./Main";
import Orders from "./Orders/Orders";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";

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
  {
    route: "Search",
    path: "/search",
    element: <Search />,
  },
  {
    route: "Orders",
    path: "/orders",
    element: <Orders />,
  },
];
