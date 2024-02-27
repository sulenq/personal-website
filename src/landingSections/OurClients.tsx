import {
  Avatar,
  Box,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import landingData from "../constant/landingData";

import Container from "../components/Container";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import useScreenWidth from "../hooks/useScreenWidth";
import StarRate from "../components/StarRate";
import { getLang } from "../lib/lang";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";

export default function OurClients() {
  const lang = getLang();
  const bgTestiCard = useColorModeValue("whiteAlpha.700", "blackAlpha.700");
  const sw = useScreenWidth();
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [ccDisplay, setCcDisplay] = useState("flex");

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += -300;
    }
  };
  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0].contentRect.width + 48 > sw) {
        setCcDisplay("flex");
      } else {
        setCcDisplay("none");
      }
    });

    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }
  }, [sw]);

  // Animation
  useGSAP(
    () => {
      gsap.from([".sectionTitle", ".sectionNarative"], {
        scrollTrigger: scrollTriggerConfig("#clientsContent"),
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });

      gsap.from(".clientItem", {
        scrollTrigger: scrollTriggerConfig("#clientsContent"),
        scale: 0,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#clients" }
  );

  useGSAP(
    () => {
      gsap.from([".sectionTitle", ".sectionNarative"], {
        scrollTrigger: scrollTriggerConfig("#socialProofContent"),
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });

      gsap.from([".socialProofItem", ".carouselControl"], {
        scrollTrigger: scrollTriggerConfig("#socialProofContent"),
        scale: 0,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#socialProof" }
  );

  return (
    <VStack id="ourClients" align={"stretch"} pt={32}>
      <Box id={"clients"}>
        <Container id={"clientsContent"}>
          <VStack
            align={"stretch"}
            borderBottom={"1px solid var(--divider3)"}
            pb={24}
          >
            <Heading
              as={"h1"}
              className="sectionTitle"
              textAlign={"center"}
              mb={8}
            >
              {landingData.clients[lang].title}
            </Heading>

            <Text
              className="sectionNarative"
              textAlign={"center"}
              opacity={0.5}
              mb={16}
            >
              {landingData.clients[lang].subtitle}
            </Text>

            <SimpleGrid columns={[2, 3]} gap={4} borderRadius={12}>
              {landingData.clients[lang].items.map((client, i) => (
                <VStack
                  className="clientItem"
                  key={i}
                  // border={"1px solid var(--divider3)"}
                  borderRadius={12}
                  justify={"center"}
                  p={[4, null, 8, 12]}
                  bg={"white"}
                >
                  <Image
                    loading={"lazy"}
                    src={client.logo}
                    h={"140px"}
                    objectFit={"contain"}
                  />
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Box id="socialProof">
        <VStack
          id={"socialProofContent"}
          position={"relative"}
          overflow={"hidden"}
          pb={24}
          gap={0}
        >
          <Container>
            <VStack align={"stretch"} pt={24}>
              <Heading
                as={"h1"}
                className="sectionTitle"
                textAlign={"center"}
                mb={8}
              >
                {landingData.clientStories[lang].title}
              </Heading>

              <Text
                className="sectionNarative"
                textAlign={"center"}
                opacity={0.5}
                mb={8}
              >
                {landingData.clientStories[lang].subtitle}
              </Text>
            </VStack>
          </Container>

          <Box w={"100%"}>
            <VStack
              w={"100%"}
              className="noScroll"
              overflow={"auto"}
              ref={containerRef}
              scrollBehavior={"smooth"}
              align={"flex-start"}
              scrollSnapType={"x mandatory"}
            >
              <HStack
                ref={carouselRef}
                minW={"100%"}
                w={"max-content"}
                justify={"center"}
                align={"flex-start"}
                gap={8}
                px={[4, 6, 8]}
                py={4}
                pt={20}
              >
                {landingData.clientStories[lang].items.map((client, i) => (
                  <Box className="socialProofItem" key={i}>
                    <VStack
                      scrollSnapAlign={"center"}
                      p={8}
                      transition={"200ms"}
                      borderRadius={16}
                      border={"1px solid var(--divider2)"}
                      cursor={"default"}
                      _hover={{ transform: "translateY(-20px)" }}
                      w={"100%"}
                      maxW={["280px", null, "400px"]}
                      bg={bgTestiCard}
                      backdropFilter={"blur(5px)"}
                    >
                      <Avatar
                        name={client.name}
                        src={client.image}
                        size={"lg"}
                        mt={"-60px"}
                        mb={4}
                      />

                      <HStack mb={4} justify={"center"}>
                        <StarRate rate={client.rate} />
                      </HStack>

                      <HStack align={"flex-start"}>
                        <Text textAlign={"center"} fontSize={[16, null, 18]}>
                          {client.quote}
                        </Text>
                      </HStack>

                      <Box h={"1px"} w={"100%"} bg={"var(--divider2)"} my={2} />

                      <VStack gap={0}>
                        <Tooltip label={client.name}>
                          <Text
                            fontWeight={600}
                            fontSize={[16, null, 18]}
                            noOfLines={1}
                          >
                            {client.name}
                          </Text>
                        </Tooltip>

                        <Tooltip label={client.jobTitle}>
                          <Text
                            opacity={0.5}
                            fontSize={[12, null, 14]}
                            noOfLines={1}
                          >
                            {client.jobTitle}
                          </Text>
                        </Tooltip>
                      </VStack>
                    </VStack>
                  </Box>
                ))}
              </HStack>
            </VStack>

            <VStack className="carouselControl" mt={4} display={ccDisplay}>
              <HStack>
                <IconButton
                  onClick={handlePrev}
                  aria-label="Prev"
                  icon={<Icon as={ArrowLeft} fontSize={20} />}
                  className="btn clikcy"
                />
                <IconButton
                  onClick={handleNext}
                  aria-label="Prev"
                  icon={<Icon as={ArrowRight} fontSize={20} />}
                  className="btn clikcy"
                />
              </HStack>
            </VStack>
          </Box>

          <Image
            loading={"lazy"}
            src={"/images/stories/globe.png"}
            position={"absolute"}
            bottom={["-240px", "-300px", "-500px"]}
            zIndex={-1}
          />
        </VStack>
      </Box>
    </VStack>
  );
}
