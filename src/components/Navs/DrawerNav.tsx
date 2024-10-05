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
  useColorModeValue,
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
import { useEffect, useState } from "react";

export default function DrawerNav(props: any) {
  const [closing, setClosing] = useState(false);
  const bg = useColorModeValue("white", "black");
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
    { scope: "#menuNav", dependencies: [closing] }
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
    { scope: "#menuNav", dependencies: [isOpen, closing] }
  );

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0";
    }
  }, [isOpen]);

  return (
    <Box id="menuNav">
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
          w={"100vw"}
          h={"100vh"}
          justify={"start"}
          bg={bg}
          position={"fixed"}
          top={0}
          left={0}
          zIndex={99}
          color={"current"}
          onClick={handleClose}
          overflowY={"auto"}
        >
          <VStack
            overflowY={"auto"}
            w={"100%"}
            maxW={"500px"}
            mx={"auto"}
            my={"auto"}
            py={6}
            pb={12}
            px={8}
            align={"stretch"}
            justify={"start"}
            gap={3}
          >
            <VStack className="init" justify={"space-between"} mb={4}>
              <Text fontSize={16}>
                {formatDate(
                  currentDate.toString(),
                  lang === "id" ? "id-ID" : "en-EN"
                )}
              </Text>
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
                  className="btn-solid"
                  ml={"auto"}
                  borderRadius={12}
                />

                <LangSwitcher
                  ml={"auto"}
                  w={"100%"}
                  h={"50px"}
                  borderRadius={12}
                  className="btn-solid"
                />
              </HStack>

              <Box className="init">
                <IconButton
                  aria-label="close drawer button"
                  icon={<Icon as={X} fontSize={20} />}
                  borderRadius={12}
                  color={"s.500"}
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
                    px={6}
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

                      // weight="fill"
                    />
                  }
                  className="btn-solid"
                />
              ))}
            </HStack>

            <Box className="init">
              <Button
                w={"100%"}
                h={"50px"}
                px={6}
                className="btn-ap clicky"
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

            <Text textAlign={"center"} mt={5} className="init" opacity={0.5}>
              2024 © Fatwa Linovera. All right reserved.
            </Text>
          </VStack>
        </VStack>
      )}
    </Box>
  );
}
