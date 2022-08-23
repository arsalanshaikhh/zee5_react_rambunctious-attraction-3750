import React from "react";
import {
  Image,
  Text,
  Center,
  Input,
  Button,
  Flex,
  Square,
} from "@chakra-ui/react";

import { HamburgerIcon, QuestionIcon, DragHandleIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    // <div className={styles.navcon}>
    //   <Box boxSize="sm">
    //     <Image h='60px'
    //       src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.51.88"
    //       alt="Zee5"
    //     />
    //   </Box>
    //   <Text fontSize="2*l">Home</Text>
    //   <Text fontSize="2*l">Tv Shows</Text>
    //   <Text fontSize="2*l">Movies</Text>

    // </div>
    <Flex
      h="80px"
      bg="rgb(15,6,23)"
      p="2%"
      w="100%"
      justifyContent="space-between"
    >
      <Flex w="35%" justifyContent="space-evenly" alignItems="align">
        <Center>
          <Image
            h="50px"
            src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.51.88"
            alt="Zee5"
          />
        </Center>

        <Square color="white">
          <Text>Home</Text>
        </Square>

        <Square color="white">
          <Text>TV Shows</Text>
        </Square>

        <Square color="white">
          <Text>Movies</Text>
        </Square>

        <Square color="white">
          <DragHandleIcon boxSize={5} />
        </Square>
      </Flex>

      <Flex w="50%" justifyContent="space-evenly" alignItems="align">
        <Square color="white" flexGrow="7">
          <Input
            isInvalid
            errorBorderColor="white"
            placeholder="Search For Movies, shows etc."
            size="sm"
          />
        </Square>

        <Square color="white" flexGrow="1">
          <QuestionIcon boxSize={6} />
        </Square>

        <Square color="white" flexGrow="1">
          <Button colorScheme="white" variant="outline" size="sm">
            LOGIN
          </Button>
        </Square>

        <Square color="white" flexGrow="1">
          <Button colorScheme="purple" size="sm">
            BUY PLAN
          </Button>
        </Square>

        {/* <Square color="white" flexGrow="1">
          <HamburgerIcon boxSize={6} />
        </Square> */}

        <Square color="white" flexGrow="1">
          <HamburgerIcon boxSize={6} />
        </Square>
      </Flex>
    </Flex>

    // <Wrap w="100%" bg="red.200">
    //   <WrapItem>
    //     <Center w="100%" h="80px" bg="red.200">
    //       <Image
    //         h="60px"
    //         src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.51.88"
    //         alt="Zee5"
    //       />
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="green.200">
    //       Home
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="tomato">
    //       Tv Shows
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="blue.200">
    //       Movies
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="blue.200">
    //       Box 4
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="blue.200">
    //       Box 4
    //     </Center>
    //   </WrapItem>
    //   <WrapItem>
    //     <Center w="180px" h="80px" bg="blue.200">
    //       Box 4
    //     </Center>
    //   </WrapItem>
    // </Wrap>
  );
}

export default Navbar;

//
