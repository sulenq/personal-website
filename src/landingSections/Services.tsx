import {
  Icon,
  SimpleGrid,
  Text,
  VStack,
  // Link as ChakraLink,
  Heading,
  Center,
  Button,
  Box,
} from "@chakra-ui/react";
import Container from "../components/Container";
import landingData from "../constant/landingData";

import SectionNav from "../components/SectionNav";
import { getLang } from "../lib/lang";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { iconSize } from "../constant/sizes";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";

export default function Services() {
  const lang = getLang();
  const serviceItems = landingData.services[lang].servicesItem;

  // Animation
  useGSAP(
    () => {
      gsap.from([".sectionNavLabel", ".sectionTitle"], {
        scrollTrigger: scrollTriggerConfig("#servicesContent"),
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
      gsap.from(`.serviceItem`, {
        scrollTrigger: scrollTriggerConfig("#servicesContent"),
        scale: 0,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#services" }
  );

  return (
    <VStack id="services">
      <VStack
        bg={"black"}
        py={20}
        px={[0, null, 6]}
        maxW={"1280px"}
        w={"100%"}
        color={"white"}
        borderRadius={"24px 24px 0 0"}
      >
        <Container id={"servicesContent"}>
          <VStack mb={6} className="sectionHeader">
            <Box className={"sectionNavLabel"}>
              <SectionNav>{landingData.services[lang].nav}</SectionNav>
            </Box>
            <Heading as={"h1"} className="sectionTitle">
              {landingData.services[lang].title}
            </Heading>
          </VStack>

          <SimpleGrid columns={[1, null, 2, 3]} mt={10} gap={5}>
            {serviceItems.map((service, i) => (
              <Box className="serviceItem">
                <VStack
                  align={"stretch"}
                  key={i}
                  borderRadius={8}
                  role="group"
                  transition={"200ms"}
                  gap={0}
                  minH={"400px"}
                >
                  <VStack
                    align={"stretch"}
                    gap={4}
                    position={"relative"}
                    bgImage={service.image}
                    bgSize={"cover"}
                    bgPos={"center"}
                    borderRadius={12}
                  >
                    <VStack
                      align={"stretch"}
                      gap={4}
                      bg={"linear-gradient(to top, black, transparent)"}
                      p={4}
                      mt={"auto"}
                      minH={"250px"}
                    >
                      <Center
                        w={"fit-content"}
                        p={2}
                        bg={"blackAlpha.500"}
                        color={"white"}
                        borderRadius={8}
                        backdropFilter={"blur(5px)"}
                      >
                        <Icon
                          as={service.icon}
                          fontSize={42}
                          color={"current"}
                          weight="thin"
                        />
                      </Center>

                      <VStack align={"stretch"} gap={4} mt={"auto"}>
                        <Text
                          fontWeight={700}
                          fontSize={20}
                          lineHeight={1.4}
                          // h={["", "50px"]}
                        >
                          {service.title}
                        </Text>
                      </VStack>
                    </VStack>
                  </VStack>

                  <VStack align={"stretch"} px={4}>
                    <Text opacity={0.5}>{service.narative}</Text>

                    <Button
                      mt={2}
                      h={"0 !Important"}
                      transition={"200ms"}
                      _groupHover={{ h: "50px !important", opacity: 1 }}
                      rightIcon={<Icon as={ArrowUpRight} fontSize={iconSize} />}
                      className="clicky btn"
                      border="1px solid transparent !important"
                      _hover={{
                        border: "1px solid var(--divider3) !important",
                      }}
                      opacity={0}
                      color={"p.400"}
                      pr={5}
                      as={Link}
                      to={service.detailLink}
                    >
                      {landingData.services[lang].detail}
                    </Button>
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </VStack>
    </VStack>
  );
}
