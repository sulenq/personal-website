import {
  Badge,
  Box,
  HStack,
  Icon,
  IconButton,
  Link as ChakraLink,
  ListItem,
  Progress,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import Container from "../components/Container";
import useTrigger from "../global/useTrigger";
import { getLang } from "../lib/lang";
import landingData from "../constant/landingData";
import PageHeader from "../components/PageHeader";
import Contact from "../landingSections/Contact";
import Footer from "../landingSections/Footer";
import { EnvelopeSimple, MapPinLine, Phone } from "@phosphor-icons/react";
import aboutData from "../constant/aboutData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";
import TopNav from "../components/TopNav";
import PageContainer from "../components/PageContainer";

export default function AboutPage() {
  const { trigger } = useTrigger();
  const lang = getLang();
  const data = aboutData[lang];
  const skills = [
    { name: "HTML", rate: 80 },
    { name: "CSS", rate: 90 },
    { name: "React", rate: 90 },
    { name: "Typescript", rate: 75 },
    { name: "ChakraUI", rate: 95 },
    { name: "Tailwind CSS", rate: 75 },
    { name: "Laravel", rate: 70 },
    { name: "Code Igniter", rate: 70 },
    { name: "CorelDRAW", rate: 95 },
  ];
  const interests = [
    "Art",
    "Music",
    "Game",
    "Crypto",
    "Coding",
    "Programming",
    "Education System",
    "Economics",
    "Pokemon",
  ];

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
    <PageContainer id="aboutPage">
      <TopNav />

      <Text display={"none"}>{trigger}</Text>

      <PageHeader>{landingData.about[lang].nav}</PageHeader>

      <VStack align={"stretch"} overflow={"hidden"} gap={0}>
        <Container
          py={16}
          pt={10}
          flex={1}
          minH={"500px"}
          position={"relative"}
        >
          <SimpleGrid columns={[1, null, null, 2]} gap={12}>
            <HStack
              className="aboutImage"
              align={"flex-start"}
              position={"relative"}
              minH={"500px"}
              gap={4}
            >
              <Box
                h={"90%"}
                w={"50%"}
                bgImage={"/images/about/hero.jpg"}
                bgSize={"cover"}
                bgPos={"center"}
                borderRadius={12}
                mb={"auto"}
              />
              <Box
                h={"90%"}
                w={"50%"}
                bgImage={"/images/about/thinker.jpg"}
                bgSize={"cover"}
                bgPos={"center"}
                borderRadius={12}
                mt={"auto"}
              />
            </HStack>

            <VStack
              className="aboutNaratives"
              align={"stretch"}
              justify={"center"}
              gap={0}
            >
              <Text fontSize={28} fontWeight={600} mb={4} className="serif">
                {data.background.title}
              </Text>

              <VStack align={"stretch"} gap={4} mb={8}>
                {data.background.naratives.map((narative, i) => (
                  <Text key={i}>{narative}</Text>
                ))}
              </VStack>
            </VStack>
          </SimpleGrid>
        </Container>

        <VStack bg={"var(--divider)"} py={12}>
          <Container>
            <SimpleGrid columns={[1, 2]} gap={24}>
              <VStack gap={0} align={"stretch"}>
                <Text fontSize={28} fontWeight={600} mb={4} className="serif">
                  {data.skills.title}
                </Text>

                <VStack align={"stretch"}>
                  {skills.map((skill, i) => (
                    <HStack key={i} justify={"space-between"}>
                      <Text w={"120px"}>{skill.name}</Text>

                      <Progress
                        flex={1}
                        value={skill.rate}
                        size="xs"
                        colorScheme="bnw"
                        bg={"var(--divider2)"}
                      />
                    </HStack>
                  ))}
                </VStack>
              </VStack>

              <VStack gap={0} align={"stretch"}>
                <Text fontSize={28} fontWeight={600} mb={4} className="serif">
                  {data.education.title}
                </Text>

                <VStack align={"stretch"} gap={4}>
                  {data.education.items.map((educationPlace, i) => (
                    <HStack key={i} justify={"space-between"}>
                      <VStack align={"stretch"} gap={1} w={"100%"}>
                        <Text fontWeight={700} mr={"auto"}>
                          {educationPlace.name}
                        </Text>
                        <Text mb={2}>{educationPlace.year}</Text>

                        <Box ml={4} opacity={0.5}>
                          <UnorderedList>
                            <ListItem>{educationPlace.field}</ListItem>
                            <ListItem>{educationPlace.narative}</ListItem>
                          </UnorderedList>
                        </Box>
                      </VStack>
                    </HStack>
                  ))}
                </VStack>
              </VStack>

              <VStack gap={0} align={"stretch"}>
                <Text fontSize={28} fontWeight={600} mb={4} className="serif">
                  {data.experience.title}
                </Text>

                <VStack align={"stretch"} gap={4}>
                  {data.experience.items.map((exp, i) => (
                    <HStack key={i} justify={"space-between"}>
                      <VStack align={"stretch"} gap={1} w={"100%"}>
                        <Text fontWeight={700} mr={"auto"}>
                          {exp.title}
                        </Text>

                        <Text>{exp.company}</Text>
                        <Text mb={2}>{exp.periode}</Text>

                        <Box ml={4} opacity={0.5}>
                          <UnorderedList>
                            {exp.jobs.map((job, i) => (
                              <ListItem key={i} mb={2}>
                                {job}
                              </ListItem>
                            ))}
                          </UnorderedList>
                        </Box>
                      </VStack>
                    </HStack>
                  ))}
                </VStack>
              </VStack>

              <VStack align={"stretch"} gap={24}>
                <VStack gap={0} align={"stretch"}>
                  <Text fontSize={28} fontWeight={600} mb={4} className="serif">
                    {data.certificate.title}
                  </Text>

                  <UnorderedList>
                    {data.certificate.items.map((certificate, i) => (
                      <ChakraLink isExternal href={certificate.link}>
                        <ListItem
                          key={i}
                          mb={2}
                          _hover={{ color: "p.500" }}
                          w={"fit-content"}
                        >
                          {certificate.name}
                        </ListItem>
                      </ChakraLink>
                    ))}
                  </UnorderedList>
                </VStack>

                <VStack gap={0} align={"stretch"}>
                  <Text fontSize={28} fontWeight={600} mb={4} className="serif">
                    {data.interests.title}
                  </Text>

                  <Wrap>
                    {interests.map((interest, i) => (
                      <Badge
                        key={i}
                        bg={"var(--divider)"}
                        fontSize={16}
                        fontWeight={400}
                      >
                        {interest}
                      </Badge>
                    ))}
                  </Wrap>
                </VStack>

                <VStack gap={0} align={"stretch"}>
                  <Text fontSize={28} fontWeight={600} mb={4} className="serif">
                    {data.contact.title}
                  </Text>

                  <HStack mb={2}>
                    <Icon as={MapPinLine} fontSize={20} />
                    <Text>Semarang</Text>
                  </HStack>

                  <HStack mb={2}>
                    <Icon as={Phone} fontSize={20} />
                    <Text>0858777525203</Text>
                  </HStack>

                  <HStack mb={4}>
                    <Icon as={EnvelopeSimple} fontSize={20} />
                    <Text>contact@distrostudio.id</Text>
                  </HStack>

                  <HStack className="init">
                    {landingData.sosmeds.map((sosmed, i) => (
                      <IconButton
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
              </VStack>
            </SimpleGrid>
          </Container>
        </VStack>
      </VStack>

      <Contact />

      <Footer />
    </PageContainer>
  );
}
