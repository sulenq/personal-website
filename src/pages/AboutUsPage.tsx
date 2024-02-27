import {
  Box,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Container from "../components/Container";
import useTrigger from "../global/useTrigger";
import { getLang } from "../lib/lang";
import FloatingNav from "../components/Navs/FloatingNav";
import landingData from "../constant/landingData";
import PageHeader from "../components/PageHeader";
import Contact from "../landingSections/Contact";
import Footer from "../landingSections/Footer";
import { EnvelopeSimple, MapPinLine, Phone } from "@phosphor-icons/react";
import memberData from "../constant/memberData";
import aboutData from "../constant/aboutData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { trigger } = useTrigger();
  const lang = getLang();
  const data = aboutData[lang];

  // Animation
  useGSAP(
    () => {
      gsap.from(`.aboutNaratives`, {
        scrollTrigger: scrollTriggerConfig(".aboutNaratives"),
        x: 300,
        opacity: 0,
        // ease: "back",
        stagger: {
          each: 0.2,
        },
      });

      gsap.from(`.aboutImage`, {
        scrollTrigger: scrollTriggerConfig(".aboutImage"),
        x: -300,
        opacity: 0,
        // ease: "back",
        stagger: {
          each: 0.2,
        },
      });

      gsap.from(".aboutMemberTitle", {
        scrollTrigger: scrollTriggerConfig(".aboutMemberTitle"),
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });

      gsap.from(".member", {
        scrollTrigger: scrollTriggerConfig(".members"),
        scale: 0,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#aboutPage" }
  );

  return (
    <VStack id="aboutPage" gap={0} align={"stretch"} overflowX={"clip"}>
      <Text display={"none"}>{trigger}</Text>

      <FloatingNav />

      <PageHeader>{landingData.about[lang].nav}</PageHeader>

      <VStack align={"stretch"} overflow={"hidden"} mb={12}>
        <Container
          py={16}
          pt={10}
          flex={1}
          minH={"500px"}
          position={"relative"}
        >
          <SimpleGrid columns={[1, null, 2]} gap={12}>
            <HStack
              className="aboutImage"
              align={"flex-start"}
              position={"relative"}
            >
              <Image
                loading={"lazy"}
                src={"/images/about/hero.jpg"}
                w={"50%"}
                h={["300px", null, "400px"]}
                objectFit={"cover"}
              />
              <Image
                loading={"lazy"}
                src={"/images/about/hero3.jpg"}
                w={"50%"}
                h={["300px", null, "400px"]}
                mt={"50px"}
                objectFit={"cover"}
              />
            </HStack>

            <VStack
              className="aboutNaratives"
              align={"stretch"}
              justify={"center"}
              gap={0}
            >
              <Text fontSize={32} fontWeight={800} mb={8}>
                {data.intro.title}
              </Text>

              <Text mb={8}>{data.intro.narative}</Text>

              <HStack mb={2}>
                <Icon as={MapPinLine} fontSize={20} />
                <Text>Semarang</Text>
              </HStack>

              <HStack mb={2}>
                <Icon as={Phone} fontSize={20} />
                <Text>0858777525203</Text>
              </HStack>

              <HStack mb={2}>
                <Icon as={EnvelopeSimple} fontSize={20} />
                <Text>contact@distrostudio.id</Text>
              </HStack>
            </VStack>
          </SimpleGrid>
        </Container>
      </VStack>

      <VStack align={"stretch"} bg={"var(--divider)"} pt={12} pb={16}>
        <Container>
          <Text
            className="aboutMemberTitle"
            fontSize={32}
            fontWeight={800}
            mb={8}
          >
            {data.members.title}
          </Text>

          <SimpleGrid className="members" columns={[2, 2, 3, 4]} gap={5}>
            {memberData.map((member, i) => (
              <Box className="member" key={i}>
                <VStack
                  align={"stretch"}
                  borderRadius={12}
                  overflow={"hidden"}
                  gap={0}
                  cursor={"pointer"}
                  _hover={{ opacity: 0.8 }}
                  transition={"200ms"}
                >
                  <Image
                    loading={"lazy"}
                    src={member.image}
                    mb={2}
                    h={["300px", "400px"]}
                    objectFit={"cover"}
                  />

                  <Text fontWeight={500}>{member.name}</Text>
                  <Text opacity={0.5}>#{member.role}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </VStack>

      <Contact />

      <Footer />
    </VStack>
  );
}
