import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import Navbar from "./Navbar/Navbar";
// import CardItemCard from "../Components/CartItemCard";
import CartItemCard from "../Components/CartItemCard";
// import { HiOutlineShoppingBag } from "react-icons/hi2";

const getSingleUser = (id) => {
  return axios.get(`http://localhost:3004/products`, {
    params: {
      id: id,
    },
  });
};
function SingleUserPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [size, setSize] = React.useState("");
  const [cartItem, setCartItem] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { description, name, category, price_sign, price, image_link } = data;
  console.log(data);
  // console.log(cartItem);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetUsers(id);
  }, [id]);

  const handleGetUsers = (id) => {
    setLoading(true);
    getSingleUser(id)
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

  const handleAddToBag = (data) => {
    //code here
    onOpen();
    axios
      .post(`http://localhost:3004/cart`, { data })
      .then((res) => console.log(res));
  };
  const getCartItems = () => {
    // onOpen();
    // handleAddToBag(data);
    axios.get(`http://localhost:3004/cart`).then((res) => {
      // setCartItem(res.data);
      // console.log(res);
    });
  };

  // console.log(userDetails);
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

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
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
            {/* price_sign price */}
            <Text>(MRP incl. of all taxes)</Text>
            <Box>
              <Button
                colorScheme="blackAlpha"
                size="lg"
                bgColor="black"
                borderRadius="none"
                gap="10px"
                // onClick={() => handleClick("md")}
                // onClick={() => getCartItems()}
                onClick={() => handleAddToBag(data)}
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
                      {`${size} MY BAG (${cartItem.length})`}
                    </Flex>
                  </DrawerHeader>
                  <DrawerBody>
                    <Box>
                      {cartItem.map((item) => {
                        return <CartItemCard data={data} />;
                      })}
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
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text>Total Amount</Text>
                          <Text>Rs 354</Text>
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
}

export default SingleUserPage;
