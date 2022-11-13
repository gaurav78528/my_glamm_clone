import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartContext } from "../Context/CartContext/CartContext";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Spinner,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { BsArrowRight } from "react-icons/bs";

import CartItemCard from "../Components/CartItemCard";

function Cart({ data: item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const { description, name, category, price_sign, price, image_link } = data;
  // console.log(data);
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems, getTotalAmount } = useContext(CartContext);
  // console.log(cartItem);

  const handleCart = (item) => {
    // setLoading(true);
    // console.log(data);
    addToCart({ ...item, qty: 1 });
    onOpen();
    // fetch("http://localhost:3004/cart", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     // console.log(res);
    //     // setLoading(false);
    //     // navigateBag("/bag");
    //   });
  };

  return (
    <>
      {/* BUTTON OF ADD TO CART */}
      <Button
        colorScheme="blackAlpha"
        size="lg"
        bgColor="black"
        borderRadius="none"
        // gap="10px"
        // onClick={() => handleClick("md")}
        onClick={() => handleCart(item)}
        // addToCart({ id, onOpen })
        //
        // onClick={() => getCartItems()}
        // onClick={() => handleAddToBag(data)}
      >
        <HiOutlineShoppingBag fontSize="30px" /> ADD TO BAG
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="30px" py="40px" bgColor="gray.100">
            <Flex alignItems="center" gap="20px">
              <HiOutlineShoppingBag fontSize="50px" />
              {/* ${"size"} */}
              {`MY BAG (${cartItems.length})`}
            </Flex>
          </DrawerHeader>
          {/* .data[0].params.id */}
          <DrawerBody>
            <Box>
              {/* {cartItem.map((item, id) => {
                return <CartItemCard key={id} data={item} />;
              })} */}
              <CartItemCard unique_id={id} />
            </Box>
            <Box
              // p="25px"
              position="fixed"
              bottom="0px"
              right="0px"
              bgColor="#fff"
              w="100%"
              zIndex="1"
            >
              <Divider />
              <Box p="25px">
                <Text>
                  <b>Congrats! </b>You're eligible for free gift
                  <br />
                  <Button variant="ghost" w="100%">
                    <b>Please select.</b>
                  </Button>
                </Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>Total Amount</Text>
                  <Text>$ {getTotalAmount()}</Text>
                </Flex>
              </Box>
              <Flex
                w="100%"
                bgColor="black"
                p="15px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button
                  colorScheme="blackAlpha"
                  borderRadius="none"
                  fontSize="24px"
                  onClick={() => navigate("/checkout")}
                >
                  Checkout
                </Button>
                <BsArrowRight fontSize="25px" color="#fff" />
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Cart;
