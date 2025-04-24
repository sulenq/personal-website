import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import ImageView from "../components/ImageView";
import TopNav from "../components/TopNav";
import worksData from "../constant/worksData";
import useTrigger from "../global/useTrigger";
import Contact from "../landingSections/Contact";
import Footer from "../landingSections/Footer";
import { getLang } from "../lib/lang";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";
import MissingPage from "./MissingPage";

const WorksDetailPage = () => {
  const { workIndex } = useParams<{ workIndex: string }>();
  const index = parseInt(workIndex as string);
  const lang = getLang();
  const { trigger } = useTrigger();
  const data = worksData[lang].slice().reverse()[index];

  const workDetailContainerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && carouselRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, []);

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
    { scope: workDetailContainerRef }
  );

  if (!isNaN(index) && data) {
    return (
      <VStack
        ref={workDetailContainerRef}
        id="workDetailPage"
        gap={0}
        align={"stretch"}
        overflowX={"clip"}
      >
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

            {data.demo && (
              <Box className="init">
                <Button
                  rightIcon={<Icon as={ArrowUpRight} fontSize={16} />}
                  className="clicky"
                  as={Link}
                  to={data.demo}
                  target="_blank"
                  mt={2}
                  colorScheme="ap"
                  variant={"ghost"}
                >
                  <Text fontSize={16}>Demo</Text>
                </Button>
              </Box>
            )}

            {data.link && (
              <Box className="init">
                <Button
                  rightIcon={<Icon as={ArrowUpRight} fontSize={16} />}
                  className="clicky"
                  as={Link}
                  to={data.link}
                  target="_blank"
                  mt={2}
                  colorScheme="ap"
                  variant={"ghost"}
                >
                  <Text fontSize={16}>Link</Text>
                </Button>
              </Box>
            )}

            {data.helperText && (
              <Text className="init" opacity={0.5}>
                {data.helperText}
              </Text>
            )}
          </VStack>

          <Image
            className="init"
            loading={"lazy"}
            src={data.imageAlter}
            borderRadius={24}
            mb={20}
            maxH={"700px"}
            objectFit={"cover"}
            objectPosition={"0 30%"}
          />

          <VStack className="narativeContent" align={"stretch"}>
            <Wrap mb={20} spacingX={5}>
              <Box className="narative" flex={["0 0 100%", null, "0 0 320px"]}>
                <Text className="serif" fontSize={32}>
                  {lang === "id" ? "Penjelasan Singkat" : "Brief"}
                </Text>
              </Box>

              <Box
                className="narative"
                flex={["0 0 100%", null, "1 0 600px"]}
                mt={2}
              >
                <Text fontSize={18}>{data.narrative}</Text>
              </Box>
            </Wrap>

            <Wrap mb={20} spacingX={5}>
              <Box className="narative" flex={["0 0 100%", null, "0 0 320px"]}>
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
              justify={"flex-start"}
              gap={4}
              px={[4, 6, 8]}
              py={2}
            >
              {data.ss.map((imagePath, i) => (
                <Box className="image" key={i}>
                  <ImageView data={data} imagePath={imagePath} index={i} />
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
