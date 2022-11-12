// import {
//   Alert,
//   AlertIcon,
//   Box,
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   Center,
//   Container,
//   Divider,
//   Flex,
//   Grid,
//   Heading,
//   Spinner,
// } from "@chakra-ui/react";
// import React from "react";
// import { NavLink } from "react-router-dom";
// // import Navbar from '../Components/Navbar/Navbar'
// import ItemCard from "../Components/ItemCard/ItemCard";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import Navbar from "../Components/Navbar/Navbar";

// function getProducts() {
//   return axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json`, {
//     params: {
//       product_type: "eyeliner",
//     },
//   });
// }

// const EyeLiner = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     getProducts()
//       .then((res) => {
//         setData(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setLoading(false);
//         setError(true);
//         console.log(err);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <Center mt="60px">
//         <Spinner size="xl" speed="0.7s" />
//       </Center>
//     );
//   }
//   if (error) {
//     return (
//       <Center>
//         <Alert status="error" py="50px" px="40%">
//           <AlertIcon />
//           Opps!! Something Went Wrong.
//         </Alert>
//       </Center>
//     );
//   }
//   return (
//     <>
//       <Navbar />
//       <Divider />
//       <Flex w="70%" m="auto" justifyContent="center" py="20px">
//         <Breadcrumb>
//           <BreadcrumbItem>
//             <BreadcrumbLink href="/">HOME</BreadcrumbLink>
//           </BreadcrumbItem>

//           <BreadcrumbItem>
//             <BreadcrumbLink href="/makeup">MAKEUP</BreadcrumbLink>
//           </BreadcrumbItem>

//           <BreadcrumbItem isCurrentPage>
//             <BreadcrumbLink href="/makeup/eyes">EYE MAKEUP</BreadcrumbLink>
//           </BreadcrumbItem>

//           <BreadcrumbItem isCurrentPage>
//             <BreadcrumbLink href="/makeup/eyes/eyeliner">
//               EYE LINER
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//         </Breadcrumb>
//       </Flex>
//       <Divider w="70%" m="auto" />

//       <Heading as="h1" size="2xl" textAlign="center" my="40px">
//         EYELINER
//       </Heading>

//       <Center w="70%" m="auto">
//         {/* <Center w="70%" m="auto" mt="40px"> */}

//         {/* </Center> */}

//         <Grid templateColumns="repeat(3, 1fr)" gap={10}>
//           {data.map(
//             ({
//               id,
//               name,
//               brand,
//               price_sign,
//               price,
//               product_colors,
//               image_link,
//             }) => {
//               return (
//                 <ItemCard
//                   key={id}
//                   name={name}
//                   brand={brand}
//                   price_sign={price_sign}
//                   price={price}
//                   product_colors={product_colors}
//                   image_link={image_link}
//                 />
//               );
//             }
//           )}
//         </Grid>
//       </Center>
//     </>
//   );
// };

// export default EyeLiner;

import React from "react";
import Common from "../Components/Common";
import Common3 from "../Components/Common3";
import Navbar from "../Components/Navbar/Navbar";

const Eyeliner = () => {
  return (
    <>
      <Navbar />
      <Common3
        product_type="eyeliner"
        heading="EYELINER"
        type="/makeup"
        category="/eyes"
        subcategory="/eyeliner"
      />
    </>
  );
};

export default Eyeliner;
