import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Common from "../Components/Common";
import Footer from "../Components/Footer/Footer";

const Lips = () => {
  return (
    <>
      <Navbar />
      <Common
        product_type="lipstick"
        heading="LIP MAKEUP"
        type="/makeup"
        category="/lips"
      />
       <Footer/>
    </>
  );
};

export default Lips;
