import React from "react";
import Common from "../Components/Common";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Face = () => {
  return (
    <>
      <Navbar />
      <Common
        product_type="foundation"
        heading="FACE MAKEUP"
        type="/makeup"
        category="/face"
      />
      <Footer />
    </>
  );
};

export default Face;
