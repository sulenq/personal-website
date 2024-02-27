import { HStack, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function BlackToast({ children }: any) {
  return (
    <HStack minH={"50px"} justify={"center"}>
      <VStack
        bg={useColorModeValue("whiteAlpha.900", "var(--darka2)")}
        // backdropFilter={"blur(5px)"}
        borderRadius={12}
        align={"stretch"}
        w={"fit-content"}
        h={"100%"}
        // bg={"var(--darka2)"}
        py={2}
        px={4}
        justify={"center"}
      >
        {children}
      </VStack>
    </HStack>
  );
}
