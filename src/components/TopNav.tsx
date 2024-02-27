import {
  Button,
  HStack,
  Image,
  Text,
  // Link as ChakraLink,
} from "@chakra-ui/react";
import landingData from "../constant/landingData";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import useScreenWidth from "../hooks/useScreenWidth";

import LangSwitcher from "./LangSwitcher";
import { getLang } from "../lib/lang";
import NavDrawer from "./Navs/DrawerNav";
import { Link } from "react-router-dom";

export default function TopNav(props: any) {
  const sw = useScreenWidth();
  const lang = getLang();

  return (
    <HStack
      id="topNav"
      animation={"float-in-from-top 1s"}
      justify={"space-between"}
      py={4}
      px={[5, 6, 8]}
      w={"100%"}
      maxW={"1440px"}
      mx={"auto"}
      zIndex={99}
      // position={"fixed"}
      // top={0}
      // left={0}
      {...props}
    >
      <HStack
        flexShrink={0}
        cursor={"pointer"}
        as={Link}
        to={"/"}
        w={[null, null, "300px"]}
      >
        <Image loading={"lazy"} src="/logos/logoColor.svg" h={"24px"} />
        {sw >= 350 && (
          <Text
            className="display"
            fontSize={20}
            fontWeight={600}
            mt={"2px"}
            color={"p.500"}
          >
            Distro Studio
          </Text>
        )}
      </HStack>

      {sw > 1200 ? (
        <HStack gap={0}>
          {landingData.landingNav[lang].map((nav, i) => (
            <Button
              as={Link}
              to={nav.link}
              key={i}
              flexShrink={0}
              fontWeight={600}
              className="btn-clear"
              _hover={{ color: "p.500", transform: "translateY(-2px)" }}
              transition={"200ms"}
              px={3}
              color={props?.color || "current"}
            >
              {nav.name}
            </Button>
          ))}
        </HStack>
      ) : (
        ""
      )}

      <HStack flexShrink={0} w={[null, null, "300px"]} justify={"flex-end"}>
        <ColorModeSwitcher ml={0} color={props?.color || "current"} />

        <LangSwitcher color={props?.color || "current"} />

        {sw <= 1200 && <NavDrawer color={props?.color || "current"} />}
      </HStack>
    </HStack>
  );
}
