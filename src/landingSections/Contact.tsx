import {
  Box,
  Center,
  Link as ChakraLink,
  Icon,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import Container from "../components/Container";
import landingData from "../constant/landingData";
import { getLang } from "../lib/lang";
import { useGSAP } from "@gsap/react";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";
import gsap from "gsap";
import {
  EnvelopeSimple,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { useRef } from "react";

export default function Contact(props: any) {
  const lang = getLang();
  const data = landingData.contact[lang];
  const containerRef = useRef(null);

  const contacts = [
    {
      icon: EnvelopeSimple,
      name: "Email",
      link: "mailto:fatwalinovera@gmail.com",
    },
    {
      icon: LinkedinLogo,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/fatwa-linovera-620672150/",
    },
    {
      icon: WhatsappLogo,
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send?phone=6285877752503",
    },
  ];

  // Animation
  useGSAP(
    () => {
      gsap.from(".contactContent", {
        scrollTrigger: scrollTriggerConfig("#contactContent"),
        y: 50,
        opacity: 0,
      });

      gsap.from(".contactItem", {
        scrollTrigger: scrollTriggerConfig("#contactContent"),
        scale: 0.5,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <VStack
      id="contact"
      ref={containerRef}
      align={"stretch"}
      bg={"var(--divider)"}
      {...props}
    >
      <Container>
        <VStack id="contactContent" py={20}>
          <Text
            textAlign={"center"}
            fontSize={38}
            className="serif contactContent"
            maxW={"800px"}
            mb={4}
          >
            {data.cta}
          </Text>

          <Wrap justify={"center"} w={"100%"}>
            {contacts.map((contact, i) => (
              <Box className="contactItem" key={i}>
                <Center
                  p={5}
                  borderRadius={12}
                  cursor={"pointer"}
                  transition={"200ms"}
                  _hover={{ bg: "var(--divider)" }}
                  role="group"
                  className="clicky"
                  as={ChakraLink}
                  href={contact.link}
                  isExternal
                >
                  <Icon
                    as={contact.icon}
                    fontSize={[48, 64, 72]}
                    weight="thin"
                  />
                </Center>
              </Box>
            ))}
          </Wrap>
        </VStack>
      </Container>
    </VStack>
  );
}
