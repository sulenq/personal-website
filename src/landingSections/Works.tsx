import {
  HStack,
  Icon,
  Text,
  VStack,
  Link as ChakraLink,
  Box,
  IconButton,
  Heading,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
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
  const [worksType, setWorksType] = useState<0 | 1>(0);

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

  // Animation
  useGSAP(
    () => {
      gsap.from(".sectionTitle", {
        scrollTrigger: scrollTriggerConfig("#worksContent"),
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });

      gsap.from([`.workItem`, "#moreWorks"], {
        scrollTrigger: scrollTriggerConfig("#worksContent"),
        scale: 0.5,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#works", dependencies: [worksType], revertOnUpdate: true }
  );

  useGSAP(
    () => {
      gsap.from("#carouselControl", {
        scrollTrigger: scrollTriggerConfig("#worksContent"),
        y: 50,
        opacity: 0,
      });
    },
    { scope: "#works" }
  );

  return (
    <VStack id="works" gap={0} position={"relative"} bg={"var(--divider)"}>
      <VStack
        bgSize={"cover"}
        bgPos={"bottom"}
        maxW={"1280px"}
        w={"100%"}
        borderRadius={"0 0 24px 24px"}
      >
        <VStack
          py={16}
          bg={"black"}
          color={"white"}
          borderRadius={"0 0 24px 24px"}
          overflow="hidden"
          w={"100%"}
          align={"stretch"}
          id={"worksContent"}
        >
          {worksType === 0 ? (
            <>
              <Container>
                <VStack mb={6} className="sectionHeader">
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
                    {landingData.works.worksItem[lang]
                      .slice()
                      .reverse()
                      .map((work, i) => {
                        const ok = i < 5;

                        return (
                          ok && (
                            <Box className="workItem" key={i}>
                              <PortfolioCard
                                work={work}
                                index={i}
                                // setActiveWork={setActiveWork}
                                w={sw < 350 ? "calc(100vw - 80px)" : "300px"}
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
                        w={sw < 350 ? "calc(100vw - 40px)" : "300px"}
                        h={"100%"}
                        p={5}
                        transition={"200ms"}
                        justify={"center"}
                        role="group"
                        gap={0}
                        cursor={"pointer"}
                        _hover={{ bg: "var(--divider3)" }}
                        as={Link}
                        to={"/works?category=0"}
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
                          top={"-50px"}
                          right={"-100px"}
                          zIndex={1}
                          opacity={0.05}
                          weight="bold"
                        />
                        <Text
                          textAlign={"center"}
                          fontSize={24}
                          fontWeight={600}
                        >
                          {lang === "id"
                            ? "Lihat Karya Lainnya"
                            : "View Other Works"}
                        </Text>
                      </VStack>
                    </Box>
                  </HStack>
                </VStack>
              </Box>
            </>
          ) : (
            <>
              <Container>
                <VStack mb={6} className="sectionHeader">
                  <Heading as={"h1"} className="sectionTitle">
                    {landingData.designWorks.content[lang].title}
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
                    {landingData.designWorks.worksItem
                      .slice()
                      .reverse()
                      .map((work, i) => {
                        const ok = i < 4;

                        return (
                          ok && (
                            <Box
                              className="workItem"
                              width={sw < 350 ? "calc(100vw - 80px)" : "328px"}
                              scrollSnapAlign={"center"}
                              key={i}
                            >
                              <ChakraLink
                                width={"100%"}
                                overflow={"clip"}
                                borderRadius={12}
                                bg={"var(--divider)"}
                                _hover={{ opacity: 0.8 }}
                                transition={"200ms"}
                                href={work.url}
                                isExternal
                              >
                                <Image
                                  src={work.imageUrl}
                                  h={"100%"}
                                  w={"100%"}
                                  objectFit={"contain"}
                                />
                              </ChakraLink>
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
                        w={sw < 350 ? "calc(100vw - 40px)" : "300px"}
                        h={"100%"}
                        p={5}
                        transition={"200ms"}
                        justify={"center"}
                        role="group"
                        gap={0}
                        cursor={"pointer"}
                        _hover={{ bg: "var(--divider3)" }}
                        as={Link}
                        to={"/works?category=1"}
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
                          top={"-50px"}
                          right={"-100px"}
                          zIndex={1}
                          opacity={0.05}
                          weight="bold"
                        />
                        <Text
                          textAlign={"center"}
                          fontSize={24}
                          fontWeight={600}
                        >
                          {lang === "id"
                            ? "Lihat Karya Lainnya"
                            : "View Other Works"}
                        </Text>
                      </VStack>
                    </Box>
                  </HStack>
                </VStack>
              </Box>
            </>
          )}

          {/* carousel control */}
          <Stack
            flexDir={sw < 350 ? "column" : "row"}
            justify={"space-between"}
            id="carouselControl"
            mt={4}
            px={[6, null, 14]}
          >
            <HStack mx={sw < 350 ? "auto" : ""} mb={sw < 350 ? 4 : ""}>
              <Button
                className="btn-solid clicky"
                color={worksType === 0 ? "p.500" : "white"}
                onClick={() => {
                  setWorksType(0);
                }}
              >
                Web
              </Button>
              <Button
                className="btn-solid clicky"
                color={worksType === 1 ? "p.500" : "white"}
                onClick={() => {
                  setWorksType(1);
                }}
              >
                Design
              </Button>
            </HStack>

            <HStack mx={sw < 350 ? "auto" : ""}>
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
          </Stack>
        </VStack>
      </VStack>
    </VStack>
  );
}
