import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  RadioGroup,
  Radio,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useDisclosure, useState } from "react";

export function Sidemenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <div>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
