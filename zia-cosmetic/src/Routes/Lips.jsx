import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Common from "../Components/Common";

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
      ;
    </>
  );
};

export default Lips;
