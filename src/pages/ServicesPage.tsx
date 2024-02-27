import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import landingData from "../constant/landingData";
import { getLang } from "../lib/lang";
import Container from "../components/Container";
import Contact from "../landingSections/Contact";
import Footer from "../landingSections/Footer";
import servicesData from "../constant/servicesData";
import FloatingNav from "../components/Navs/FloatingNav";
import { ArrowUpRight } from "@phosphor-icons/react";
import { iconSize } from "../constant/sizes";
import { Link, useLocation } from "react-router-dom";
import useTrigger from "../global/useTrigger";
import PageHeader from "../components/PageHeader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";

export default function ServicesPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const section = query.get("section");
  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    if (!section) {
      window.scrollTo(0, 0);
    }
  }, [section]);

  useEffect(() => {
    if (section) {
      setActiveSection(parseInt(section as string));
    }
  }, [section]);

  const activeRef = useRef<any>(null);
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  const lang = getLang();
  const sserviceItems = servicesData[lang];
  const { trigger } = useTrigger();

  //Animation
  useGSAP(
    () => {
      gsap.from(".serviceItemHeader", {
        scrollTrigger: scrollTriggerConfig("#serviceItem0"),
        y: -50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
      gsap.from(".serviceItemImage", {
        scrollTrigger: scrollTriggerConfig("#serviceItem0"),
        x: -300,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
      gsap.from(".serviceItemBenefit", {
        scrollTrigger: scrollTriggerConfig("#serviceItem0"),
        x: 300,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#serviceItem0" }
  );

  useGSAP(
    () => {
      gsap.from(".serviceItemHeader", {
        scrollTrigger: scrollTriggerConfig(".serviceItem"),
        y: -50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
      gsap.from(".serviceItemImage", {
        scrollTrigger: scrollTriggerConfig(".serviceItem"),
        x: -300,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
      gsap.from(".serviceItemBenefit", {
        scrollTrigger: scrollTriggerConfig(".serviceItem"),
        x: 300,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#serviceItem1" }
  );

  useGSAP(
    () => {
      gsap.from(".serviceItemHeader", {
        scrollTrigger: scrollTriggerConfig(".serviceItem"),
        y: -50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
      gsap.from(".serviceItemImage", {
        scrollTrigger: scrollTriggerConfig(".serviceItem"),
        x: -300,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
      gsap.from(".serviceItemBenefit", {
        scrollTrigger: scrollTriggerConfig(".serviceItem"),
        x: 300,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#serviceItem2" }
  );

  useGSAP(() => {
    gsap.from("#servicePageNarative", {
      scrollTrigger: scrollTriggerConfig("#servicePageNarative"),
      y: 50,
      opacity: 0,
    });
  });

  return (
    <VStack id="servicePage" align={"stretch"} gap={0} overflowX={"clip"}>
      <Text display={"none"}>{trigger}</Text>

      <FloatingNav />

      <PageHeader>{landingData.services[lang].nav}</PageHeader>

      <Container pb={16}>
        <VStack gap={0}>
          {sserviceItems.map((service, i) => (
            <Box
              id={`serviceItem${i}`}
              w={"100%"}
              ref={parseInt(section as string) === i ? activeRef : null}
            >
              <VStack className="serviceItem" w={"100%"} key={i} py={12}>
                <VStack
                  className="serviceItemHeader"
                  bg={"linear-gradient(to top, var(--divider), transparent)"}
                  p={4}
                  borderRadius={12}
                  w={"100%"}
                  mb={2}
                >
                  <Icon
                    as={service.icon}
                    fontSize={32}
                    weight={"thin"}
                    opacity={0.5}
                  />
                  <Text fontSize={24} fontWeight={650} textAlign={"center"}>
                    {service.title}
                  </Text>

                  <Text
                    maxW={"800px"}
                    textAlign={"center"}
                    mb={4}
                    opacity={0.5}
                  >
                    {service.narative}
                  </Text>
                </VStack>

                <SimpleGrid columns={[1, null, 2]} gap={4} w={"100%"}>
                  <Box
                    className="serviceItemImage"
                    bgImage={service.image}
                    bgSize={"cover"}
                    borderRadius={12}
                    bgPos={"center"}
                    minH={["200px", "400px", "0px"]}
                  />

                  <VStack
                    className="serviceItemBenefit"
                    align={"stretch"}
                    border={"1px solid var(--divider3)"}
                    // bg={"var(--divider)"}
                    borderRadius={12}
                    gap={0}
                  >
                    <VStack p={5} pb={0} align={"stretch"}>
                      <Text
                        fontSize={20}
                        fontWeight={700}
                        textAlign={["center", null, "left"]}
                      >
                        {service.benefit?.title}
                      </Text>

                      <Accordion allowMultiple>
                        {service.benefit?.items.map((benefit, i) => (
                          <AccordionItem
                            key={i}
                            borderTop={i === 0 ? "none" : ""}
                            borderColor={"var(--divider3)"}
                            borderBottom={
                              //@ts-ignore
                              i === service.benefit?.items.length - 1
                                ? "none"
                                : ""
                            }
                          >
                            <h2>
                              <AccordionButton
                                py={4}
                                px={0}
                                _hover={{ bg: "transparent" }}
                              >
                                <Box as="span" flex="1" textAlign="left">
                                  {benefit.title}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel
                              pb={4}
                              opacity={0.5}
                              lineHeight={1.6}
                              px={0}
                            >
                              {benefit.narative}
                            </AccordionPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </VStack>

                    <Button
                      borderRadius={"0 0 12px 12px"}
                      transition={"200ms"}
                      rightIcon={<Icon as={ArrowUpRight} fontSize={iconSize} />}
                      bg={"transparent"}
                      h={"50px"}
                      _hover={{
                        bg: "var(--p500a)",
                      }}
                      color={"p.500"}
                      pr={5}
                      as={Link}
                      to={`/works?category=${i + 1}&search=`}
                    >
                      {lang === "id"
                        ? "Lihat karya layanan ini"
                        : "View this service portfolio"}
                    </Button>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </Box>
          ))}
        </VStack>

        <HStack
          id="servicePageNarative"
          p={4}
          borderRadius={12}
          mt={14}
          mb={10}
        >
          <Text textAlign={"center"} maxW={"800px"} mx={"auto"} fontSize={18}>
            {lang === "id"
              ? "Dengan layanan ini, kami berharap dapat membantu perusahaan Anda tumbuh dan mencapai tujuan bisnisnya. Kami percaya bahwa website yang baik adalah kunci untuk sukses dalam dunia digital saat ini."
              : "With this service, we hope to help your company grow and achieve its business goals. We believe that a good website is the key to success in today's digital world."}
          </Text>
        </HStack>
      </Container>

      <Contact />

      <Footer />
    </VStack>
  );
}
