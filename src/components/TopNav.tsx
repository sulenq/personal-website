import { Box, Button, HStack, Image } from "@chakra-ui/react";
import landingData from "../constant/landingData";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import useScreenWidth from "../hooks/useScreenWidth";

import LangSwitcher from "./LangSwitcher";
import { getLang } from "../lib/lang";
import NavDrawer from "./Navs/DrawerNav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TopNav(props: any) {
  const sw = useScreenWidth();
  const lang = getLang();

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [scrollYPos, setScrollYPos] = useState<number>(window.scrollY);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (scrollYPos < currentScrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setScrollYPos(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYPos]);

  return (
    <Box
      id="topNav"
      animation={"float-in-from-top 1s"}
      zIndex={99}
      position={"sticky"}
      top={"-1px"}
      left={0}
      // p={1}
      transform={scrollDirection === "up" ? "" : "translateY(-80px)"}
      transition={"200ms"}
      {...props}
    >
      <HStack
        justify={"space-between"}
        py={2}
        px={[5, 6, 8]}
        w={"100%"}
        maxW={"1440px"}
        mx={"auto"}
        // bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")}
        // backdropFilter={"blur(5px)"}
        borderRadius={"0 0 12px 12px"}
      >
        <HStack
          flexShrink={0}
          cursor={"pointer"}
          as={Link}
          to={"/"}
          w={[null, null, "300px"]}
        >
          <Image
            loading={"lazy"}
            src="/logos/logoColor.svg"
            h={"24px"}
            borderRadius={"0 !important"}
          />
        </HStack>

        {sw > 850 ? (
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

          {sw <= 850 && <NavDrawer color={props?.color || "current"} />}
        </HStack>
      </HStack>
    </Box>
  );
}
