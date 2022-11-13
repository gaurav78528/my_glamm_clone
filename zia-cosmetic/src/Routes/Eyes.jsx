import React from "react";
import Common from "../Components/Common";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Eyes = () => {
  return (
    <>
      <Navbar />
      <Common
        product_type="eyebrow"
        heading="LIP MAKEUP"
        type="/makeup"
        category="/eyes"
      />
      <Footer />
    </>
  );
};

export default Eyes;
