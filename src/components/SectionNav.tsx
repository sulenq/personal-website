import { Box, HStack, Text } from "@chakra-ui/react";

export default function SectionNav(props: any) {
  return (
    <HStack opacity={0.5}>
      <Box h={"1px"} w={"20px"} bg={"current"} />
      <Text as={"h1"}>{props.children}</Text>;
      <Box h={"1px"} w={"20px"} bg={"current"} />
    </HStack>
  );
}
