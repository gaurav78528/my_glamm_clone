import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Makeup from "./Makeup";
import Skincare from "./Skincare";
import Rewards from "./Rewards";
import MyCosmeticStudio from "./MyCosmeticStudio";
import Offers from "./Offers";
import Lipstick from "./Lipstick";
import Lips from "./Lips";
import EyeLiner from "./Eyeliner";
import Eyes from "./Eyes";
import Nails from "./Nails";
import Face from "./Face";
import SingleProductPage from "../Components/SingleProductPage";

import Checkout from "./Checkout";

let routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/makeup",
    element: <Makeup />,
  },
  {
    id: 3,
    path: "/skincare",
    element: <Skincare />,
  },
  {
    id: 4,
    path: "/rewards",
    element: <Rewards />,
  },
  {
    id: 5,
    path: "/cosmeticstudio",
    element: <MyCosmeticStudio />,
  },
  {
    id: 6,
    path: "/offers",
    element: <Offers />,
  },
  {
    id: 7,
    path: "/makeup/lips",
    element: <Lips />,
  },
  {
    id: 8,
    path: "/makeup/lips/lipstick",
    element: <Lipstick />,
  },
  {
    id: 9,
    path: "/makeup/eyes",
    element: <Eyes />,
  },
  {
    id: 10,
    path: "/makeup/eyes/eyeliner",
    element: <EyeLiner />,
  },
  {
    id: 11,
    path: "/makeup/nails",
    element: <Nails />,
  },
  {
    id: 12,
    path: "/makeup/face",
    element: <Face />,
  },
  {
    id: 13,
    path: "/makeup/:id",
    element: <SingleProductPage />,
  },
  {
    id: 14,
    path: "/makeup/lips/:id",
    element: <SingleProductPage />,
  },
  {
    id: 15,
    path: "/makeup/eyes/:id",
    element: <SingleProductPage />,
  },
  {
    id: 16,
    path: "/makeup/face/:id",
    element: <SingleProductPage />,
  },
  {
    id: 17,
    path: "/makeup/nails/:id",
    element: <SingleProductPage />,
  },
  {
    id: 18,
    path: "/checkout",
    element: <Checkout />,
  },
  {
    id: 19,
    path: "/makeup/eyes/eyeliner/:id",
    element: <SingleProductPage />,
  },
  {
    id: 20,
    path: "/makeup/lips/lipstick/:id",
    element: <SingleProductPage />,
  },
];
const AllRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element, id }) => {
        return <Route key={id} path={path} element={element}></Route>;
      })}
    </Routes>
  );
};

export default AllRoutes;
