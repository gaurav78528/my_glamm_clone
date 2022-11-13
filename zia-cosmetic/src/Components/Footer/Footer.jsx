import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <Center>
        <Flex
          // id="footerDiv"
          w="80%"
          gap="20px"
          py="50px"
          className="footer"
        >
          <Flex direction="column" gap="20px">
            <NavLink to="/makeup/lips">
              <Heading as="h5" size="xs" color="gray.400">
                LIPS
              </Heading>
            </NavLink>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/makeup/lips/lipstick">Lipstick</NavLink>
              <NavLink>Crayon Lipstick</NavLink>
              <NavLink to="/">Matte Lipstick</NavLink>
              <NavLink to="/">Hi-Shine Lipstick</NavLink>
              <NavLink to="/">Liquid Lipstick</NavLink>
              <NavLink to="/">Lip Gloss</NavLink>
              <NavLink to="/">Hi-Shine Lipgloss</NavLink>
              <NavLink to="/">Lip Liner</NavLink>
              <NavLink to="/">Lip Balm</NavLink>
              <NavLink to="/">Glitter</NavLink>
              <NavLink to="/">Lip Stain</NavLink>
              <NavLink to="/">Lipstick Set</NavLink>
              <NavLink to="/">Lip Kit</NavLink>
              <NavLink to="/">Find Your Lipstick</NavLink>
            </Flex>
          </Flex>
          <Flex direction="column" gap="20px">
            <NavLink to="/makeup/face">
              <Heading as="h5" size="xs" color="gray.400">
                FACE
              </Heading>
            </NavLink>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/">Face Sets</NavLink>
              <NavLink to="/">Fixing Powder</NavLink>
              <NavLink to="/">Primer</NavLink>
              <NavLink to="/">Concealer</NavLink>
              <NavLink to="/">Foundation</NavLink>
              <NavLink to="/">Compact</NavLink>
              <NavLink to="/">Banana Powder</NavLink>
              <NavLink to="/">Highlighter</NavLink>
              <NavLink to="/">Blush</NavLink>
              <NavLink to="/">Bronzer</NavLink>
              <NavLink to="/">Sindoor</NavLink>
              <NavLink to="/">Cheek Stain</NavLink>
              <NavLink to="/">Setting Powder</NavLink>
              <NavLink to="/">Makeup Accessories</NavLink>
              <NavLink to="/">Makeup Brushes</NavLink>
            </Flex>
          </Flex>
          <Flex direction="column" gap="20px">
            <NavLink to="/makeup/eyes">
              <Heading as="h5" size="xs" color="gray.400">
                EYES
              </Heading>
            </NavLink>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/">Eye Shadow</NavLink>
              <NavLink to="/makeup/eyes/eyeliner">Eyeliner</NavLink>
              <NavLink to="/">Eyebrows</NavLink>
              <NavLink to="/">Glitter</NavLink>
              <NavLink to="/">Mascara</NavLink>
              <NavLink to="/">Kajal</NavLink>
              <NavLink to="/">Eyeshadow Brushes</NavLink>
              <NavLink to="/">Eye Combos</NavLink>
            </Flex>
          </Flex>
          <Flex direction="column" gap="20px">
            <NavLink to="/makeup/nails">
              <Heading as="h5" size="xs" color="gray.400">
                NAILS
              </Heading>
            </NavLink>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/">Nail Polish</NavLink>
              <NavLink to="/">Matte Nail Polish</NavLink>
              <NavLink to="/">Nail Lacquer</NavLink>
            </Flex>
          </Flex>
          <Flex direction="column" gap="20px">
            <Heading as="h5" size="xs" color="gray.400">
              SKINCARE
            </Heading>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/">Moisturiser</NavLink>
              <NavLink to="/">Night Cream</NavLink>
              <NavLink to="/">Eye Cream</NavLink>
              <NavLink to="/">Body lotion</NavLink>
              <NavLink to="/">Serum</NavLink>
              <NavLink to="/">Sunscreen</NavLink>
              <NavLink to="/">Skincare Kits</NavLink>
              <NavLink to="/">Cleansing Products</NavLink>
              <NavLink to="/">Exfoliator & Scrub</NavLink>
              <NavLink to="/">Face Wash</NavLink>
              <NavLink to="/">Cleanser</NavLink>
              <NavLink to="/">Mask</NavLink>
              <NavLink to="/">Face Pack</NavLink>
              <NavLink to="/">Sheet Mask</NavLink>
            </Flex>
          </Flex>
          <Flex direction="column" gap="20px">
            <Heading as="h5" size="xs" color="gray.400">
              BATH & BODY
            </Heading>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/">Shower Gels</NavLink>
              <NavLink to="/">Soaps</NavLink>
              <NavLink to="/">Body Lotion</NavLink>
              <NavLink to="/">Body Spray & Mists</NavLink>
              <NavLink to="/">Hand Wash</NavLink>
              <NavLink to="/">Foot Cream</NavLink>
            </Flex>
          </Flex>
          <Flex direction="column" gap="20px">
            <Heading as="h5" size="xs" color="gray.400">
              SANITIZING CARE
            </Heading>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/">Sanitizing Wipes</NavLink>
              <NavLink to="/">Sanitizing Kits</NavLink>
              <NavLink to="/">Sanitizing Spray</NavLink>
              <NavLink to="/">Hand Sanitizer</NavLink>
            </Flex>
          </Flex>
          <Flex direction="column" gap="20px">
            <Heading as="h5" size="xs" color="gray.400">
              KITS AND COMBOS
            </Heading>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/">Makeup Kits</NavLink>
              <NavLink to="/">Bridal Makeup Kits</NavLink>
              <NavLink to="/">Makeup Combo</NavLink>
              <NavLink to="/">Makeup Gift Sets</NavLink>
              <NavLink to="/">Cosmetics Kits & Combos</NavLink>
            </Flex>
          </Flex>
          <Flex direction="column" gap="20px">
            <Heading as="h5" size="xs" color="gray.400">
              HAIR CARE
            </Heading>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/">Shampoo</NavLink>
              <NavLink to="/">Conditioner</NavLink>
              <NavLink to="/">Hair Oil</NavLink>
              <NavLink to="/">Serum</NavLink>
              <NavLink to="/">Hair Mask</NavLink>
              <NavLink to="/">Combos</NavLink>
            </Flex>
          </Flex>
          <Flex direction="column" gap="20px">
            <Heading as="h5" size="xs" color="gray.400">
              MYGLAMMSTUDIO
            </Heading>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/">Style</NavLink>
              <NavLink to="/">Lifestyle</NavLink>
              <NavLink to="/">Trends</NavLink>
              <NavLink to="/">Tips</NavLink>
              <NavLink to="/">Beauty</NavLink>
              <NavLink to="/">Tutorials</NavLink>
            </Flex>
          </Flex>
          <Flex direction="column" gap="20px">
            <Heading as="h5" size="xs" color="gray.400">
              KNOW MORE
            </Heading>
            <Flex direction="column" gap="8px" fontSize="15px" fontWeight="500">
              <NavLink to="/">About Us</NavLink>
              <NavLink to="/">Exclusive Offers</NavLink>
              <NavLink to="/">Refer & Earn</NavLink>
              <NavLink to="/">myglammPARTIES</NavLink>
              <NavLink to="/">Store Locator</NavLink>
              <NavLink to="/">Press & Media</NavLink>
              <NavLink to="/">Terms & Conditions</NavLink>
              <NavLink to="/">Privacy Policy</NavLink>
              <NavLink to="/">Shipping and Delivery policy</NavLink>
              <NavLink to="/">Returns and Replacements</NavLink>
              <NavLink to="/">Loyalty Program Policy</NavLink>
              <NavLink to="/">Sitemap</NavLink>
              <NavLink to="/">Responsible Disclosure Policy</NavLink>
            </Flex>
          </Flex>
        </Flex>
      </Center>
      <Box w="70%" m="auto" mb="15px" fontWeight="500">
        <Text>SUBSCRIBE FOR MYGLAMM EMAILS</Text>
      </Box>
      <Center>
        <Flex
          w="70%"
          justifyContent="space-between"
          alignItems="center"
          mb="60px"
        >
          <Flex alignItems="center" border="1px solid black">
            <Input
              placeholder="Please enter valid email ID"
              size="md"
              py="20px"
              borderRadius="none"
              border="none"
              //   borderColor="black"
            />
            <Button
              colorScheme="blackAlpha"
              bgColor="black"
              color="#fff"
              borderRadius="none"
              px="40px"
              py="20px"
              fontSize="14px"
              fontWeight="400"
              border="none"
            >
              SUBSCRIBE NOW
            </Button>
          </Flex>
          <Flex alignItems="center">
            <Text borderRight="1px solid black" px="13px">
              STAY CONNECTED
            </Text>
            {/* <Divider orientation="vertical" color="black" /> */}
            <Flex gap="13px" px="13px">
              <FaInstagram fontSize="25px" color="#f7719b" />
              <FaTwitter fontSize="25px" color="#6bd2f5" />
              <FaPinterestP fontSize="25px" color="#e1243a" />
              <FaYoutube fontSize="25px" color="#f32e2e" />
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

export default Footer;
