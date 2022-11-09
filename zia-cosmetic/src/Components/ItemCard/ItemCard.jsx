import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./itemCard.css";
const ItemCard = ({
  name,
  brand,
  price_sign,
  price,
  product_colors,
  image_link,
}) => {
  return (
    <Box className="item-card">
      <Image boxSize="400px" src={image_link} alt={name} />
      <Flex direction="column" gap="20px">
        <Heading as="h5" size="sm">
          {brand}
        </Heading>
        <Text fontWeight={500} color="gray.400">
          {name}
        </Text>
        <Text fontWeight={700}>{product_colors.length} Shades</Text>
        <Text fontWeight={600}>
          {price_sign}
          {"  "} {price}
        </Text>
      </Flex>
    </Box>
  );
};

export default ItemCard;
