import { VStack } from "@chakra-ui/react";

export default function Wrapper(props: any) {
  return (
    <VStack
      className="wrapper"
      gap={0}
      align={"stretch"}
      overflowX={"clip"}
      {...props}
    >
      {props.children}
    </VStack>
  );
}
