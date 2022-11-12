import {
  Alert,
  AlertIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from '../Components/Navbar/Navbar'
import ItemCard from "../Components/ItemCard/ItemCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function getProducts(product_type) {
  return axios.get(`http://localhost:3004/products`, {
    params: {
      product_type: product_type,
    },
  });
}

const Common = ({ product_type, heading, type, category, subcategory }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts(product_type)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        // console.log(err);
      });
  }, []);

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
      <Divider />
      <Flex w="70%" m="auto" justifyContent="center" py="20px">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">HOME</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href={`/${type}`}>MAKEUP</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href={`/${type}/${category}`}>EYES</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Divider w="70%" m="auto" />

      <Heading as="h1" size="2xl" textAlign="center" my="40px">
        {heading}
      </Heading>

      <Center w="70%" m="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          {data.map(
            ({
              id,
              name,
              brand,
              price_sign,
              price,
              product_colors,
              image_link,
            }) => {
              return (
                // ${subcategory}/
                <NavLink key={id} to={`${type}${category}/${id}`}>
                  <ItemCard
                    key={id}
                    name={name}
                    brand={brand}
                    price_sign={price_sign}
                    price={price}
                    product_colors={product_colors}
                    image_link={image_link}
                  />
                </NavLink>
              );
            }
          )}
        </Grid>
      </Center>
    </>
  );
};

export default Common;
