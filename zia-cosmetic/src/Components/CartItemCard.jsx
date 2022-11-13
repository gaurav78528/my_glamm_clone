import { Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext/CartContext";
import DeleteCartItem from "./DeleteCartItem";

// function fetchProduct() {
//   return fetch(
//     // url
//     `http://localhost:3004/cart`
//   ).then((res) => res.json());
// }
const CartItemCard = ({ unique_id }) => {
  // const [data, setData] = useState([]);
  // const params = useParams();

  // //  Get Data function
  // useEffect(() => {
  //   // setLoading(true);
  //   fetchProduct(params.id)
  //     .then((res) => {
  //       // setData(res);
  //       setData(res);
  //       // setLoading(false);
  //       // setError(false);
  //     })
  //     .catch((err) => {
  //       // setLoading(false);
  //       // setError(true);
  //     });
  // }, []);4

  const { cartItems, addQTY, removeQTY } = useContext(CartContext);

  return (
    <>
      {cartItems.map((item, idx) => {
        const { id, name, image_link, price, price_sign, qty } = item;
        return (
          <Flex
            direction="column"
            marginBottom="35px"
            border="1px solid #dbd3d3"
            py="20px"
            px="10px"
            key={id + idx}
          >
            <Flex justifyContent="space-between">
              <Flex alignItems="center" gap="20px">
                <Image src={image_link} alt={name} w="100px" />
                <Text fontWeight={700} fontSize="20px">
                  {name}
                </Text>
              </Flex>
              <DeleteCartItem id={id} />
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontWeight={400} fontSize="30px">
                {price_sign}
                {"   "}
                {price}
              </Text>
              <Flex alignItems="center">
                <Text color="gray" fontWeight="700">
                  QTY.
                </Text>
                <Button
                  variant="ghost"
                  disabled={qty === 1}
                  onClick={() => removeQTY(id)}
                >
                  <CiCircleMinus fontSize="25px" />
                </Button>
                <b>{qty}</b>
                <Button variant="ghost" onClick={() => addQTY(id)}>
                  <CiCirclePlus fontSize="25px" />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
};

export default CartItemCard;
