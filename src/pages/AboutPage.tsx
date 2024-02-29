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
  const titleAnim = (triggerTarget: any) => ({
    scrollTrigger: scrollTriggerConfig(triggerTarget),
    y: 50,
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  });

  const itemAnim = (triggerTarget: any) => ({
    scrollTrigger: scrollTriggerConfig(triggerTarget),
    scale: 0.5,
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  });

  useGSAP(
    () => {
      gsap.from(`.aboutNaratives`, {
        scrollTrigger: scrollTriggerConfig(".aboutNaratives"),
        x: 300,
        opacity: 0,
      });

      gsap.from(`.aboutImage`, {
        scrollTrigger: scrollTriggerConfig(".aboutImage"),
        x: -300,
        opacity: 0,
        // ease: "back",
        stagger: {
          each: 0.05,
        },
      });

      gsap.from(".dataTitle_1", titleAnim(".dataTitle_1"));
      gsap.from(".dataItem_1", itemAnim(".dataItem_1"));

      gsap.from(".dataTitle_2", titleAnim(".dataTitle_2"));
      gsap.from(".dataItem_2", itemAnim(".dataItem_2"));

      gsap.from(".dataTitle_3", titleAnim(".dataTitle_3"));
      gsap.from(".dataItem_3", itemAnim(".dataItem_3"));

      gsap.from(".dataTitle_4", titleAnim(".dataTitle_4"));
      gsap.from(".dataItem_4", itemAnim(".dataItem_4"));

      gsap.from(".dataTitle_5", titleAnim(".dataTitle_5"));
      gsap.from(".dataItem_5", itemAnim(".dataItem_5"));

      gsap.from(".dataTitle_6", titleAnim(".dataTitle_6"));
      gsap.from(".dataItem_6", itemAnim(".dataItem_6"));
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
              <Text fontSize={28} mb={4} className="serif">
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
                <Text className="dataTitle_1 serif" fontSize={28} mb={4}>
                  {data.skills.title}
                </Text>

                <VStack align={"stretch"}>
                  {skills.map((skill, i) => (
                    <HStack
                      className="dataItem_1"
                      key={i}
                      justify={"space-between"}
                    >
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
                <Text className="dataTitle_2 serif" fontSize={28} mb={4}>
                  {data.education.title}
                </Text>

                <VStack align={"stretch"} gap={4}>
                  {data.education.items.map((educationPlace, i) => (
                    <HStack
                      className="dataItem_2"
                      key={i}
                      justify={"space-between"}
                    >
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
                <Text className="dataTitle_3 serif" fontSize={28} mb={4}>
                  {data.experience.title}
                </Text>

                <VStack align={"stretch"} gap={4}>
                  {data.experience.items.map((exp, i) => (
                    <HStack
                      className="dataItem_3"
                      key={i}
                      justify={"space-between"}
                    >
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
                  <Text className="dataTitle_4 serif" fontSize={28} mb={4}>
                    {data.certificate.title}
                  </Text>

                  <UnorderedList>
                    {data.certificate.items.map((certificate, i) => (
                      <Box className="dataItem_4">
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
                      </Box>
                    ))}
                  </UnorderedList>
                </VStack>

                <VStack gap={0} align={"stretch"}>
                  <Text className="dataTitle_5 serif" fontSize={28} mb={4}>
                    {data.interests.title}
                  </Text>

                  <Wrap>
                    {interests.map((interest, i) => (
                      <Badge
                        className="dataItem_5"
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
                  <Text className="dataTitle_6 serif" fontSize={28} mb={4}>
                    {data.contact.title}
                  </Text>

                  <HStack mb={2} className="dataItem_6">
                    <Icon as={MapPinLine} fontSize={20} />
                    <Text>Semarang</Text>
                  </HStack>

                  <HStack mb={2} className="dataItem_6">
                    <Icon as={Phone} fontSize={20} />
                    <Text>0858777525203</Text>
                  </HStack>

                  <HStack mb={4} className="dataItem_6">
                    <Icon as={EnvelopeSimple} fontSize={20} />
                    <Text>contact@distrostudio.id</Text>
                  </HStack>

                  <HStack className="init">
                    {landingData.sosmeds.map((sosmed, i) => (
                      <Box className="dataItem_6">
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
                      </Box>
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
