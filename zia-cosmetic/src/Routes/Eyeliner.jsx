import React from "react";
import Common3 from "../Components/Common3";
import Navbar from "../Components/Navbar/Navbar";

const Eyeliner = () => {
  return (
    <>
      <Navbar />
      <Common3
        product_type="eyeliner"
        heading="EYELINER"
        type="/makeup"
        category="/eyes"
        subcategory="/eyeliner"
      />
    </>
  );
};

export default Eyeliner;
