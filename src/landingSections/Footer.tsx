import {
  Heading,
  Link as ChakraLink,
  VStack,
  HStack,
  Icon,
  Text,
  SimpleGrid,
  Image,
  IconButton,
  Stack,
  Center,
} from "@chakra-ui/react";
import Container from "../components/Container";
import landingData from "../constant/landingData";

import { Envelope, Phone } from "@phosphor-icons/react";
import { iconSize } from "../constant/sizes";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import LangSwitcher from "../components/LangSwitcher";
import { getLang } from "../lib/lang";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";

export default function Footer() {
  const lang = getLang();

  useGSAP(
    () => {
      gsap.from(".footerItem", {
        scrollTrigger: scrollTriggerConfig("#footerContent"),
        scale: 0,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#footer" }
  );

  return (
    <VStack
      id={"footer"}
      align={"stretch"}
      bg={"black"}
      bgImage={"/images/footer/hero.jpg"}
      bgSize={"cover"}
      bgPos={"center top"}
      color={"white"}
      position={"relative"}
      overflowX={"hidden"}
    >
      <VStack
        id="footerContent"
        py={20}
        gap={0}
        align={"stretch"}
        bg={"linear-gradient(to bottom, black, transparent)"}
      >
        <Container zIndex={2} maxW={"1440px"} mt={32}>
          <Stack flexDir={["column", null, "row"]} gap={3}>
            <VStack
              className="footerItem"
              w={["100%", null, "65%"]}
              align={"stretch"}
              gap={0}
              bg={"black"}
              // backdropFilter={"blur(5px)"}
              borderRadius={12}
              p={10}
            >
              <VStack align={"stretch"} mb={20}>
                <Image
                  loading={"lazy"}
                  src="/images/companyLogoColor.png"
                  h={"50px"}
                  objectFit={"contain"}
                  mr={"auto"}
                  mb={4}
                />

                <Heading fontSize={20}>
                  {landingData.footer[lang].companyName}
                </Heading>

                <HStack>
                  <Icon as={Envelope} fontSize={iconSize} />
                  <Text>{landingData.footer[lang].email}</Text>
                </HStack>

                <HStack>
                  <Icon as={Phone} fontSize={iconSize} />
                  <Text>{landingData.footer[lang].phone}</Text>
                </HStack>
              </VStack>

              <SimpleGrid columns={[1, null, null, null, 2]} gap={20}>
                <VStack align={"stretch"}>
                  <Text fontWeight={600}>
                    {landingData.footer[lang].narative.title}
                  </Text>

                  <Text opacity={0.5}>
                    {landingData.footer[lang].narative.description}
                  </Text>
                </VStack>

                <SimpleGrid columns={[1, 2]} gap={20}>
                  <VStack align={"stretch"} gap={4}>
                    <Heading as={"h3"} fontSize={16} mb={4}>
                      {landingData.footer[lang].navs.company.label}
                    </Heading>
                    {landingData.footer[lang].navs.company.items.map(
                      (nav, i) => (
                        <Text
                          key={i}
                          as={Link}
                          to={nav.link}
                          w={"fit-content"}
                          fontWeight={400}
                          _hover={{ opacity: 0.5 }}
                        >
                          {nav.label}
                        </Text>
                      )
                    )}
                  </VStack>

                  <VStack align={"stretch"} gap={4}>
                    <Heading as={"h3"} fontSize={16} mb={4}>
                      {landingData.footer[lang].navs.links.label}
                    </Heading>
                    {landingData.footer[lang].navs.links.items.map((nav, i) => (
                      <Text
                        key={i}
                        as={Link}
                        to={nav.link}
                        w={"fit-content"}
                        fontWeight={400}
                        _hover={{ opacity: 0.5 }}
                      >
                        {nav.label}
                      </Text>
                    ))}
                  </VStack>
                </SimpleGrid>
              </SimpleGrid>
            </VStack>

            <VStack w={["100%", null, "35%"]} align={"stretch"} gap={3}>
              <SimpleGrid columns={[3]} gap={3}>
                {landingData.sosmeds.map((sosmed, i) => (
                  <Center className="footerItem" w={"100%"} key={i}>
                    <IconButton
                      w={"100%"}
                      bg={"black !important"}
                      _hover={{ opacity: 0.8 }}
                      borderRadius={12}
                      p={10}
                      aria-label={sosmed.name}
                      icon={
                        <Icon
                          as={sosmed.icon}
                          fontSize={32}
                          color={"white"}
                          // weight="fill"
                        />
                      }
                    />
                  </Center>
                ))}
              </SimpleGrid>

              <VStack
                className="footerItem"
                align={"stretch"}
                bg={"black"}
                // backdropFilter={"blur(5px)"}
                borderRadius={12}
                flex={1}
              >
                <VStack p={10} align={"stretch"}>
                  <Text fontSize={20} fontWeight={600} mb={4}>
                    {lang === "id"
                      ? "Ayo bekerja bersama"
                      : "Let's work together"}
                  </Text>

                  <Text mb={4}>{landingData.footer[lang].location}</Text>
                </VStack>

                <VStack
                  bgImage={"/images/footer/semarang.png"}
                  bgSize={"cover"}
                  bgPos={"center"}
                  w={"100%"}
                  h={"100%"}
                  minH={"400px"}
                  flex={1}
                  align={"stretch"}
                  borderRadius={12}
                >
                  <VStack
                    flex={1}
                    as={ChakraLink}
                    href={
                      "https://www.google.com/maps/place/Semarang,+Semarang+City,+Central+Java/@-7.0243604,110.2525998,11z/data=!3m1!4b1!4m6!3m5!1s0x2e708b4d3f0d024d:0x1e0432b9da5cb9f2!8m2!3d-6.9818006!4d110.4120729!16zL20vMDQ5Nm1o?entry=ttu"
                    }
                    isExternal
                    // bg={"linear-gradient(to bottom, black, transparent)"}
                  ></VStack>
                </VStack>
              </VStack>
            </VStack>
          </Stack>

          <SimpleGrid
            className="footerItem"
            columns={[1, null, 2]}
            mb={4}
            gap={5}
            mt={3}
            bg={"black"}
            // backdropFilter={"blur(5px)"}
            borderRadius={12}
            px={10}
            py={5}
          >
            <Text
              my={"auto"}
              mx={["auto", null, "0"]}
              textAlign={["center", null, "left"]}
            >
              2023 © Distro Studio. All right reserved.
            </Text>

            <HStack justify={["", null, "flex-end"]} mx={["auto", null, "0"]}>
              <ColorModeSwitcher
                fontSize={20}
                color={"white"}
                className="btn"
              />

              <LangSwitcher color={"white"} />
            </HStack>
          </SimpleGrid>
        </Container>
      </VStack>
    </VStack>
  );
}
