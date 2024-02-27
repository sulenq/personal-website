import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  FormErrorMessage,
  Heading,
  Icon,
  Input,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
  Wrap,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Container from "../components/Container";
import landingData from "../constant/landingData";

import { ArrowUpRight } from "@phosphor-icons/react";
import { iconSize } from "../constant/sizes";
import { getLang } from "../lib/lang";
import { useGSAP } from "@gsap/react";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";
import gsap from "gsap";

type Props = {
  noFaqs?: boolean;
};

export default function Contact({ noFaqs }: Props) {
  const lang = getLang();

  // Animation
  useGSAP(
    () => {
      gsap.from("#contactContent", {
        scrollTrigger: scrollTriggerConfig("#contactContent"),
        x: -300,
        opacity: 0,
      });

      gsap.from("#faqs", {
        scrollTrigger: scrollTriggerConfig("#faqsContent"),
        x: 300,
        opacity: 0,
      });
    },
    { scope: "#contact" }
  );

  const ContactUsComponent = () => {
    return (
      <VStack align={"stretch"}>
        <Heading
          as={"h1"}
          className="sectionTitle"
          mb={12}
          textAlign={["center", null, "left"]}
        >
          {landingData.contact[lang].title}
        </Heading>

        <form id="contactForm">
          <VStack align={"stretch"} gap={8}>
            <SimpleGrid columns={[1, 2]} gap={8}>
              <FormControl>
                <Input
                  className="inputContact"
                  placeholder={landingData.contact[lang].form.name}
                  variant={"flushed"}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <FormControl>
                <Input
                  className="inputContact"
                  placeholder={landingData.contact[lang].form.email}
                  variant={"flushed"}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={[1, 2]} gap={8}>
              <FormControl>
                <Input
                  className="inputContact"
                  placeholder={landingData.contact[lang].form.phone}
                  variant={"flushed"}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <FormControl>
                {/* <Select
                      className="inputContact"
                      placeholder={landingData.contact[lang].form.country}
                      variant={"flushed"}
                    ></Select> */}
                <Input
                  className="inputContact"
                  placeholder={landingData.contact[lang].form.country}
                  variant={"flushed"}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </SimpleGrid>

            <FormControl>
              <Input
                className="inputContact"
                placeholder={landingData.contact[lang].form.company}
                variant={"flushed"}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>

            <FormControl>
              <Textarea
                className="inputContact"
                placeholder={landingData.contact[lang].form.message}
                variant={"flushed"}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </VStack>
        </form>

        <Wrap my={8}>
          <Text opacity={0.5}>{landingData.contact[lang].form.discalimer}</Text>
          <Text
            fontWeight={600}
            as={ChakraLink}
            href={landingData.contact[lang].form.termsAndConditionsLink}
          >
            {landingData.contact[lang].form.termsAndConditions}
          </Text>
        </Wrap>

        <Button
          type="submit"
          form="contactForm"
          rightIcon={<Icon as={ArrowUpRight} fontSize={iconSize} />}
          w={"fit-content"}
          pl={6}
          mt={5}
          color={"white"}
          className="btn-ap clicky"
          h={"50px"}
          flexShrink={0}
        >
          {landingData.contact[lang].form.send}
        </Button>
      </VStack>
    );
  };

  return (
    <VStack
      id="contact"
      align={"stretch"}
      py={20}
      // bg={"var(--darka)"}
      bg={"black"}
      color={"white"}
      borderTop={"1px solid var(--divider3)"}
    >
      <Container>
        {noFaqs ? (
          <Box id={"contactContent"}>
            <ContactUsComponent />
          </Box>
        ) : (
          <SimpleGrid columns={[1, null, 2]} gap={12}>
            <Box id={"contactContent"}>
              <ContactUsComponent />
            </Box>

            <Box id="faqsContent">
              <VStack
                id="faqs"
                pt={6}
                pb={2}
                px={8}
                borderRadius={8}
                border={"1px solid var(--divider3)"}
                align={"stretch"}
              >
                <Heading as={"h1"} mb={8} fontWeight={600}>
                  FAQs
                </Heading>

                <Accordion defaultIndex={[0]} allowMultiple>
                  {landingData.contact[lang].faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      borderTop={i === 0 ? "none" : ""}
                      borderBottom={
                        i === landingData.contact[lang].faqs.length - 1
                          ? "none"
                          : ""
                      }
                      borderColor={"var(--divider3)"}
                    >
                      <h2>
                        <AccordionButton py={4} px={0}>
                          <Box as="span" flex="1" textAlign="left">
                            {faq.title}
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
                        {faq.description}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* <HStack
              mt={"auto"}
              as={Link}
              to={landingData.contact[lang].allFaqs.link}
              fontWeight={600}
              role="group"
              transition={"200ms"}
              gap={1}
              color={"p.400"}
            >
              <Text>{landingData.contact[lang].allFaqs.label}</Text>

              <Icon
                transition={"200ms"}
                w={"0px"}
                opacity={0}
                _groupHover={{ w: "20px", opacity: 1 }}
                as={ArrowUpRight}
              />
            </HStack> */}
              </VStack>
            </Box>
          </SimpleGrid>
        )}
      </Container>
    </VStack>
  );
}
