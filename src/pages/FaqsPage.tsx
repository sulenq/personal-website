import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useTrigger from "../global/useTrigger";
import { getLang } from "../lib/lang";
import FloatingNav from "../components/Navs/FloatingNav";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import landingData from "../constant/landingData";
import Contact from "../landingSections/Contact";
import Footer from "../landingSections/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function FaqsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { trigger } = useTrigger();
  const lang = getLang();

  //Animation
  useGSAP(() => {
    gsap.from(".faqsItem", {
      y: 50,
      opacity: 0,
      stagger: {
        each: 0.2,
      },
    });
  });

  return (
    <VStack gap={0} align={"stretch"} overflowX={"clip"}>
      <Text display={"none"}>{trigger}</Text>

      <FloatingNav />

      <PageHeader>{"FAQs"}</PageHeader>

      <VStack gap={0} align={"stretch"} py={12}>
        <Container>
          <Accordion defaultIndex={[0]} allowMultiple>
            {landingData.contact[lang].faqs.map((faq, i) => (
              <AccordionItem
                className="faqsItem"
                key={i}
                borderTop={i === 0 ? "none" : ""}
                borderBottom={
                  i === landingData.contact[lang].faqs.length - 1 ? "none" : ""
                }
                borderColor={"var(--divider3)"}
              >
                <h2>
                  <AccordionButton py={4} px={0} _hover={{ bg: "transparent" }}>
                    <Box as="span" flex="1" textAlign="left" fontSize={"20px"}>
                      {faq.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} opacity={0.5} lineHeight={1.6} px={0}>
                  {faq.description}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </VStack>

      <Contact noFaqs />

      <Footer />
    </VStack>
  );
}
