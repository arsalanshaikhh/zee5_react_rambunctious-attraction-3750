import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  Flex,
  SimpleGrid,
  ListItem,
  Box,
  UnorderedList,
  Stack,
  Text,
  Square,
  Image,
  Center,
} from "@chakra-ui/react";

function Footer() {
  // const navigate = useNavigate();

  return (
    <div>
      <SimpleGrid
        columns={[1, 3, 6, 6]}
        spacing="2%"
        p="3% 5%"
        color="white"
        bg="rgb(15,6,23)"
        w="100%"
      >
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Hindi Movies</ListItem>
            <ListItem>Hindi Movies</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>

        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Movies By Genre</ListItem>
            <ListItem>Movies By Genre</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Movies By Celeb</ListItem>
            <ListItem>Movies By Celeb</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Movies By Year</ListItem>
            <ListItem>Movies By Year</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Top Bollywood Movies</ListItem>
            <ListItem>Top Bollywood Movies</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Top South Movies</ListItem>
            <ListItem>Movies By Language</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>
      {/*  */}
      <Flex
        h="80px"
        bg="rgb(15,6,23)"
        p="2%"
        w="100%"
        justifyContent="space-between"
      >
        <Flex h="80px" bg="rgb(15,6,23)" w="42%" justifyContent="space-evenly">
          <Square color="white">
            <Text>About Us</Text>
          </Square>

          <Square color="white">
            <Text>Help Center</Text>
          </Square>

          <Square color="white">
            <Text>Privacy Policy</Text>
          </Square>

          <Square color="white">
            <Text>Terms of Use</Text>
          </Square>

          <Square color="white">
            <Text></Text>
          </Square>
        </Flex>
      </Flex>
      {/*  */}
      <Flex
        h="80px"
        bg="rgb(15,6,23)"
        p="2%"
        w="100%"
        justifyContent="space-between"
      >
        <Flex h="80px" bg="rgb(15,6,23)" w="40%" justifyContent="space-evenly">
          <Square color="white">
            <Text>Download Apps</Text>
          </Square>

          <Center>
            <Image
              h="40px"
              src="https://www.zee5.com/images/play_store.png?ver=2.51.89"
              alt="Play Store"
            />
          </Center>

          <Center>
            <Image
              h="40px"
              src="https://www.zee5.com/images/app_store.png?ver=2.51.89"
              alt="App Store"
            />
          </Center>
          <Square color="white">
            <Text></Text>
          </Square>
        </Flex>
        <Flex h="80px" bg="rgb(15,6,23)" w="40%" justifyContent="space-evenly">
          <Square color="white">
            <Text>Connect with us</Text>
          </Square>

          <Center>
            {/* <NavLink to={"https://www.facebook.com/ZEE5/"}> */}

            <a href="https://www.facebook.com/ZEE5/">
              <Image
                bg="white"
                h="40px"
                borderRadius="50%"
                border="1px solid white"
                src="https://img.icons8.com/windows/344/facebook-new.png"
                alt="Facebook"
              />
            </a>
            {/* </NavLink> */}
          </Center>
          <Center>
            <Image
              bg="white"
              h="40px"
              borderRadius="50%"
              border="1px solid white"
              src="https://img.icons8.com/windows/344/instagram-new.png"
              alt="Instagram"
            />
          </Center>
          <Center>
            <Image
              bg="white"
              h="40px"
              borderRadius="50%"
              border="1px solid white"
              src="https://img.icons8.com/windows/344/twitter.png"
              alt="Twitter"
            />
          </Center>
          <Center>
            <Image
              bg="white"
              h="40px"
              borderRadius="50%"
              border="1px solid white"
              src="https://img.icons8.com/windows/344/youtube-play.png"
              alt="Youtube"
            />
          </Center>

          <Square color="white">
            <Text></Text>
          </Square>
        </Flex>
      </Flex>
      {/*  */}

      <SimpleGrid
        columns={[1, 3, 5, 5]}
        spacing="2%"
        p="3% 5%"
        color="white"
        bg="rgb(15,6,23)"
        w="100%"
      >
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Popular TV Shows</ListItem>
            <ListItem>Hindi Movies</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>

        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Premium Movies</ListItem>
            <ListItem>Hindi Movies</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Popular LIVE TV Channels</ListItem>
            <ListItem>Hindi Movies</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Popular Web Series</ListItem>
            <ListItem>Hindi Movies</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>
        <Box w="1fr">
          <UnorderedList listStyleType="none" textAlign="left">
            <ListItem fontWeight="bold">Bollywood Top Celebrities</ListItem>
            <ListItem>Hindi Movies</ListItem>
            <ListItem>Telgu Movies</ListItem>
            <ListItem>Tamil Movies</ListItem>
            <ListItem>Kannada Movies</ListItem>
            <ListItem>Marathi Movies</ListItem>
            <ListItem textDecoration="">Bengali Movies</ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>

      <Stack color="white" bg="rgb(15,6,23)" w="100%" p="3% 5%">
        <Box>
          <p>
            Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla
            Firefox 75+, Safari 5.1.5+
          </p>
        </Box>
        <Box>
          <p>
            Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights
            reserved.
          </p>
        </Box>
      </Stack>
    </div>
  );
}

export default Footer;
