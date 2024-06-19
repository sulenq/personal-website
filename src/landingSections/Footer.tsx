import { VStack, Text, HStack, Box } from "@chakra-ui/react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTriggerConfig from "../lib/scrollTriggerConfig";
import LangSwitcher from "../components/LangSwitcher";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useRef } from "react";

export default function Footer(props: any) {
  const containerRef = useRef(null);
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
    { scope: containerRef }
  );

  return (
    <VStack
      id="footer"
      ref={containerRef}
      bg={"var(--divider)"}
      p={5}
      align={"stretch"}
      {...props}
    >
      <HStack
        id="footerContent"
        justify={"space-between"}
        w={"100%"}
        maxW={"1280px"}
        mx={"auto"}
      >
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
