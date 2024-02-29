import { VStack } from "@chakra-ui/react";

export default function PageContainer(props: any) {
  return (
    <VStack
      gap={0}
      minH={"100vh"}
      w={"100%"}
      align={"stretch"}
      overflowX={"clip"}
      {...props}
    >
      {props.children}
    </VStack>
  );
}
