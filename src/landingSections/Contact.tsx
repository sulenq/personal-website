import {
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

export default function Contact() {
  const lang = getLang();
  const data = landingData.contact[lang];
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

  return (
    <VStack
      id="contact"
      align={"stretch"}
      py={20}
      bg={"var(--divider2)"}
      // color={"white"}
    >
      <Container>
        <VStack>
          <Text
            textAlign={"center"}
            fontSize={38}
            className="serif"
            maxW={"800px"}
            mb={4}
          >
            {data.cta}
          </Text>

          <Wrap justify={"center"} w={"100%"}>
            {contacts.map((contact, i) => (
              <Center
                key={i}
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
                <Icon as={contact.icon} fontSize={72} weight="thin" />
              </Center>
            ))}
          </Wrap>
        </VStack>
      </Container>
    </VStack>
  );
}
