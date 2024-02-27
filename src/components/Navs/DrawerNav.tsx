import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  Text,
  VStack,
  useDisclosure,
  // Link as ChakraLink,
  HStack,
  Button,
  Image,
} from "@chakra-ui/react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import landingData from "../../constant/landingData";

import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import LangSwitcher from "../LangSwitcher";
import { getLang } from "../../lib/lang";
import { Link } from "react-router-dom";

export default function DrawerNav(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const lang = getLang();

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

      <Drawer isOpen={isOpen} onClose={onClose} size={"full"} placement="top">
        <DrawerOverlay backdropFilter={"blur(20px)"} bg={"blackAlpha.800"} />

        <DrawerContent>
          <DrawerBody p={0} onClick={onClose}>
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
              <HStack
                color={"p.500"}
                justify={"space-between"}
                gap={3}
                onClick={(e) => e.stopPropagation()}
              >
                <HStack
                  py={2}
                  px={4}
                  borderRadius={12}
                  bg={"var(--divider)"}
                  flex={1}
                  as={Link}
                  to={"/"}
                  h={"50px"}
                  _hover={{ bg: "var(--divider2)" }}
                >
                  <Image
                    loading={"lazy"}
                    alt="Logo Distro Studio"
                    src="/logos/logoColor.svg"
                    h={"24px"}
                    mr={1}
                  />
                  <Text className="display" fontSize={20} fontWeight={600}>
                    Distro Studio
                  </Text>
                </HStack>

                <IconButton
                  aria-label="close drawer button"
                  icon={<Icon as={X} fontSize={20} />}
                  borderRadius={12}
                  color={"s.400"}
                  className="btn-solid sm-clicky"
                  bg={"var(--divider)"}
                  onClick={onClose}
                  w={"50px"}
                  h={"50px"}
                />
              </HStack>

              <VStack
                justify={"center"}
                align={"stretch"}
                gap={3}
                onClick={(e) => e.stopPropagation()}
              >
                {landingData.landingNav[lang].map((nav, i) => (
                  <HStack
                    as={Link}
                    p={4}
                    borderRadius={12}
                    bg={"var(--divider)"}
                    key={i}
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
                ))}
              </VStack>

              <HStack
                justify={"space-between"}
                gap={3}
                onClick={(e) => e.stopPropagation()}
              >
                {landingData.sosmed.map((sosmed, i) => (
                  <IconButton
                    w={"100%"}
                    h={"50px"}
                    key={i}
                    aria-label={`${sosmed.name} link`}
                    icon={
                      <Icon
                        as={sosmed.icon}
                        fontSize={20}
                        color={"white"}
                        // weight="fill"
                      />
                    }
                    className="btn-solid"
                    color={"white"}
                  />
                ))}
              </HStack>

              <HStack
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
