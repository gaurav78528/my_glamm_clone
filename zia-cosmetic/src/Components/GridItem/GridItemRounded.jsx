import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const GridItemRounded = ({ heading, imgSrc, category, link }) => {
  return (
    <>
      {/* <Center w="70%" m="auto"> */}
      {/* <Center w="80%" m="auto" gap="30px"> */}
      <NavLink to={link}>
        <Flex direction="column" textAlign="center" gap="15px">
          <Image
            src={imgSrc}
            alt={category}
            borderRadius="50%"
            border="5px solid"
            borderColor="white"
          />
          <Heading as="h6" size="xs">
            {category}
          </Heading>
        </Flex>
      </NavLink>
      {/* </Center> */}
      {/* </Center> */}
    </>
  );
};

export default GridItemRounded;
