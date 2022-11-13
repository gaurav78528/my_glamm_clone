import { Box, Center, Container, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import GridItemSpotlight from "../Components/GridItem/GridItemSpotlight";
import Slider from "../Components/Slider";
import { data } from "../Components/GridItem/data";
import GridItemRounded from "../Components/GridItem/GridItemRounded";
import Video from "../Components/Video";
import Navbar from "../Components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  // console.log("home");
  return (
    <>
      <Navbar />
      {/* <AllRoutes /> */}
      <Box backgroundColor="#f4f4f4">
        <Slider />
        <NavLink to="/makeup/lips/lipstick">
          <Center w="80%" m="auto">
            <Image
              src="https://files.myglamm.com/site-images/original/Sleek-Desktop---2240-x-614_3.png"
              alt="HeroImage"
            />
          </Center>
        </NavLink>
        <NavLink to="/makeup">
          <Image
            src="https://files.myglamm.com/site-images/original/GS2240x614_2.jpg"
            alt="img"
            mt="40px"
            mb="80px"
          />
        </NavLink>
        <GridItemSpotlight heading="IN THE SPOTLIGHT" data={data.spotlight} />
        <NavLink to="/makeup">
          <Center w="80%" m="auto">
            <Image
              src="https://files.myglamm.com/site-images/original/make2240X614.jpg"
              alt="img"
              my="60px"
            />
          </Center>
        </NavLink>
        <GridItemSpotlight
          heading="LATEST GLAMM LAUNCHES"
          data={data.latestLaunches}
        />
        <GridItemSpotlight
          heading="ESSENTIAL BUDGET BUYS"
          data={data.budgetBuys}
        />

        <Box textAlign="center" my="40px" pb="35px">
          <Heading
            as="h5"
            size="lg"
            borderBottom="10px solid"
            borderColor="pink"
            style={{
              display: "inline",
              margin: "auto",
              marginTop: "35px",
              textAlign: "center",
            }}
          >
            SHOP FROM CATEGORIES
          </Heading>
          <Flex w="80%" margin="auto" justifyContent="space-around" mt="40px">
            {data.categories.map(({ id, imgSrc, category, link }) => {
              return (
                <GridItemRounded
                  key={id}
                  heading="SHOP FROM CATEGORIES"
                  imgSrc={imgSrc}
                  category={category}
                  link={link}
                />
              );
            })}
          </Flex>
        </Box>
        <Center w="80%" m="auto">
          <Image
            src="https://files.myglamm.com/site-images/original/Sleek-banner-Web.jpg"
            alt="img"
            my="10px"
          />
        </Center>
        <Flex w="80%" m="auto" justify="space-between" py="60px">
          <Image
            src="https://files.myglamm.com/site-images/original/final-glow-SK-banner-700x488.gif"
            alt="img"
            w="425px"
          />
          <Image
            src="https://files.myglamm.com/site-images/original/Beauty-Calender-desktop-700x488.jpg"
            alt="img"
            w="425px"
          />
          <Image
            src="https://files.myglamm.com/site-images/original/Influencer-Store700x488.png"
            alt="img"
            w="425px"
          />
        </Flex>
        <Flex w="80%" m="auto" justify="space-between" pb="60px">
          <Image
            src="https://files.myglamm.com/site-images/original/Virtual-Try-On_12.jpg"
            alt="img"
            w="650px"
          />
          <Image
            src="https://files.myglamm.com/site-images/original/banner@2x-3_2.jpg"
            alt="img"
            w="650px"
          />
        </Flex>
        <Center w="80%" m="auto" mb="60px">
          <Image
            src=" https://files.myglamm.com/site-images/original/RE2240x614.jpg"
            alt="banner"
          />
        </Center>
        <Center w="80%" m="auto" my="20px">
          {/* https://files.myglamm.com/site-images/original/RE2240x614.jpg */}

          <Image
            src="https://files.myglamm.com/site-images/original/disclaimer-mgp_1.png"
            alt="disclaimer"
          />
        </Center>
        <Video />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
