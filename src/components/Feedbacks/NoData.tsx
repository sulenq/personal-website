import React from "react";
import { getLang } from "../../lib/lang";
import { Text, VStack } from "@chakra-ui/react";

export default function NoData(props: any) {
  const lang = getLang();
  return (
    <VStack flex={1} {...props}>
      <Text textAlign={"center"} fontSize={20} fontWeight={600}>
        {lang === "id"
          ? "Yah, yang kamu cari tidak ketemu"
          : "Well, you couldn't find what you were looking for"}
      </Text>
    </VStack>
  );
}
