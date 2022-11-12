import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const GridItemCard = ({ imgSrc, title }) => {
  return (
    <>
      <Box position="relative" textAlign="center">
        <Image src={imgSrc} alt="img" />
        <Heading
          as="h3"
          size="md"
          position="absolute"
          bottom="0px"
          w="100%"
          m="auto"
          py="15px"
          // backdropFilter="blur(5px)"
          backgroundColor="#ffffffb0"
        >
          {title}
        </Heading>
      </Box>
    </>
  );
};

export default GridItemCard;
