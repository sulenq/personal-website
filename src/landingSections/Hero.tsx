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
  Wrap,
  Image,
} from "@chakra-ui/react";
import Container from "../components/Container";
import { Sparkle } from "@phosphor-icons/react";
import landingData from "../constant/landingData";
import { getLang } from "../lib/lang";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Wrapper from "../components/Wrapper";

export default function Hero3() {
  const lang = getLang();
  const data = landingData.hero[lang];

  // Animation
  useGSAP(
    () => {
      gsap.from(".init", {
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
      gsap.from(".statsItem", {
        delay: 1,
        y: 100,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#hero" }
  );

  return (
    <Wrapper id={"hero"} minH={"720px"}>
      <Container flex={1}>
        <SimpleGrid columns={[1, null, null, 3]} flex={1} pt={5} gap={5}>
          <VStack
            align={["center", null, null, "stretch"]}
            justify={"center"}
            p={5}
            py={12}
            gap={5}
          >
            <Text fontSize={20}>{data.greeting}</Text>

            <Heading
              as={"h1"}
              fontSize={52}
              className="serif"
              lineHeight={1.1}
              textAlign={["center", null, null, "left"]}
            >
              Fatwa Linovera
            </Heading>

            <HStack>
              <Text opacity={0.5}>#Web Developer</Text>
              <Text opacity={0.5}>#Graphic Designer</Text>
            </HStack>

            <Text mt={"auto"} color={"p.500"}>
              fatwalinovera@gmail.com
            </Text>

            <HStack w={"fit-content"}>
              <Button
                h={"50px"}
                w={"100%"}
                colorScheme="bnw"
                fontSize={"18px !important"}
              >
                {data.contact}
              </Button>

              <Button
                h={"50px"}
                w={"100%"}
                pl={4}
                fontSize={"18px !important"}
                className="btn-solid"
                leftIcon={<Icon as={Sparkle} fontSize={20} />}
              >
                {data.portfolio}
              </Button>
            </HStack>
          </VStack>

          <VStack
            w={"100%"}
            h={"100%"}
            justify={"center"}
            p={5}
            pb={0}
            position={"relative"}
          >
            <VStack
              bg={"var(--divider)"}
              flex={1}
              pt={12}
              px={2}
              justify={"flex-end"}
              borderRadius={"500px 500px 12px 12px"}
              overflow={"clip"}
            >
              <Image
                mt={"auto"}
                alt="Fatwa Linovera"
                src="/images/pas2.png"
                w={"100%"}
                objectFit={"contain"}
              />
            </VStack>
          </VStack>

          <VStack align={"stretch"} justify={"center"} p={5} gap={5}>
            <Text mt={[0, null, null, "50px"]}>{data.narative}</Text>

            <HStack align={"stretch"} mt={"auto"}>
              {data.stats.map((stat, i) => (
                <VStack key={i} borderRadius={12} w={"50%"}>
                  <Text fontWeight={700} fontSize={32} mr={"auto"}>
                    {stat.value}
                  </Text>
                  <Text mr={"auto"}>{stat.name}</Text>
                </VStack>
              ))}
            </HStack>

            <Wrap justify={"stretch"}>
              {landingData.sosmeds.map((sosmed, i) => (
                <IconButton
                  flex={"1 0 50px"}
                  key={i}
                  as={ChakraLink}
                  isExternal
                  aria-label={sosmed.name}
                  w={"fit-content"}
                  icon={<Icon as={sosmed.icon} fontSize={24} />}
                  className="btn-solid"
                />
              ))}
            </Wrap>
          </VStack>
        </SimpleGrid>
      </Container>
    </Wrapper>
  );
}
