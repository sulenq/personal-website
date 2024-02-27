import {
  Button,
  HStack,
  Image,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import landingData from "../constant/landingData";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import useScreenWidth from "../hooks/useScreenWidth";

import LangSwitcher from "./LangSwitcher";
import { getLang } from "../lib/lang";

export default function LandingNav() {
  const sw = useScreenWidth();
  const lang = getLang();

  return (
    <HStack color={"p.500"} py={4} justify={"space-between"}>
      <HStack w={[null, null, "150px"]} flexShrink={0}>
        <Image loading={"lazy"} src="/logos/logoColor.svg" h={"24px"} />
        <Text className="display" fontSize={20} fontWeight={600} mt={"2px"}>
          Distro Studio
        </Text>
      </HStack>

      {sw > 768 ? (
        <HStack>
          {landingData.landingNav[lang].map((nav, i) => (
            <Button
              as={ChakraLink}
              href={nav.link}
              key={i}
              className="btn-clear"
              _hover={{ color: "p.500" }}
              fontWeight={500}
            >
              {nav.name}
            </Button>
          ))}
        </HStack>
      ) : (
        ""
      )}

      <HStack flexShrink={0} w={[null, null, "150px"]} justify={"flex-end"}>
        <ColorModeSwitcher ml={0} />

        <LangSwitcher />
      </HStack>
    </HStack>
  );
}
