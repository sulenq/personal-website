import {
  HStack,
  Icon,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  VStack,
  Heading,
  Button,
  IconButton,
  Image,
  Box,
  Wrap,
} from "@chakra-ui/react";
import Container from "../components/Container";
import { Sparkle } from "@phosphor-icons/react";
import landingData from "../constant/landingData";
import { getLang } from "../lib/lang";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PageContainer from "../components/PageContainer";
import useScreenWidth from "../hooks/useScreenWidth";
import { useRef } from "react";

export default function Hero() {
  const lang = getLang();
  const data = landingData.hero[lang];
  const sw = useScreenWidth();
  const containerRef = useRef(null);

  // Animation
  useGSAP(
    () => {
      gsap.from(".init", {
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <Box id="hero" ref={containerRef}>
      <PageContainer minH={"720px"}>
        <Container flex={1}>
          <SimpleGrid
            columns={[1, null, null, 3]}
            flex={1}
            py={[5, null, 20]}
            pb={[16, null, 28]}
            // borderBottom={useColorModeValue("", "1px solid var(--divider3)")}
            gap={5}
          >
            <VStack
              align={["center", null, null, "stretch"]}
              justify={"center"}
              p={5}
              py={12}
              gap={5}
            >
              <Text fontSize={20} className="init">
                {data.greeting}
              </Text>

              <Heading
                as={"h1"}
                fontSize={52}
                className="serif init"
                lineHeight={1.1}
                textAlign={["center", null, null, "left"]}
              >
                Fatwa Linovera
              </Heading>

              <Wrap className="init" spacingY={0}>
                <Text opacity={0.5}>#Web Developer</Text>
                <Text opacity={0.5}>#Graphic Designer</Text>
              </Wrap>

              <Text className="init" mt={"auto"} color={"p.500"}>
                fatwalinovera@gmail.com
              </Text>

              <HStack w={"fit-content"} className="init">
                <Button
                  h={"50px"}
                  w={"100%"}
                  colorScheme="bnw"
                  fontSize={"18px !important"}
                  className="clicky"
                  as={ChakraLink}
                  href="#contact"
                >
                  {data.contact}
                </Button>

                <Button
                  h={"50px"}
                  w={"100%"}
                  pl={4}
                  fontSize={"18px !important"}
                  className="btn-solid clicky"
                  leftIcon={<Icon as={Sparkle} fontSize={20} />}
                  as={ChakraLink}
                  href={
                    lang === "id"
                      ? "/Resume Fatwa Linovera - id.pdf"
                      : "/Resume Fatwa Linovera - en.pdf"
                  }
                  isExternal
                >
                  Resume
                </Button>
              </HStack>
            </VStack>

            <VStack
              className="init"
              w={"100%"}
              h={"100%"}
              justify={"center"}
              p={5}
              position={"relative"}
            >
              <VStack
                bg={"var(--divider)"}
                flex={1}
                maxH={"520px"}
                pt={12}
                px={2}
                justify={"flex-end"}
                borderRadius={"full"}
                overflow={"clip"}
              >
                <Image
                  mt={"auto"}
                  alt="Fatwa Linovera"
                  src="/images/pas.png"
                  maxW={"300px"}
                  objectFit={"contain"}
                />
              </VStack>
            </VStack>

            <VStack align={"stretch"} justify={"center"} p={5} py={12} gap={5}>
              <Text
                className="init"
                mt={[0, null, null, "50px"]}
                textAlign={["center", null, null, "left"]}
                maxW={"600px"}
                mx={"auto"}
              >
                {data.narative}
              </Text>

              <HStack className="init" align={"stretch"} mt={"auto"} gap={5}>
                {data.stats.map((stat, i) => (
                  <VStack key={i} borderRadius={12} w={"50%"}>
                    <Text
                      fontWeight={700}
                      fontSize={32}
                      mr={["0", null, null, "auto"]}
                    >
                      {stat.value}
                    </Text>
                    <Text
                      mr={["0", null, null, "auto"]}
                      textAlign={sw < 405 ? "center" : "left"}
                    >
                      {stat.name}
                    </Text>
                  </VStack>
                ))}
              </HStack>

              <HStack className="init" justify={"stretch"}>
                {landingData.sosmeds.map((sosmed, i) => (
                  <IconButton
                    flex={"1 0 50px"}
                    key={i}
                    as={ChakraLink}
                    href={sosmed.link}
                    isExternal
                    aria-label={sosmed.name}
                    w={"fit-content"}
                    icon={<Icon as={sosmed.icon} fontSize={24} />}
                    className="btn-solid clicky"
                  />
                ))}
              </HStack>
            </VStack>
          </SimpleGrid>
        </Container>
      </PageContainer>
    </Box>
  );
}
