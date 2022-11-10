import { Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import GridItemCard from "./GridItemCard";
const GridItemSpotlight = ({ heading, data }) => {
  // const []
  return (
    <>
      <Flex mb="20px">
        <Heading
          as="h5"
          size="lg"
          // textAlign="center"
          // my="40px"

          borderBottom="10px solid"
          borderColor="pink"
          // w="auto"
          // textAlign="center"
          style={{ display: "inline", margin: "auto", marginTop: "35px" }}
        >
          {heading}
        </Heading>
      </Flex>
      <Center w="80%" m="auto" gap="30px">
        {data.map(({ id, imgSrc, title }) => {
          return (
            <GridItemCard
              key={id}
              imgSrc={imgSrc}
              heading={heading}
              title={title}
            />
          );
        })}
      </Center>
    </>
  );
};

export default GridItemSpotlight;
