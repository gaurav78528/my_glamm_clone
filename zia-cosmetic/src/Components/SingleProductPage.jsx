import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

import Navbar from "./Navbar/Navbar";

import Cart from "./Cart";
import { CartContext } from "../Context/CartContext/CartContext";

const getSingleProduct = (id) => {
  return axios.get(`http://localhost:3004/products`, {
    params: {
      id: id,
    },
  });
};

// function getUserById(id) {
//   return fetch(
//     // url
//     `http://localhost:3004/cart/${id}`
//   ).then((res) => res.json());
// }

function SingleProductPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { name, category, price_sign, price, image_link } = data;
  // console.log(data);

  const { id } = useParams();
  const { cartItems } = useContext(CartContext);
  // console.log(cartData);

  useEffect(() => {
    handleGetProducts(id);
  }, [id]);
  // console.log("hello");
  const handleGetProducts = (id) => {
    setLoading(true);
    getSingleProduct(id)
      .then((res) => {
        // console.log(res);
        setData(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };
  //  ////////////////////////////////////////////////////////////////////////////////

  // const params = useParams(1);
  // console.log(params);
  // const navigateBag = useNavigate();
  // const navigateWishlist = useNavigate();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [data, setData] = useState(null);

  // Get Data function
  // useEffect(() => {
  //   // setLoading(true);
  //   getUserById(params.id)
  //     .then((res) => {
  //       // setData(res);
  //       console.log(res);
  //       // setLoading(false);
  //       // setError(false);
  //     })
  //     .catch((err) => {
  //       // setLoading(false);
  //       // setError(true);
  //     });
  // }, []);

  // Add To Cart Post function-------------------------------
  // const addToCart = () => {
  //   // setLoading(true);
  //   fetch("http://localhost:4000/cart", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // setLoading(false);
  //       // navigateBag("/bag");
  //     });
  // };

  // Add To Cart function-------------------------------
  // const addToWishlist = () => {
  //   // setLoading(true);
  //   fetch("http://localhost:4000/wishlist", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // setLoading(false);
  //       // navigateWishlist("/wishlist");
  //     });
  // };

  if (loading) {
    return (
      <Center mt="60px">
        <Spinner size="xl" speed="0.7s" />
      </Center>
    );
  }
  if (error) {
    return (
      <Center>
        <Alert status="error" py="50px" px="40%">
          <AlertIcon />
          Opps!! Something Went Wrong.
        </Alert>
      </Center>
    );
  }

  return (
    <>
      <Navbar />

      <Box w="80%" m="auto" border="2px dashed blue">
        <HStack spacing="24px">
          <Flex
            w="40%"
            h="500px"
            border="1px solid red"
            direction="column"
            justifyContent="center"
          >
            <Image
              src={image_link}
              alt="img"
              h="400px"
              w="100%"
              border="1px solid green"
            />
            <Flex gap="15px" justifyContent="center" mt="10px">
              <FaPinterestP fontSize="25px" />
              <FaTwitter fontSize="25px" />
              <FaFacebookF fontSize="25px" />
            </Flex>
          </Flex>
          <Flex
            direction="column"
            w="60%"
            h="auto"
            border="1px solid red"
            gap="20px"
          >
            <Heading as="h2" size="md">
              {name}
            </Heading>
            <Text>{category}</Text>
            <Text>
              {price_sign} {"  "} {price}
            </Text>{" "}
            <Text>(MRP incl. of all taxes)</Text>
            <Box>
              {/* ======================CALLED CART COMPONENT HERE======================================= */}
              <Cart data={data} />
            </Box>
            <Text p="10px" bgColor="gray.100">
              You will receive <b>cashback worth ₹40</b> as myglammPOINTS on
              this purchase
            </Text>
            <Divider />
            <Flex justifyContent="space-between">
              <Heading as="h2" size="md">
                Exclusive Offer
              </Heading>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Read
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul>
                      <li style={{ marginBottom: "10px" }}>
                        <Flex gap="20px">
                          <CiDiscount1 color="pink" fontSize="25px" />
                          <Text>
                            Get Upto 50% OFF. Select a coupon code on checkout.
                          </Text>
                        </Flex>
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <Flex gap="20px">
                          <CiDiscount1 color="pink" fontSize="25px" />
                          <Text>
                            Get up to ₹150 Cashback in Mobikwik. on a minimum
                            purchase of ₹250
                          </Text>
                        </Flex>
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <Flex gap="20px">
                          <CiDiscount1 color="pink" fontSize="25px" />
                          <Text>
                            Get 20% Cashback in Simple Upto Rs.200, No Minimum
                            Order Value.
                          </Text>
                        </Flex>
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <Flex gap="20px">
                          <CiDiscount1 color="pink" fontSize="25px" />
                          <Text>Earn Good Points on this purchase</Text>
                        </Flex>
                      </li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
            <Divider />
          </Flex>
        </HStack>
      </Box>
    </>
  );

  // return;
}

export default SingleProductPage;
