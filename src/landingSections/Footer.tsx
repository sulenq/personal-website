import { VStack, Text, HStack, Box } from "@chakra-ui/react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";
import LangSwitcher from "../components/LangSwitcher";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export default function Footer(props: any) {
  useGSAP(
    () => {
      gsap.from(".footerItem", {
        scrollTrigger: scrollTriggerConfig("#footerContent"),
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.2,
        },
      });
    },
    { scope: "#footer" }
  );

  return (
    <VStack
      id="footer"
      bg={"var(--divider2)"}
      p={5}
      align={"stretch"}
      {...props}
    >
      <HStack justify={"space-between"} w={"100%"} maxW={"1440px"} mx={"auto"}>
        <Text className="footerItem">
          2024 © Fatwa Linovera. All right reserved.
        </Text>

        <HStack>
          <Box className="footerItem">
            <ColorModeSwitcher color={props.color || "current"} />
          </Box>

          <Box className="footerItem">
            <LangSwitcher color={props.color || "current"} />
          </Box>
        </HStack>
      </HStack>
    </VStack>
  );
}
