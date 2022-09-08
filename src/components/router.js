import Carousel from "./Carousel/Carousel";
import Main from "./Main";

export const router = [
  {
    route: "Main",
    path: "/",
    element: <Main />,
  },
  {
    route: "Carousel",
    path: "/carousel",
    element: <Carousel />,
  },
];
