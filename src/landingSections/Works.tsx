import {
  HStack,
  Icon,
  Text,
  VStack,
  // Link as ChakraLink,
  Box,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import SectionNav from "../components/SectionNav";
import landingData from "../constant/landingData";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import useScreenWidth from "../hooks/useScreenWidth";
import { Link } from "react-router-dom";
import { getLang } from "../lib/lang";
import Container from "../components/Container";
import PortfolioCard from "../components/Cards/PortfolioCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";

export default function Works() {
  const lang = getLang();
  const sw = useScreenWidth();
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [ccDisplay, setCcDisplay] = useState("flex");

  const handlePrev = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += -300;
    }
  };

  const handleNext = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const container = document.querySelector(
        "#worksContent"
      ) as HTMLDivElement;

      if (
        carouselRef.current &&
        container.offsetWidth < carouselRef.current.offsetWidth
      ) {
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
      gsap.from([".sectionNavLabel", ".sectionTitle"], {
        scrollTrigger: scrollTriggerConfig("#worksContent"),
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
      gsap.from([`.workItem`, "#moreWorks", "#carouselControl"], {
        scrollTrigger: scrollTriggerConfig("#worksContent"),
        scale: 0,
        opacity: 0,
        // ease: "power3",
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#works" }
  );

  return (
    <VStack id="works" gap={0} position={"relative"}>
      <VStack
        // bgImage={activeWork?.image}
        bgSize={"cover"}
        bgPos={"bottom"}
        maxW={"1280px"}
        w={"100%"}
        borderRadius={"0 0 24px 24px"}
        // color={useColorModeValue("white", "dark")}
      >
        <VStack
          pt={10}
          pb={16}
          bg={"black"}
          color={"white"}
          borderRadius={"0 0 24px 24px"}
          overflow="hidden"
          w={"100%"}
          align={"stretch"}
          id={"worksContent"}
        >
          <Container>
            <VStack mb={6} className="sectionHeader">
              <Box className={"sectionNavLabel"}>
                <SectionNav>{landingData.works.content[lang].nav}</SectionNav>
              </Box>
              <Heading as={"h1"} className="sectionTitle">
                {landingData.works.content[lang].title}
              </Heading>
            </VStack>
          </Container>

          {/* Carousel */}
          <Box w={"100%"} bottom={[10, null, 20]} mx={"auto"}>
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
                gap={5}
                px={[6, null, 14]}
                py={4}
                align={"stretch"}
              >
                {landingData.works.worksItem[lang].map((work, i) => {
                  const ok = i < 4;

                  return (
                    ok && (
                      <Box className="workItem" key={i}>
                        <PortfolioCard
                          work={work}
                          // setActiveWork={setActiveWork}
                          w={sw < 350 ? "calc(100vw - 40px)" : "300px"}
                        />
                      </Box>
                    )
                  );
                })}

                <Box id="moreWorks">
                  <VStack
                    scrollSnapAlign={"center"}
                    align={"center"}
                    bg={"var(--divider)"}
                    borderRadius={12}
                    overflow={"clip"}
                    w={"280px"}
                    h={"400px"}
                    p={5}
                    transition={"200ms"}
                    justify={"center"}
                    role="group"
                    gap={0}
                    cursor={"pointer"}
                    _hover={{ bg: "var(--divider3)" }}
                    as={Link}
                    to={"/works?search=&category=0"}
                    position={"relative"}
                    className="clicky"
                  >
                    <Icon
                      as={ArrowUpRight}
                      fontSize={600}
                      // h={"0 !important"}
                      _groupHover={{ transform: "scale(1.2)" }}
                      transition={"200ms"}
                      mb={4}
                      position={"absolute"}
                      bottom={"-150px"}
                      right={"-100px"}
                      zIndex={1}
                      opacity={0.05}
                      weight="bold"
                    />
                    <Text textAlign={"center"} fontSize={24} fontWeight={600}>
                      {lang === "id"
                        ? "Lihat Karya Lainnya"
                        : "View Other Works"}
                    </Text>
                  </VStack>
                </Box>
              </HStack>
            </VStack>

            {/* carousel control */}
            <VStack id="carouselControl" mt={4} display={ccDisplay}>
              <HStack>
                <IconButton
                  onClick={handlePrev}
                  aria-label="Prev"
                  icon={<Icon as={ArrowLeft} fontSize={20} />}
                  className="btn clikcy"
                  color={"white"}
                />

                <IconButton
                  onClick={handleNext}
                  aria-label="Prev"
                  icon={<Icon as={ArrowRight} fontSize={20} />}
                  className="btn clikcy"
                  color={"white"}
                />
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
}