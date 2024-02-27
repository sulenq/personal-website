import {
  Icon,
  IconButton,
  Text,
  VStack,
  useDisclosure,
  // Link as ChakraLink,
  HStack,
  Button,
  Box,
} from "@chakra-ui/react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import landingData from "../../constant/landingData";

import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import LangSwitcher from "../LangSwitcher";
import { getLang } from "../../lib/lang";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import formatDate from "../../lib/formatDate";
import { useState } from "react";

export default function DrawerNav(props: any) {
  const [closing, setClosing] = useState(false);
  console.log(closing);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const lang = getLang();
  const currentDate = new Date();
  const handleClose = () => {
    setClosing(true);
  };

  useGSAP(
    () => {
      if (closing) {
        gsap.to(".init", {
          y: -100,
          opacity: 0,
          duration: 0.2,
          stagger: {
            each: 0.05,
          },
          onComplete: () => {
            setClosing(false);
            onClose();
          },
        });
      }
    },
    { dependencies: [closing] }
  );

  useGSAP(
    () => {
      if (!closing) {
        gsap.from(".init", {
          y: -100,
          opacity: 0,
          duration: 0.2,
          stagger: {
            each: 0.05,
          },
        });
      }
    },
    { scope: "#MenuNav", dependencies: [isOpen, closing] }
  );

  return (
    <>
      <IconButton
        {...props}
        aria-label="Nav Drawer"
        icon={<Icon as={List} fontSize={20} />}
        zIndex={99}
        borderRadius={8}
        onClick={onOpen}
        w={"40px !important"}
        h={"40px !important"}
        className="btn sm-clicky"
      />

      {isOpen && (
        <VStack
          id="MenuNav"
          w={"100vw"}
          minH={"100vh"}
          bg={"blackAlpha.800"}
          backdropFilter={"blur(10px)"}
          position={"fixed"}
          left={0}
          top={0}
          justify={"center"}
          zIndex={99}
          onClick={handleClose}
        >
          <VStack
            minH={"100%"}
            w={"100%"}
            maxW={"500px"}
            mx={"auto"}
            py={6}
            px={8}
            align={"stretch"}
            justify={"center"}
            gap={3}
          >
            <VStack className="init" justify={"space-between"} mb={4}>
              <Text>{formatDate(currentDate.toString())}</Text>
            </VStack>
            <HStack
              color={"p.500"}
              justify={"space-between"}
              gap={3}
              onClick={(e) => e.stopPropagation()}
            >
              <HStack
                w={"100%"}
                className="init"
                justify={"space-between"}
                gap={3}
                onClick={(e) => e.stopPropagation()}
              >
                <ColorModeSwitcher
                  w={"100%"}
                  h={"50px"}
                  fontSize={20}
                  color={"white"}
                  className="btn-solid"
                  ml={"auto"}
                />

                <LangSwitcher
                  color={"white"}
                  ml={"auto"}
                  w={"100%"}
                  h={"50px"}
                  className="btn-solid"
                />
              </HStack>

              <Box className="init">
                <IconButton
                  aria-label="close drawer button"
                  icon={<Icon as={X} fontSize={20} />}
                  borderRadius={12}
                  color={"s.400"}
                  className="btn-solid sm-clicky"
                  bg={"var(--divider)"}
                  onClick={handleClose}
                  w={"50px"}
                  h={"50px"}
                />
              </Box>
            </HStack>

            <VStack
              justify={"center"}
              align={"stretch"}
              gap={3}
              onClick={(e) => e.stopPropagation()}
            >
              {landingData.landingNav[lang].map((nav, i) => (
                <Box className="init" key={i}>
                  <HStack
                    as={Link}
                    p={4}
                    borderRadius={12}
                    bg={"var(--divider)"}
                    to={nav.link}
                    justify={"space-between"}
                    _hover={{ bg: "var(--divider2)" }}
                    transition={"200ms"}
                  >
                    <Text
                      fontSize={32}
                      fontWeight={600}
                      color={"white"}
                      transition={"200ms"}
                      textAlign={"left"}
                      wordBreak={"break-word"}
                    >
                      {nav.name}
                    </Text>

                    <Icon as={ArrowUpRight} fontSize={32} />
                  </HStack>
                </Box>
              ))}
            </VStack>

            <HStack
              className="init"
              justify={"space-between"}
              gap={3}
              onClick={(e) => e.stopPropagation()}
            >
              {landingData.sosmeds.map((sosmed, i) => (
                <IconButton
                  w={"100%"}
                  h={"50px"}
                  key={i}
                  aria-label={`${sosmed.name} link`}
                  icon={
                    <Icon
                      as={sosmed.icon}
                      fontSize={24}
                      color={"white"}
                      // weight="fill"
                    />
                  }
                  className="btn-solid"
                  color={"white"}
                />
              ))}
            </HStack>

            <Box className="init">
              <Button
                w={"100%"}
                h={"50px"}
                px={6}
                className="btn-ap clicky"
                color={"white"}
                onClick={() => {
                  setTimeout(() => {
                    const contact = document.getElementById("contact");
                    contact?.scrollIntoView({
                      block: "nearest",
                      inline: "center",
                    });
                  }, 300);
                }}
                fontSize={"18px !important"}
              >
                {lang === "id" ? "Hubungi Saya" : "Contact Me"}
              </Button>
            </Box>
          </VStack>
        </VStack>
      )}
    </>
  );
}
