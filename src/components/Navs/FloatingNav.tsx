import {
  Button,
  HStack,
  Image,
  Link as ChakraLink,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import DrawerNav from "./DrawerNav";
import landingData from "../../constant/landingData";
import { getLang } from "../../lib/lang";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import LangSwitcher from "../LangSwitcher";
import useScreenWidth from "../../hooks/useScreenWidth";
import { Link } from "react-router-dom";

export default function FloatingNav() {
  const lang = getLang();
  const sw = useScreenWidth();

  const [showNav, setShowNav] = useState<boolean>(false);
  const prevScrollY = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (sw < 768 || currentScrollY > 50) {
        clearTimeout(scrollTimeout.current);

        if (
          (currentScrollY !== prevScrollY.current && currentScrollY > 50) ||
          sw < 768
        ) {
          setShowNav(false);
          prevScrollY.current = currentScrollY;

          scrollTimeout.current = setTimeout(() => {
            setShowNav(true);
          }, 500);
        }
      } else {
        clearTimeout(scrollTimeout.current);
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current!);
    };
  }, [sw]);

  return (
    <HStack position={"fixed"} left={0} bottom={0} w={"100%"} p={4} zIndex={99}>
      <HStack
        mx={"auto"}
        bg={"blackAlpha.800"}
        backdropFilter={"blur(5px)"}
        transition={"300ms"}
        overflow={"hidden"}
        borderRadius={16}
        p={1}
        gap={1}
        transform={!showNav ? "translateY(calc(100% + 16px))" : ""}
        // border={"1px solid var(--divider)"}
      >
        <Link to="/">
          <Center
            bg={"blackAlpha.800"}
            borderRadius={14}
            w={"48px"}
            h={"48px"}
            flexShrink={0}
          >
            <Image loading={"lazy"} src={"/logo.png"} h={"42px"} />
          </Center>
        </Link>

        {sw < 900 ? (
          <>
            <Center
              bg={"blackAlpha.800"}
              borderRadius={14}
              w={"48px"}
              h={"48px"}
              flexShrink={0}
            >
              <DrawerNav color={"white"} />
            </Center>

            <HStack p={1} borderRadius={14} bg={"blackAlpha.800"} gap={1}>
              <Button
                px={6}
                className="btn-ap clicky"
                color={"white"}
                w={"150px"}
                as={ChakraLink}
                borderRadius={12}
                href="#contact"
              >
                {landingData.hero[lang].contactUs.label}
              </Button>
            </HStack>
          </>
        ) : (
          <HStack p={1} borderRadius={14} bg={"blackAlpha.800"} gap={1}>
            {landingData.landingNav[lang].map((nav, i) => (
              <Button
                key={i}
                className="btn"
                borderRadius={12}
                color={"white"}
                as={Link}
                to={nav.link}
                // border={"1px solid var(--divider3)"}
              >
                {nav.name}
              </Button>
            ))}

            <ColorModeSwitcher
              fontSize={20}
              color={"white"}
              className="btn"
              ml={0}
            />

            <LangSwitcher color={"white"} />

            <Button
              px={6}
              className="btn-ap clicky"
              color={"white"}
              w={"150px"}
              as={ChakraLink}
              borderRadius={12}
              href="#contact"
            >
              {landingData.hero[lang].contactUs.label}
            </Button>
          </HStack>
        )}
      </HStack>
    </HStack>
  );
}
