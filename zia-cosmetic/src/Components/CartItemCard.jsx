import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";

const CartItemCard = ({ data }) => {
  const [qty, setQty] = useState(1);
  const [perItemTotal, setPerItemTotal] = useState(0);

  const { name, image_link, price, price_sign } = data;

  const { id } = useParams();
  const handleQty = (val, price) => {
    setQty(qty + val);
    // setPerItemTotal(qty * price);
  };
  const handleDeleteProduct = (id) => {
    console.log("clicked dlete");
    axios
      .delete(`http://localhost:3004/cart`, {
        params: {
          id: id,
        },
      })
      .then((res) => console.log(res.data));
  };
  // useEffect(() => {
  //   setPerItemTotal(qty * price);
  // }, [qty]);

  return (
    <Flex
      direction="column"
      marginBottom="35px"
      border="1px solid #dbd3d3"
      py="20px"
      px="10px"
    >
      <Flex justifyContent="space-between">
        <Flex alignItems="center" gap="20px">
          <Image src={image_link} alt={name} w="100px" />
          <Text fontWeight={700} fontSize="20px">
            {name}
          </Text>
        </Flex>
        <Button variant="ghost" onClick={handleDeleteProduct(id)}>
          <IoCloseSharp fontSize="20px" color="gray" />
        </Button>
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
            onClick={() => handleQty(-1)}
          >
            <CiCircleMinus fontSize="25px" />
          </Button>
          <b>{qty}</b>
          <Button variant="ghost" onClick={() => handleQty(1, price)}>
            <CiCirclePlus fontSize="25px" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItemCard;
