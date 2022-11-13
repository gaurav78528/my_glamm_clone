

import React from "react";
import Common1 from "../Components/Common1";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Makeup = () => {
  return (
    <>
      <Navbar />
      <Common1 heading="MAKEUP" type="/makeup" />;
      <Footer/>
    </>
  );
};

export default Makeup;
