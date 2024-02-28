import {
  HStack,
  Icon,
  Text,
  VStack,
  SimpleGrid,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import Container from "../components/Container";
import landingData from "../constant/landingData";
import SectionNav from "../components/SectionNav";

import { ArrowUpRight } from "@phosphor-icons/react";
import { getLang } from "../lib/lang";
import { iconSize } from "../constant/sizes";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";

export default function About() {
  const lang = getLang();

  // Animation
  useGSAP(
    () => {
      gsap.from([".sectionNavLabel", ".sectionTitle", "#carouselControl"], {
        scrollTrigger: scrollTriggerConfig("#aboutContent"),
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
      gsap.from(`.aboutItem`, {
        scrollTrigger: scrollTriggerConfig("#aboutItemContainer"),
        x: -300,
        opacity: 0,
        // ease: "back",
        stagger: {
          each: 0.2,
        },
      });
      gsap.from(`.aboutImage`, {
        scrollTrigger: scrollTriggerConfig("#aboutImageContainer"),
        x: 300,
        opacity: 0,
        // ease: "back",
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#about" }
  );

  return (
    <VStack id="about" align={"stretch"}>
      <VStack
        bg={"black"}
        py={12}
        px={[0, null, 6]}
        maxW={"1280px"}
        w={"100%"}
        mx={"auto"}
        color={"white"}
        borderRadius={"24px 24px 0 0"}
      >
        <Container transition={"200ms"} mb={12}>
          <VStack className="sectionHeader">
            <Box className={"sectionNavLabel"}>
              <SectionNav>{landingData.about[lang].nav}</SectionNav>
            </Box>

            <Heading as={"h1"} className="sectionTitle">
              {landingData.about[lang].title}
            </Heading>
          </VStack>
        </Container>

        <Container id={"aboutContent"}>
          <SimpleGrid
            columns={[1, null, null, 2]}
            gap={5}
            borderBottom={"1px solid var(--divider3)"}
            pb={32}
          >
            <VStack id="aboutItemContainer" align={"stretch"} gap={5}>
              {landingData.about[lang].items.map((item, i) => (
                <HStack
                  className="aboutItem"
                  key={i}
                  align={"flex-start"}
                  gap={5}
                  bg={"var(--divider)"}
                  py={4}
                  px={6}
                  borderRadius={16}
                >
                  <Text fontWeight={700} fontSize={24} mt={"-2px"}>
                    {String(i + 1).padStart(2, "0")}
                  </Text>

                  <Box>
                    <Text
                      as={"h3"}
                      fontWeight={700}
                      fontSize={24}
                      mb={2}
                      lineHeight={1.3}
                    >
                      {item.title}
                    </Text>
                    <Text opacity={0.5}>{item.narative}</Text>
                  </Box>
                </HStack>
              ))}
            </VStack>

            <VStack
              id="aboutImageContainer"
              align={"stretch"}
              minH={["700px", null, null, "100%"]}
              gap={3}
            >
              {/* <Box
                className="aboutImage"
                bgImage={"/images/about/thinker.jpg"}
                bgPos={"top"}
                bgSize={"cover"}
                h={"160px"}
                w={"100%"}
                borderRadius={12}
              /> */}

              <HStack gap={3} flex={1} my={"auto"}>
                <VStack gap={3} h={"100%"} w={"50%"}>
                  <Box
                    className="aboutImage"
                    flex={1}
                    w={"100%"}
                    bgImage="/images/about/hero.jpg"
                    bgSize={"cover"}
                    bgPos={"center"}
                    borderRadius={12}
                  />
                </VStack>

                <VStack gap={3} h={"100%"} w={"50%"} justify={"center"}>
                  <Box
                    className="aboutImage"
                    h={"50%"}
                    w={"100%"}
                    bgImage="/images/about/thinker.jpg"
                    bgSize={"cover"}
                    bgPos={"center"}
                    borderRadius={12}
                  />

                  <VStack
                    flex={1}
                    className="aboutImage"
                    align={"stretch"}
                    w={"100%"}
                    borderRadius={12}
                    color={"white"}
                    p={[4, 5]}
                  >
                    <Text fontSize={20} fontWeight={700}>
                      {lang === "id"
                        ? "Kenali aku lebih dekat"
                        : "Get to know me better"}
                    </Text>

                    <Text opacity={0.5} mb={2}>
                      {lang === "id"
                        ? "Cerita, latar belakang, hobi, kepribadian dll"
                        : "Story, background, hobbies, personality etc"}
                    </Text>

                    <Button
                      mt={"auto"}
                      className="clicky"
                      bg={"white"}
                      _hover={{ bg: "white" }}
                      color={"black"}
                      w={"100%"}
                      h={"50px"}
                      fontWeight={650}
                      rightIcon={<Icon as={ArrowUpRight} fontSize={iconSize} />}
                      as={Link}
                      to={"/about"}
                      borderRadius={12}
                      flexShrink={0}
                    >
                      {landingData.about[lang].ourMember.label}
                    </Button>
                  </VStack>
                </VStack>
              </HStack>
            </VStack>
          </SimpleGrid>
        </Container>
      </VStack>
    </VStack>
  );
}
