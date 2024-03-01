import {
  Box,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import worksData from "../constant/worksData";
import MissingPage from "./MissingPage";
import { getLang } from "../lib/lang";
import Container from "../components/Container";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Contact from "../landingSections/Contact";
import Footer from "../landingSections/Footer";
import useTrigger from "../global/useTrigger";
import TopNav from "../components/TopNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";

const WorksDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { workIndex } = useParams<{ workIndex: string }>();
  const worksId = parseInt(workIndex as string);
  const lang = getLang();
  const { trigger } = useTrigger();
  const data = worksData[lang][worksId];

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= data.ssScrollLength;
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += data.ssScrollLength;
    }
  };

  const handleOpenImg = (l: string) => {
    window.open(l);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".init", {
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });

      gsap.from(".narative", {
        scrollTrigger: scrollTriggerConfig(".narativeContent"),
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });

      gsap.from(".image", {
        scrollTrigger: scrollTriggerConfig("#screenshots"),
        scale: 0,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });

      gsap.from(".carouselControl", {
        scrollTrigger: scrollTriggerConfig("#screenshots"),
        y: 50,
        opacity: 0,
      });
    },
    { scope: "#workDetailPage" }
  );

  if (!isNaN(worksId) && data) {
    return (
      <VStack id="workDetailPage" gap={0} align={"stretch"} overflowX={"clip"}>
        <Text display={"none"}>{trigger}</Text>

        <TopNav />

        <Container>
          <VStack
            mt={24}
            mb={32}
            minH={"calc(100vh - 650px)"}
            justify={"center"}
          >
            <Heading
              className="init serif"
              as={"h1"}
              fontWeight={400}
              lineHeight={1.4}
              textAlign={"center"}
              maxW={"820px"}
            >
              {data.title}
            </Heading>
          </VStack>

          <Image
            className="init"
            loading={"lazy"}
            src={data.image}
            borderRadius={24}
            mb={20}
            maxH={"700px"}
            objectFit={"cover"}
            objectPosition={"top"}
          />

          <VStack className="narativeContent" align={"stretch"}>
            <Wrap mb={20}>
              <Box className="narative" flex={["0 0 100%", null, "0 0 200px"]}>
                <Text className="serif" fontSize={32}>
                  {lang === "id" ? "Penjelasan Singkat" : "Brief"}
                </Text>
              </Box>

              <Box
                className="narative"
                flex={["0 0 100%", null, "1 0 600px"]}
                mt={2}
              >
                <Text fontSize={18}>{data.narative}</Text>
              </Box>
            </Wrap>

            <Wrap mb={20}>
              <Box className="narative" flex={["0 0 100%", null, "0 0 200px"]}>
                <Text className="serif" fontSize={32}>
                  {lang === "id" ? "Yang saya lakukan" : "What i do"}
                </Text>
              </Box>

              <Box
                className="narative"
                flex={["0 0 100%", null, "1 0 600px"]}
                mt={2}
              >
                <Text fontSize={18}>{data.solution}</Text>
              </Box>
            </Wrap>
          </VStack>
        </Container>

        <Box id="screenshots" w={"100%"} mb={20}>
          <VStack
            className="noScroll"
            overflowX={"auto"}
            ref={containerRef}
            scrollBehavior={"smooth"}
            align={"flex-start"}
            scrollSnapType={"x mandatory"}
          >
            <HStack
              ref={carouselRef}
              minW={"100%"}
              w={"max-content"}
              // justify={"center"}
              gap={4}
              px={[4, 6, 8]}
              py={2}
            >
              {data.ss.map((imagePath, i) => (
                <Box className="image" key={i}>
                  <Image
                    loading={"lazy"}
                    transition={"200ms"}
                    _hover={{ opacity: 0.8 }}
                    boxShadow={"0 0 10px 0 #00000010"}
                    cursor={"pointer"}
                    onClick={() => {
                      handleOpenImg(imagePath);
                    }}
                    src={imagePath}
                    h={["", "420px"]}
                    w={["80vw", null, null, "fit-content"]}
                    objectFit={"contain"}
                    borderRadius={24}
                    scrollSnapAlign={"center"}
                  />
                </Box>
              ))}
            </HStack>
          </VStack>

          <VStack className="carouselControl" mt={4}>
            <HStack>
              <IconButton
                onClick={handlePrev}
                className="btn clicky"
                aria-label="carousel-previous"
                icon={<Icon as={ArrowLeft} fontSize={20} />}
              />
              <IconButton
                onClick={handleNext}
                className="btn clicky"
                aria-label="carousel-next"
                icon={<Icon as={ArrowRight} fontSize={20} />}
              />
            </HStack>
          </VStack>
        </Box>

        <Contact />

        <Footer />
      </VStack>
    );
  } else {
    return <MissingPage />;
  }
};

export default WorksDetailPage;
