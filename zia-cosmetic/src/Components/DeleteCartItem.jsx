import { Button } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext/CartContext";

const DeleteCartItem = ({ id }) => {
  // Main funciton-------------------------------------

  const { removeFromCart } = useContext(CartContext);
  const deletePost = () => {
    // window.location.reload(false);
    // setLoader(true);
    fetch(`http://localhost:3004/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => removeFromCart(id))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button variant="ghost" onClick={deletePost}>
        {/* DELETE BUTTON */}
        <FaRegTrashAlt fontSize="20px" color="red" />
        {/* <IoCloseSharp fontSize="20px" color="gray" /> */}
      </Button>
    </>
  );
};

export default DeleteCartItem;
