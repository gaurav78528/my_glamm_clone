
import React from "react";
import Common from "../Components/Common";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Nails = () => {
  return (
    <>
      <Navbar />
      <Common
        product_type="nail_polish"
        heading="NAIL POLISH SETS"
        type="/makeup"
        category="/nails"
      />
       <Footer/>
    </>
  );
};

export default Nails;
