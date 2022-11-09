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

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/makeup" element={<Makeup />}></Route>
      <Route path="/skincare" element={<Skincare />}></Route>
      <Route path="/rewards" element={<Rewards />}></Route>
      <Route path="/cosmeticstudio" element={<MyCosmeticStudio />}></Route>
      <Route path="/offers" element={<Offers />}></Route>
      <Route path="/makeup/lips" element={<Lips />}></Route>
      <Route path="/makeup/lips/lipstick" element={<Lipstick />}></Route>
    </Routes>
  );
};

export default AllRoutes;
