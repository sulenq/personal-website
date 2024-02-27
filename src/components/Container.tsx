import { VStack } from "@chakra-ui/react";
import React from "react";

export default function Container(props: any) {
  return (
    <VStack
      className="container"
      flex={props.flex ? props.flex : 0}
      gap={0}
      px={[5, 6, 8]}
      w={"100%"}
      maxW={"1280px"}
      mx={"auto"}
      align={"stretch"}
      {...props}
    >
      {props.children}
    </VStack>
  );
}
