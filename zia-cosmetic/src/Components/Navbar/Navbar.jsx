import React from "react";
import { haircareData } from "./data";
import "./navbar.css";
import logo from "./logo.png";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

import { IoStorefrontOutline, IoGift, IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box position="sticky" top="0" zIndex="1" w="100%">
      {/* <------------------------------- HEADER   ----------------------------------->  */}
      <Flex px="10%" bgColor="#fee8e8">
        <Flex alignItems="center" justifyContent="center" gap="10px">
          <IoGift color="#ffa2a2" size={20} />
          <Link fontSize={13} fontWeight="600">
            Pick Any Product at Rs 199
          </Link>
        </Flex>
        <Button
          color="#ffa2a2"
          colorScheme="#ffa2a2"
          variant="ghost"
          ml="20px"
          fontSize={13}
          fontWeight="700"
        >
          SHOP NOW
        </Button>
        <Spacer />
        <Flex alignItems="center" justifyContent="center" gap="10px">
          <IoStorefrontOutline size={25} />
          <Link fontSize={15}>MyGlamm Store</Link>
        </Flex>
      </Flex>
      <VStack px="10%" bgColor="#ffffff" align="stretch">
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="center" gap={20} py="10px">
            <NavLink to="/">
              <Image src={logo} alt="logo" w="220px" />
            </NavLink>
            <InputGroup bgColor="#fafafa">
              <InputLeftElement
                pointerEvents="none"
                children={<IoSearch color="grey" size={30} />}
              />
              <Input
                type="text"
                placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc"
                size="lg"
                w="600px"
              />
            </InputGroup>
          </Flex>
          <Spacer />
          <Flex gap={8}>
            <HiOutlineShoppingBag size={40} />
            <Center height="50px">
              <Divider orientation="vertical" colorScheme="black" />
            </Center>
            <HiOutlineUser size={40} />
          </Flex>
        </Flex>
        {/* ----------------------------  NAVBAR ---------------------------- */}
        <Box className="nav_container" py="10px">
          <ul className="nav_items">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/makeup">MAKEUP</NavLink>

              <Flex className="mega-menu">
                <ul>
                  <Heading as="h5" size="sm">
                    LIPS
                    {/* https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick */}
                  </Heading>
                  <li>
                    <NavLink to="makeup/lips/lipstick">Lipstick</NavLink>
                  </li>
                  <li>Crayon Lipstick</li>
                  <li>Hi-Shine Lipstick</li>
                  <li>Matte Lipstick</li>
                  <li>Lip Gloss</li>
                  <li>Lip Liner</li>
                  <li>Lip Balm</li>
                  <li>Lip Glitter</li>
                  <li>Lip Stain</li>
                  <li>Lipstick Set</li>
                  <li>Lip Kit</li>
                  <li>Find Your Lipstick</li>
                </ul>
                <ul>
                  <Heading as="h5" size="sm">
                    FACE
                  </Heading>
                  <li>Fixing Powder</li>
                  <li>Primer</li>
                  <li>Concealer</li>
                  <li>Foundation</li>
                  <li>Compact Powder</li>
                  <li>Setting Powder</li>
                  <li>Banana Powder</li>
                  <li>Sindoor</li>
                  <li>HighLighter</li>
                  <li>Blush</li>
                  <li>Bronzer</li>
                  <li>Cheek Stain</li>
                </ul>
                <ul>
                  <Heading as="h5" size="sm">
                    EYES
                  </Heading>
                  <li>Eye Shadow</li>
                  <li>Eyeliner</li>
                  <li>Eyebrows</li>
                  <li>Glitter</li>
                  <li>Mascara</li>
                  <li>Kajal</li>
                  <li>Eye Combos</li>
                </ul>
                <Flex direction="column">
                  <ul>
                    <Heading as="h5" size="sm">
                      NAILS
                    </Heading>
                    <li>Nail Lacquer</li>
                    <li>Nail Polish</li>
                    <li>Mate Nail Polish</li>
                  </ul>
                  <ul>
                    <Heading as="h5" size="sm">
                      KITS AND COMBOS
                    </Heading>
                    <li>Makeup Kits</li>
                    <li>Bridal Makeup kits</li>
                    <li>Makeup Gifts Sets</li>
                  </ul>
                  <ul>
                    <Heading as="h5" size="sm">
                      MAKEUP ACCESSORIES
                    </Heading>
                    <li>Makeup Brushes</li>
                    <li>Eyeshadow Brushes</li>
                  </ul>
                </Flex>
              </Flex>
            </li>
            <li>
              <NavLink to="/">HAIR CARE</NavLink>
              <Flex className="mega-menu">
                <ul>
                  <Heading as="h5" size="sm">
                    HAIR CARE
                  </Heading>
                  <li>Shampoo</li>
                  <li>Conditioner</li>
                  <li>Hair Oil</li>
                  <li>Serum</li>
                  <li>Hair Mask</li>
                  <li>Combos</li>
                </ul>
                <ul>
                  <li>
                    <Flex gap={5}>
                      {haircareData.map(
                        ({
                          id,
                          imgSrc,
                          title,
                          price,
                          DiscountedPrice,
                          usefulFor,
                        }) => {
                          return (
                            <Box
                              border="1px"
                              borderColor="gray.300"
                              p="10px"
                              key={id}
                              w="200px"
                            >
                              <Image src={imgSrc} alt={title} w="200px" />
                              <Text fontSize="12px">{title}</Text>
                              <Text>{usefulFor}</Text>
                              <Flex>
                                <Text>₹{DiscountedPrice} </Text>
                                <Text>₹{price}</Text>
                              </Flex>
                            </Box>
                          );
                        }
                      )}
                    </Flex>
                  </li>
                </ul>
              </Flex>
            </li>
            <li>
              <NavLink to="/skincare">SKINCARE</NavLink>
              <Flex className="mega-menu" direction="column">
                <ul>
                  <li>Moisturizer</li>
                  <li>Night Cream</li>
                  <li>Eye Cream</li>
                  <li>Body Lotion</li>
                  <li>Serum</li>
                  <li>Sunscreen</li>
                  <li>Skincare Kits</li>
                </ul>
                <ul>
                  <Heading as="h5" size="sm">
                    CLEANSING PRODUCTS
                  </Heading>
                  <li>Cleanser</li>
                  <li>Face Wash</li>
                  <li>Exploliator & Scrub</li>
                </ul>
                <ul>
                  <Heading as="h5" size="sm">
                    MASK
                  </Heading>
                  <li>Sheet Mask</li>
                  <li>Face Pack</li>
                </ul>
              </Flex>
            </li>
            <li>
              <NavLink to="/">SANITIZING CARE</NavLink>
              <Flex className="mega-menu">
                <ul>
                  <Heading as="h5" size="sm">
                    SANITIZING CARE
                  </Heading>
                  <li>Sanitizing Wipes</li>
                  <li>Hand Sanitizer</li>
                  <li>Sanitizing Kits</li>
                  <li>Sanitizing Spray</li>
                </ul>
                <ul>
                  <li>
                    <Flex gap={5}>
                      {haircareData.map(
                        ({
                          id,
                          imgSrc,
                          title,
                          price,
                          DiscountedPrice,
                          usefulFor,
                        }) => {
                          return (
                            <Box
                              border="1px"
                              borderColor="gray.300"
                              p="10px"
                              key={id}
                              w="200px"
                            >
                              <Image src={imgSrc} alt={title} w="200px" />
                              <Text fontSize="12px">{title}</Text>
                              <Text>{usefulFor}</Text>
                              <Flex>
                                <Text>₹{DiscountedPrice} </Text>
                                <Text>₹{price}</Text>
                              </Flex>
                            </Box>
                          );
                        }
                      )}
                    </Flex>
                  </li>
                </ul>
              </Flex>
            </li>
            <li>
              <NavLink to="/">COLLECTION</NavLink>
              <Flex className="mega-menu">
                <ul>
                  <Heading as="h5" size="sm">
                    SHOP BY COLLECTION
                  </Heading>
                  <li>MyCosmetic</li>
                  <li>SUPERFOODS</li>
                  <li>Treat Love Care</li>
                  <li>Clean Beauty</li>
                  <li>POPxo</li>
                  <li>WIPEOUT</li>
                  <li>GLOW Iridescent Brighttening</li>
                  <li>Skincare</li>
                  <li>Manish Malhotra</li>
                  <li>YOUTHfull</li>
                  <li>LIT Collection</li>
                  <li>POSE</li>
                  <li>K.Play</li>
                  <li>Just Dropped</li>
                </ul>
                <ul>
                  <li>
                    <Flex gap={5}>
                      {haircareData.map(
                        ({
                          id,
                          imgSrc,
                          title,
                          price,
                          DiscountedPrice,
                          usefulFor,
                        }) => {
                          return (
                            <Box
                              border="1px"
                              borderColor="gray.300"
                              p="10px"
                              key={id}
                              w="200px"
                            >
                              <Image src={imgSrc} alt={title} w="200px" />
                              <Text fontSize="12px">{title}</Text>
                              <Text>{usefulFor}</Text>
                              <Flex>
                                <Text>₹{DiscountedPrice} </Text>
                                <Text>₹{price}</Text>
                              </Flex>
                            </Box>
                          );
                        }
                      )}
                    </Flex>
                  </li>
                </ul>
              </Flex>
            </li>
            <li>
              <NavLink to="/rewards">REWARDS</NavLink>
              <Flex className="mega-menu"></Flex>
            </li>
            <li>
              <NavLink to="/cosmeticstudio">MYCOSMETIC STUDIO</NavLink>
              <Flex className="mega-menu">
                <ul>
                  <Heading as="h5" size="sm">
                    STUDIO
                  </Heading>
                  <li>BLOGS</li>
                </ul>
              </Flex>
            </li>
            <li>
              <NavLink to="/offers">OFFERS</NavLink>
            </li>
          </ul>
        </Box>
      </VStack>
    </Box>
  );
};

export default Navbar;
